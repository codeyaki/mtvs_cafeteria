
import Menu from './Menu';
function Dayplan({day, index}) {
    return day && (
        <div className='dayplanCard'>
            {(index%2==0)? <h3>{day.date}</h3> : null}
            <h4>{day.amPm}</h4>
            {day.menuList.map(menu => <Menu key={menu.menuCode} menu={menu}/>)}
        </div>
    );
}

export default Dayplan;