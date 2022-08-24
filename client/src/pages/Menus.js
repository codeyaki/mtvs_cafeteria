
import MenuList from './../components/lists/MenuList';
import { useSelector, useDispatch } from 'react-redux';
function Menus(){
    const result = useSelector((state) => state.menuReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>메뉴 목록</h1>
        </div>
    );
}

export default Menus;