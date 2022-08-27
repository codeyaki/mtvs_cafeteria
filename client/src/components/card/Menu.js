import { Link } from "react-router-dom";

function Menu({menu}){
    return (
        <li><Link to={`/menus/${menu.menuCode}`}>{menu.menuName}</Link></li>
    );
}

export default Menu;