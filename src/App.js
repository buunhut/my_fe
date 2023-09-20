// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.scss'
import DangKy from './components/DangKy';
import DangNhap from './components/DangNhap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DangNhap />}></Route>
        <Route path='/dangky' element={<DangKy />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
