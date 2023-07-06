import ArticleCard from "./ArticleCard";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../store/actions/NewsListAction";
import { useEffect, useState } from "react";
import ScrollerText from "../utils/ScrollerText";

const ArticleList = () => {
  const dispatch = useDispatch();
  const { news } = useSelector((state: State) => state.newsReducer);
  const [sortOption, setSortOption] = useState("newest");
  const [keyword, setKeyword] = useState("");
  const [selectedLang, setSelectedLang] = useState("en");
  const languages = ["en", "ar", "fr", "es", "it", "pt"];

  useEffect(() => {
    dispatch(getNews(selectedLang));
  }, [selectedLang]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const languageSelectHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLang(event.target.value);
  };

  const sortArticles = (): Article[] => {
    let sorted: Article[] = news && news.length ? [...news] : [];
    if (sortOption === "newest") {
      sorted = sorted.sort(
        (a, b) =>
          new Date(b.publishedAt!).getTime() -
          new Date(a.publishedAt!).getTime()
      );
    } else if (sortOption === "oldest") {
      sorted = sorted.sort(
        (a, b) =>
          new Date(a.publishedAt!).getTime() -
          new Date(b.publishedAt!).getTime()
      );
    }
    return sorted;
  };
  const sortedArticles: Article[] = sortArticles();
  const headLines = news && news.length && news.map((i: any) => i.title);

  const filteredArticles: Article[] = sortedArticles.filter((article) => {
    const title = article.title.toLowerCase();
    return title.includes(keyword.toLowerCase());
  });

  return (
    /* all news articles */
    <>
      {headLines && <ScrollerText text={headLines.join(" | ")} />}
      <div className="max-w-6xl mx-auto flex justify-between border-t border-gray-300/60 items-center px-5">
        <div className="flex mt-1 w-full max-w-6xl mx-auto justify-between items-center px-5">
          <input
            type="text"
            value={keyword}
            onChange={handleInputChange}
            placeholder="Type keyword here..."
            className="flex-1 p-2 w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent text-orange-400"
          />
          <select
            className="p-2 w-max md:w-max rounded-lg bg-gray-200/40 dark:bg-gray-600/40"
            value={selectedLang}
            onChange={languageSelectHandler}
          >
            {languages.map((lang: string, index: number) => (
              <option value={lang} key={index}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex gap-3 mt-3 ml-7 items-center align-middle">
        <h2 className="text-md">Sort By:</h2>
        <select
          className="p-2 w-1/3 md:w-1/6 rounded-lg bg-gray-200/40 dark:bg-gray-600/40"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {!news || news.length === 0 ? (
          <h1 className="text-orange-400 text-4xl">Sorry! No News</h1>
        ) : filteredArticles.length === 0 ? (
          <h1 className="text-orange-400 text-4xl">Sorry! No Results</h1>
        ) : (
          filteredArticles.map((article: Article, index: number) => (
            <ArticleCard key={article.title} article={article} index={index} />
          ))
        )}
      </div>
    </>
  );
};

export default ArticleList;
