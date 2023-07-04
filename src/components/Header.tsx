import { Bars3Icon } from "@heroicons/react/24/solid";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer hover:text-orange-400" />
        <Link to="/"
          className="font-serif text-4xl text-center underline decoration-orange-400">
          Entri News
        </Link>
        {/* dark mode */}
        <div>
          <MoonIcon className="h-8 w-8  cursor-pointer hover:text-orange-400" />
          {/* <SunIcon className="h-8 w-8 cursor-pointer text-orange-400" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
