
import { useSelector } from 'react-redux';

function Weekplans(){
    const results = useSelector(state => state.weekplanReducer)
    return (
        <article>
            <h1>식당 주간 식단표</h1>
        </article>
    );

}

export default Weekplans;