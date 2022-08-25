

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetMenuAPI } from './../apis/MtvsCafeteriaAPICalls';
function Menus(){
    const results = useSelector((state) => state.menuReducer);
    const dispatch = useDispatch();

    useEffect(
        ()=>{dispatch(callGetMenuAPI())}
        ,[]
    )

    return (
        <div>
            <h1>메뉴 목록</h1>
        </div>
    );
}

export default Menus;