import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { callGetWeekMenusAPI } from './../../apis/WeekMenusAPICalls';


function PlanList(){
    const {results} = useSelector(state => state.weekMenuReducer );
    
    const dispatch = useDispatch();

    useState(() => {
        dispatch(callGetWeekMenusAPI());
    }, []);
    return (
        <article>
            <h1>테스트</h1>
        </article>
    );
}

export default PlanList;