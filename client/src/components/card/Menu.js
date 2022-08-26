import { Link } from "react-router-dom";

function Menu({menu}){
    return (
        <>
            <Link to={`/menus/${menu.menuCode}`}><p>{menu.menuName}</p></Link>
        </>
    );
}

export default Menu;