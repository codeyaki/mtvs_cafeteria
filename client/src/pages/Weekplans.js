
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetWeekplanAPI } from '../apis/WeekplanAPICalls';
function Weekplans(){
    const results = useSelector(state => state.weekplanReducer);
    const dispatch = useDispatch();
    useEffect(
        ()=> { dispatch(callGetWeekplanAPI() ); }
        , []
    );
    console.log(results);
    return (
        <article>
            <h1>식당 주간 식단표</h1>
        </article>
    );

}

export default Weekplans;