// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar({ collegeName }) {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <p >College: {collegeName}</p>
    </nav>
  );
};



// const Header = ({ collegeName }) => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//       <p>College: {collegeName}</p>
//     </nav>
//   );
// };

// export default Header;
