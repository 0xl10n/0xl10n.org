import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
      {/* Sidebar content here */}
      <li>
        <Link to={"/portal/translate"}>Projects</Link>
      </li>
      <li>
        <Link to={"/portal/attestors"}>Attestors</Link>
      </li>
      <li>
        <a>Grantsstack</a>
      </li>
    </ul>
  );
};

export default Menu;
