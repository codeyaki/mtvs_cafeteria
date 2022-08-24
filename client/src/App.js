import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Weekplans from './pages/Weekplans';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='weekplans' element={<Weekplans/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
