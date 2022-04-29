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
import Register from './components/Register/Register';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/inventory/:id' element={<RequireAuth>
        <Invertories/>
      </RequireAuth>}/>
      <Route path='/manageInventory' element={<ManageInventory/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
