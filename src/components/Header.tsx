import { Link } from "react-router-dom";
import DarkModeButton from "../utils/DarkModeButton";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between p-10 items-center bg-[#F5F5F7] dark:bg-[#1D1D1F]">
        <Link to="/">
          <img
            src="/files/entri_small.jpg"
            alt="Entri Logo"
            className="h-8 w-8 md:h-12 md:w-12 cursor-pointer rounded-full"
          />
        </Link>
        <h1 className="font-serif text-2xl md:text-4xl text-center underline decoration-orange-400">
          The Entri Times
        </h1>
        {/* dark mode */}
        <div>
          <DarkModeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
