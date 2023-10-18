// App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Main from './Main';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
