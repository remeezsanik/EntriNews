import Header from "./components/Header";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Providers from "./components/Providers";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="bg-[#F5F5F7] dark:bg-[#1D1D1F] transition-all duration-700">
      <Providers>
        <Header />
        <div className="max-w-6xl mx-auto">
          <NavBar />
          <SearchBox />
          <HomePage />
        </div>
      </Providers>
    </div>
  );
}

export default App;
