
function Dayplan({day}) {



    return day && (
        <>
            <h1>{day.date}</h1>
            <h2>{day.amPm}</h2>
            {day.menuList.map(menu => <p key={menu.menuCode}>{menu.menuName}</p>)}
        </>
    );
}

export default Dayplan;