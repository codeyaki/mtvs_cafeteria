
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { callGetMenuDetailAPI } from './../apis/MtvsCafeteriaAPICalls';
function NewReview(){
    const results = useSelector(state => state.menuReducer);
    const {menuCode} = useParams();
    const dispatch = useDispatch();
    console.log(results);
    useEffect(
        ()=>{
            dispatch(callGetMenuDetailAPI(menuCode));
        }
        , 
        []
    );


    return (
        <>
            <h1>{results.menu?.menuName} 리뷰 추가하기</h1>
        </>
    );
}

export default NewReview;