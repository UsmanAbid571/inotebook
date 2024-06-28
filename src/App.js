import React,{useState}  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    <>

    <NoteState>
      <BrowserRouter>
      <Navbar/>
      <Alert alert={alert}/>
      <Routes>
      <Route exact path='/notes' element={<Home showAlert={showAlert}/>}></Route>
      <Route exact path='/about' element={<About showAlert={showAlert}/>}></Route>
      <Route exact path='/login' element={<Login showAlert={showAlert}/>}></Route>
      <Route exact path='/signup' element={<Signup showAlert={showAlert}/>}></Route>
      <Route exact path='/' element={<Main />}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </NoteState>

    </>
  )
}

export default App
