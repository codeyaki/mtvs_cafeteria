import { useSelector, useDispatch } from 'react-redux';
import { callGetMenuDetailAPI } from './../apis/MtvsCafeteriaAPICalls';
import { useEffect } from 'react';

const { useParams } = require("react-router-dom");

function MenuDetails() {

    const {menuCode} = useParams();

    const result = useSelector(state => state.menuReducer);
    const reviewList = result.reviewList?.result;
    const dispatch = useDispatch();
    useEffect(
        ()=>{
            dispatch(callGetMenuDetailAPI(menuCode));
        }
        ,[]
    );
    console.log(result.reviewList?.avgScore)
    return (
        <>
            <h2> {result.menu?.menuName}의 리뷰 확인하기</h2>
            {result.reviewList?.avgScore
            ?   <>
                    <h3> 평균 평점 : {result.reviewList?.avgScore}</h3>
                    <ul>
                        {reviewList?.map(review => { 
                            return (<li key={review.reviewCode} className='reviewCard'>
                                <h4 className='reivewElement'>{review.nickname}의 리뷰</h4>
                                <h5 className='reivewElement'>평점: {review.reviewScore} </h5>
                                <h5 className='reivewElement'>리뷰 내용: {review.reviewDetails} </h5>
                            </li>);
                        })}
                    </ul>
                </>
            :   
                <>
                    <h3>리뷰가 없습니다. 처음으로 리뷰를 작성하시겠습니까 ?</h3>
                    <button>리뷰 작성하기</button>
                </>
            }
        </>

    );

}

export default MenuDetails;