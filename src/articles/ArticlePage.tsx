import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../store/actions/NewsListAction";
import { Link, useParams } from "react-router-dom";

const ArticlePage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { news, lang } = useSelector((state: State) => state.newsReducer);
  useEffect(() => {
    dispatch(getNews(lang));
  }, []);

  const articleItem = news.find(
    (i: any) => i.title === params.title?.replaceAll("%", " ")
  );
  const article: Article = articleItem;

  return (
    <div className="h-full">
      <Link
        to="/"
        className="py-5 px-2 md:px-0 hover:text-orange-400 text-sm md:text-xl"
      >
        &larr; back
      </Link>
      {article && (
        <div className="flex flex-col h-full pb-24 px-0 lg:px-10">
          <img
            src={article.urlToImage || "/files/entri_small.jpg"}
            alt={article.title!}
            className="h-42 px-2 md:px-0 mt-5 mx-auto object-cover rounded-lg shadow-md"
          />
          <div className="px-2 md:px-5 lg:px-10 overflow-hidden">
            <h1 className="headerTitle px-0 no-underline pb-2">
              {article.title!}
            </h1>

            <div className="flex divide-x-2 mt-2 space-x-4">
              <h2 className="font-bold mx-2">
                {" "}
                By: {article.author || "Unknown"}
              </h2>
              <h2 className="font-bold mx-2">
                {" "}
                Source: {article.url || "Unknown"}
              </h2>
              <p className="px-2 mx-2">{article.publishedAt}</p>
            </div>
            <p className="px-2 mt-2">{article.description!}</p>
            <p className="px-2 mt-3">{article.content!}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
