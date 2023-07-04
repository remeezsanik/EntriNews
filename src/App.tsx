import Header from "./components/Header";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="bg-[#F5F5F7] transition-all duration-700">
      <Header />
      <div className="max-w-6xl mx-auto">
        <NavBar />
        <SearchBox />
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
