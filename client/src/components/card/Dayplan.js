
function Dayplan({day}) {
    console.log(day);




    return day && (
        <>
            <h1>{day.date}</h1>
            <h2>{day.amPm}</h2>
            {day.menuList.map(menu => <p>{menu.menuName}</p>)}
        </>
    );
}

export default Dayplan;