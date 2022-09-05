import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from './components/sign'
import SignUp from './components/signup'
import Signin from './components/signin'
import Reset from './components/reset'
import Manager from './components/signs/manager'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign></Sign>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signin/reset' element={<Reset></Reset>}></Route>
        <Route path='/signin/manager' element={<Manager></Manager>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
