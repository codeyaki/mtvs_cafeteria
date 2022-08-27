

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetMenuAPI } from './../apis/MtvsCafeteriaAPICalls';
import Menu from './../components/card/Menu';


function Menus(){
    const results = useSelector((state) => state.menuReducer);
    const menuList = results.results;
    const dispatch = useDispatch();

    useEffect(
        ()=>{dispatch(callGetMenuAPI())}
        ,[]
    )

    return (
        <div>
            <h1>메뉴 목록</h1>
            <div>
                {results.previous? <button onClick={() => {dispatch(callGetMenuAPI(results.previous))}}>이전</button> : null}
                {results.next? <button onClick={() => {dispatch(callGetMenuAPI(results.next))}}>다음</button> : null}
            </div>
            <ul>
                {menuList?.map((menu)=><Menu key={menu.menuCode} menu={menu}/>)}
            </ul>
        </div>
    );
}

export default Menus;