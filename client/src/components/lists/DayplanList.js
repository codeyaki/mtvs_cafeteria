import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { callGetWeekMenusAPI } from './../../apis/WeekMenusAPICalls';
import Menu from './../card/Menu';
import MenuList from "./MenuList";




function DayplanList(){
    const {results} = useSelector(state => state.weekMenusReducer );
    // console.log(results);
    const dispatch = useDispatch();
    const {dayplanAndMenu} = results;
    useState(() => {
        dispatch(callGetWeekMenusAPI());
    }, []);
    return (
        <article>
            <h2 align="center">주 간 메 뉴 표</h2>
            <div className="dateBox">
                <h5>시작일</h5>
                {results?.weekStart}
                <h5>종료일</h5>
                {results?.weekEnd}  


            </div>
            <div className="dayplanList">
                { results?.dayplanAndMenu?.map((menu, index) => <MenuList key={menu.menuCode} menulist= {menu}/>) }
            </div>
            
            <h2>공지사항</h2> 
            <p>{results?.weekNotice}</p>
        </article>
    );
}

export default DayplanList;