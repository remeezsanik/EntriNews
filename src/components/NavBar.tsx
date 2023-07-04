import { categories } from "../constants/categories";
import NavItem from "./NavItem";
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname?.split("/").pop() === path;
  };

  return (
    <div className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b mt-10">
      {categories.map((category) => (
        <NavItem
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </div>
  );
};

export default NavBar;
