import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link to={"/portal/translate"}>Projects</Link></li>
            <li><Link to={"/portal/attestors"}>Attestors</Link></li>
            <li><a>Grantsstack</a></li>
        </ul>
    )
}

export default Menu;