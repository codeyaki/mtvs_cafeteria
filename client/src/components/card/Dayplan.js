
import Menu from './Menu';
function Dayplan({day}) {



    return day && (
        <>
            <h1>{day.date}</h1>
            <h2>{day.amPm}</h2>
            {day.menuList.map(menu => <Menu key={menu.menuCode} menu={menu}/>)}
        </>
    );
}

export default Dayplan;