import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {callGetMenuAPI} from './../../apis/MenuAPICalls';

function MenuList(){
    const menus = useSelector(state => state.menuReducer);
    console.log(menus);
    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch(callGetMenuAPI());
        },[]
    );

    return menus && (
        <article>
            <h1>메뉴 목록</h1>
            <ul>
                {menus?.map(menu => <li key={menu.menuCode}>{menu.menuName}</li>)}
            </ul>
            <div>
                
            </div>
        </article>

    );
}


export default MenuList;
