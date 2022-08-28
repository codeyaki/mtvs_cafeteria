
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetWeekplanAPI } from '../apis/MtvsCafeteriaAPICalls';
import Dayplan from './../components/card/Dayplan';
import { RESET_STATE } from './../modules/ReviewModule';
function Weekplans(){
    const results = useSelector(state => state.weekplanReducer);
    const weekplan = results?.results;
    const dispatch = useDispatch();
    useEffect(
        ()=> { 
            dispatch(callGetWeekplanAPI());
            dispatch({type:RESET_STATE});
        }
        , []
    );
    return weekplan && (
        <article>
            <h1>식당 주간 식단표</h1>
            <div className='buttonBox'>
            <div>
                <h2>시작일: {weekplan.weekStart}</h2>
                <h2>종료일: {weekplan.weekEnd}</h2>
            </div>
                {results.previousWeek? 
                    <button onClick={() => dispatch(callGetWeekplanAPI(results?.previousWeek))}>이전주</button> 
                    : <button style={{'backgroundColor': 'gray', color: 'white'}}>마지막입니다</button>}
                {results.nextWeek?
                    <button onClick={() => dispatch(callGetWeekplanAPI(results?.nextWeek))}>다음주</button> 
                    : <button style={{'backgroundColor': 'gray', color: 'white'}}>마지막입니다</button>}
            </div>
            <ul className='dayplanList'>
                {weekplan.days.map((day, index) => {return <Dayplan key={day.dayplanCode} day={day} index={index}/>})}
            </ul>
            <div className='notiveBox'>
                <h2>식당 공지사항</h2>
                <p>{weekplan.weekNotice}</p>
            </div>
        </article>
    );

}

export default Weekplans;