import ArticleList from "./articles/ArticleList";
import ArticlePage from "./articles/ArticlePage";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Weather from "./weather/Weather";
import ScrollUpButton from "./utils/ScrollUpButton";


function App() {
  return (
    <div className="bg-[#F5F5F7] h-full w-full dark:bg-[#1D1D1F] transition-all duration-700">
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <div className="max-w-6xl mx-auto scroll-smooth">
        <Weather />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:title" element={<ArticlePage />} />
        </Routes>
      </div>
      <div className="sticky flex justify-end bottom-10 right-10 md:mr-10 mx-auto">
        <ScrollUpButton />
      </div>
    </div>
  );
}

export default App;
