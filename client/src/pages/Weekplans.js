
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetWeekplanAPI } from '../apis/MtvsCafeteriaAPICalls';
import Dayplan from './../components/card/Dayplan';
function Weekplans(){
    const results = useSelector(state => state.weekplanReducer);
    const weekplan = results?.results;
    const dispatch = useDispatch();
    useEffect(
        ()=> { 
            dispatch(callGetWeekplanAPI());
        }
        , []
    );
    return weekplan && (
        <article>
            {results.previousWeek? <button onClick={() => dispatch(callGetWeekplanAPI(results?.previousWeek))}>이전 주</button> : null}
            {results.nextWeek? <button onClick={() => dispatch(callGetWeekplanAPI(results?.nextWeek))}>다음 주</button> : null}
            <h1>식당 주간 식단표</h1>
            <h2>시작일: {weekplan.weekStart}</h2>
            <h2>종료일: {weekplan.weekEnd}</h2>
            <ul className='dayplanList'>
                {weekplan.days.map((day, index) => {return <Dayplan key={day.dayplanCode} day={day} index={index}/>})}
            </ul>
            <div>
                <h2>식당 공지사항</h2>
                <p>{weekplan.weekNotice}</p>
            </div>
        </article>
    );

}

export default Weekplans;