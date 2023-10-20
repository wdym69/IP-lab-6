// App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Main from './Main';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  const collegeName = "VESIT"

  return (
    <BrowserRouter>
      <div>
        <Navbar collegeName={collegeName}/>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
