import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Invertories from './components/Inventories/Invertories';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/inventory/:id' element={<RequireAuth>
        <Invertories/>
      </RequireAuth>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
