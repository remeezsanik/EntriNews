import { Link } from "react-router-dom";

type IProps = {
  category: string;
  isActive: boolean;
};

const NavItem = ({ category, isActive }: IProps) => {
  return (
    <div>
      <Link
        to={`/news/${category}`}
        className={`navItems ${isActive && "underline decoration-orange-400 underline-offset-4 font-bold text-lg"}`}>
        {category}
      </Link>
    </div>
  );
};

export default NavItem;
