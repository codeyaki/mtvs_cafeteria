import { Link } from "react-router-dom";

function Menu({menu}){
    return (
        <li><Link to={`/menus/${menu.menuCode}`}>{menu.menuName} ({menu.avgScore})</Link></li>
    );
}

export default Menu;