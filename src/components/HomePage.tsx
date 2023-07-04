import NewsList from "./NewsList";


const HomePage = () => {
  var news: NewsData;

  return (
    <div>
      <NewsList news={news!} />
    </div>
  );
};

export default HomePage;
