import { Link } from "react-router-dom";
import ReadMoreButton from "../utils/ReadMoreButton";

type IProps = {
  article: Article;
  index?: number;
};

const ArticleCard = ({ article }: IProps) => {
  return (
    <div
      className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-s hover:scale-105 hover:shadow-lg
  hover:bg-slate-200 transition-all duration-200 ease-out">
      {article!.urlToImage && (
        <img
          src={article!.urlToImage}
          alt={article!.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"/>
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-serif font-bold dark:text-gray-200">
            {article!.title}
          </h2>

          <section className="flex-1 mt-2">
            <p className="text-xs line-clamp-3 md:line-clamp-6 dark:text-gray-200">
              {article!.description}
            </p>
          </section>

          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>{article!.author || "Unknown"}</p>
            <p>{article!.publishedAt}</p>
          </footer>
        </div>
        <Link to={`/article/${article!.title}`}>
          <ReadMoreButton article={article!} />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
