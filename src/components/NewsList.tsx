
import Article from "./Article";
import NEWS from "./../mockData.json";

type NewsProps = {
  news: NewsData;
};

{/* all news articles */}


const NewsList = ({ news }: NewsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
      {NEWS?.articles.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
