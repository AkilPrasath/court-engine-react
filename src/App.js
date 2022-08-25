import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignInOutContainer from './containers';
import Home from './Components/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInOutContainer />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //  <SignInOutContainer/>
    // </div>
  );
}

export default App;