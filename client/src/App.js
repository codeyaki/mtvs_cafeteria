import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Weekplans from './pages/Weekplans';
import Menus from './pages/Menus';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='weekplans' element={<Weekplans/>} />
          <Route path="menus" element={<Menus/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
