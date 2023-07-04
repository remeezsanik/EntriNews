import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    navigate(`/search?q=${input}`);
  };

  return (
    <div>
      <form
        className="max-w-6xl mx-auto flex justify-between items-center px-5"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search here..."
          className="flex-1 p-2 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400"
        />
        <button
          className="text-orange-400 disabled:text-gray-400"
          type="submit"
          disabled={!input}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
