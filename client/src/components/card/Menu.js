import { Link } from "react-router-dom";

function Menu({menu}){
    console.log(menu);
    return (
        <>
            <Link to={`/menus/${menu.menuCode}`}><p>{menu.menuName}</p></Link>
        </>
    );
}

export default Menu;