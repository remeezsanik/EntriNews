import { Bars3Icon } from "@heroicons/react/24/solid";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="grid grid-cols-3 p-10 items-center">
      <Bars3Icon className="h-8 w-8 cursor-pointer" />
      <h1 className="font-serif text-4xl text-center underline decoration-4 decoration-orange-400">Entri News</h1>
      {/* dark mode */}
      <div>
        <MoonIcon className="h-8 w-8 cursor-pointer" />
        {/* <SunIcon className="h-8 w-8 cursor-pointer text-orange-400" /> */}
      </div>
    </div>
  );
};

export default Header;
