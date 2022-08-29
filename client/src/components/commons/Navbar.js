const { NavLink } = require("react-router-dom");


function Navbar(){
    const activeStyle = {
        backgroundColor: 'gray',
        borderRadius: '5px',
        color: 'white',
    }
    return (
        <nav>
            <NavLink align='center' className="navATag" to="/" style={ ({ isActive }) => isActive? activeStyle: undefined }>메인</NavLink>
            <NavLink align='center' className="navATag" to="/weekplans" style={ ({ isActive }) => isActive? activeStyle: undefined }>주간 메뉴 조회</NavLink>
            <NavLink align='center' className="navATag" to="/menus" style={ ({ isActive }) => isActive? activeStyle: undefined }>전체 메뉴 조회</NavLink>
        </nav>
    );
}

export default Navbar;