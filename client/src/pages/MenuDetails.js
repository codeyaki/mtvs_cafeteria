import { useSelector, useDispatch } from 'react-redux';
import { callGetMenuDetailAPI } from './../apis/MtvsCafeteriaAPICalls';
import { useEffect } from 'react';

const { useParams } = require("react-router-dom");

function MenuDetails() {

    const {menuCode} = useParams();

    const result = useSelector(state => state.menuReducer);

    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch(callGetMenuDetailAPI(menuCode));
        }
        ,[]
    );

    console.log(menuCode);

    return (
        <>
            <h1>테스트</h1>
        </>

    );

}

export default MenuDetails;