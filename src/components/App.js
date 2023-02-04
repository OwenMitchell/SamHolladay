import React from 'react';

// Components
// -------------------------------------------------------
import Calendar from './calendar.js'
import Navbar from './navbar.js'
import Header from './header.js'


// Styles
// -------------------------------------------------------
import '../styles/App.css'


// App
// -------------------------------------------------------
export default function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Calendar></Calendar>
    </div>
  );
}


