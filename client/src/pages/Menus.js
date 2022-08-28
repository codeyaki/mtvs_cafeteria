

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetMenuAPI } from './../apis/MtvsCafeteriaAPICalls';
import Menu from './../components/card/Menu';
import Button from './../components/commons/Button';
import { RESET_STATE } from './../modules/ReviewModule';
import { RESET_MENUS } from './../modules/MenuModule';


function Menus(){
    const results = useSelector((state) => state.menuReducer);
    const menuList = results.results;
    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch(callGetMenuAPI());
            dispatch({type:RESET_STATE});
            dispatch({type:RESET_MENUS});
        }
        ,[]
    )

    return (
        <article>
            <div className='buttonBox'>
            <h1>메뉴 목록</h1>
                {results.previous? 
                    <button onClick={() => {dispatch(callGetMenuAPI(results.previous))}}>이전</button> 
                    : <button style={{'backgroundColor': 'gray', color: 'white'}}>마지막입니다</button>}
                {results.next?
                    <button onClick={() => {dispatch(callGetMenuAPI(results.next))}}>다음</button> 
                    : <button style={{'backgroundColor': 'gray', color: 'white'}}>마지막입니다</button>}
            </div>
            <ul>
                {menuList?.map((menu)=><Menu key={menu.menuCode} menu={menu}/>)}
            </ul>
        </article>
    );
}

export default Menus;