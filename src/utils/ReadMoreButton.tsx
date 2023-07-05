import { useNavigate } from "react-router-dom";

type IProps = {
  article: Article;
};

function ReadMoreButton({ article }: IProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    // const queryString = Object.entries(article)
    //   .map(([key, value]) => `${key}=${value}`)
    //   .join("&");
    const url = `/?${article.title}`;
    // console.log("query >> ", queryString);

    navigate(url);
  };

  return (
    <button
      className="bg-orange-300 w-full h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-400 bottom-0"
      onClick={handleClick}
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;
