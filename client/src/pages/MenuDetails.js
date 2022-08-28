import { useSelector, useDispatch } from 'react-redux';
import { callDeleteReivewAPI, callGetMenuDetailAPI } from './../apis/MtvsCafeteriaAPICalls';
import { useEffect } from 'react';
import { RESET_STATE } from '../modules/ReviewModule';

const { useParams} = require("react-router-dom");

function MenuDetails() {

    const {menuCode} = useParams();

    const result = useSelector(state => state.menuReducer);
    const isDelete = useSelector(state => state.reviewReducer);
    const reviewList = result.reviewList?.result;
    const dispatch = useDispatch();
    useEffect(
        ()=>{
            dispatch(callGetMenuDetailAPI(menuCode));
            dispatch({type:RESET_STATE})
        }
        ,[]
    );
    const handlerDelete = (reviewCode) => {
        const password = prompt("비밀번호를 입력하세요");
        const requestData = {password: password, reviewCode: reviewCode}
        dispatch(callDeleteReivewAPI(requestData));
        
        
    }
    useEffect(
        ()=>{
            if(isDelete?.results == 'success'){
                alert('정상적으로 삭제되었습니다.');
                dispatch(callGetMenuDetailAPI(menuCode));
            } else if(isDelete?.results == 'error') {
            alert(`삭제 실패 \n에러코드: ${isDelete.errCode}\n에러메시지: ${isDelete.errMessage}`)
            }
        },[isDelete]
    );

    return (
        <article> 
            <h2> {result.menu?.menuName}의 리뷰 확인하기</h2>
            <div className='buttonBox'>
                <button onClick={ () => window.location.href=`/review/new/${menuCode}`}>리뷰 작성하기</button>
            </div>
            {result.reviewList?.result.length
            ?   <>
                    <h3> 평균 평점 : {result.reviewList?.avgScore}</h3>
                    <ul>
                        {reviewList?.map(review => { 
                            return (<li key={review.reviewCode} className='reviewCard'>
                                <button className='deleteButton' onClick={() => handlerDelete(review.reviewCode)}>
                                    <svg width="20" height="20" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 0.875C6.25195 0.875 0.375 6.75195 0.375 14C0.375 21.248 6.25195 27.125 13.5 27.125C20.748 27.125 26.625 21.248 26.625 14C26.625 6.75195 20.748 0.875 13.5 0.875ZM19.125 14.7031C19.125 14.832 19.0195 14.9375 18.8906 14.9375H8.10938C7.98047 14.9375 7.875 14.832 7.875 14.7031V13.2969C7.875 13.168 7.98047 13.0625 8.10938 13.0625H18.8906C19.0195 13.0625 19.125 13.168 19.125 13.2969V14.7031Z" fill="#F24E1E"/>
                                    </svg>
                                </button>
                                <h4 className='reivewElement'>{review.nickname}님의 리뷰</h4>
                                <h5 className='reivewElement'>"{review.reviewDetails}" </h5>
                                <h5 className='reivewElement'>평점: {review.reviewScore} </h5>
                                <h5 className='reviewElement'>작성한 날짜: {review.insertDate}</h5>
                                
                            </li>);
                        })}
                    </ul>
                </>
            :   
                <>
                    <h3>리뷰가 없습니다. 처음으로 리뷰를 작성해주세요!!</h3>
                    
                </>
            }

        </article>

    );

}

export default MenuDetails;