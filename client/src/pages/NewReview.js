
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { callGetMenuDetailAPI, callNewReviewAPI} from './../apis/MtvsCafeteriaAPICalls';
import { RESET_STATE } from './../modules/ReviewModule';
function NewReview(){
    const menuDetail = useSelector(state => state.menuReducer);
    const results = useSelector(state => state.reviewReducer);
    const {menuCode} = useParams();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        nickname:"",
        password:"",
        score: 0,
        details: "",
        menuCode: menuCode
    });

    const onChangehandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }
    
    const sendFormData = () => {
        // console.log(formData);
        dispatch(callNewReviewAPI(formData, menuCode));
        console.log('21')
        console.log(results);
        // if(results)
        // location.
    }

    // console.log(results);
    useEffect(
        ()=>{
            dispatch(callGetMenuDetailAPI(menuCode));
            dispatch({type:RESET_STATE});
        }
        , []
    );

    useEffect(
        () => {
            if(results.results === 'error'){
                alert(`에러 발생 \n 에러 코드 : ${results.code} \n에러 메시지 : ${results.message}`)
            } else if ( results.results === "success"){
                alert(`정상적으로 추가되었습니다.`);
                window.location.href = `/menus/${results.insertedId}`

            }
        } 
        , [results]
    )


    return (
        <>
            <div className='buttonBox'>
                <button onClick={() => window.location.href=`/menus/${menuCode}`}>뒤로가기</button>
            </div>
            <h1>{menuDetail.menu?.menuName} 리뷰 추가하기</h1>
            <label>닉네임: </label>
            <input type="text" name="nickname" id="nickname" placeholder='닉네임을 입력하세요' onChange={onChangehandler}/>
            <br/>
            <label>비밀번호 :</label>
            <input type="password" name="password" is="password" onChange={onChangehandler} />
            <br/>
            <label>평점 :</label>
            <select name="score" id="score" onClick={onChangehandler}>
                <option value="none" >별점을 선택해주세요</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
                <option value="4">★★★★</option>
                <option value="5">★★★★★</option>
            </select>
            <br/>
            <label>리뷰 내용</label>
            <input className='reviewDetails' id="details" type="text" name="details" onChange={onChangehandler} ></input>
            <br/>
            <button onClick={sendFormData}>작성 완료</button>
            
        </>
    );
}

export default NewReview;