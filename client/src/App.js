import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Weekplans from './pages/Weekplans';
import Menus from './pages/Menus';
import MenuDetails from './pages/MenuDetails';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='weekplans' element={<Weekplans/>} />
          <Route path="menus">
            <Route index element={<Menus/>} />
            <Route path=':menuCode' element={<MenuDetails/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
