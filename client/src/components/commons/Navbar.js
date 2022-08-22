const { NavLink } = require("react-router-dom");


function Navbar(){

    return (
        <div>
            <ul>
                <li><NavLink to="/">메인</NavLink></li>
                <li><NavLink to="/menu-plans">식당 주간 식단표</NavLink></li>
                <li><NavLink to="/menus">식당 메뉴</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;