import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Invertories from './components/Inventories/Invertories';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/invertories' element={<Invertories/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
