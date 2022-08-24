import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { callGetMenuAPI } from './../../apis/MenuAPICalls';
import Menu from './../card/Menu';

function MenuList(menus){
    console.log(menus);

    return (
        <>
            {/* {menus?.menu.map(menu => {<Menu key={menuCode}/>})} */}
        </>

    );
}


export default MenuList;