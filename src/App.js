import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import User from './components/User';
import { Auth } from './components/Auth';
import { Signup } from './components/Signup';
import Admin from './components/Admin';
import Feedbackcollect from './components/Feedbackcollect';

function App() {
  return (
    <div className="App">
      <Auth>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/feedback' element={<Feedbackcollect/>} />
      </Routes>
      </Auth>
    </div>
  );
}

export default App;
