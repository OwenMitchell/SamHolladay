import React from 'react';

// Components --------------------------------------------
import Calendar from './calendar.js'
import Navbar from './navbar.js'
import Header from './header.js'
import Contact from './contact.js'
import Footer from './footer.js'
// -------------------------------------------------------

// Styles ------------------------------------------------
import '../styles/app.css'
import '../styles/calendar.css'
import '../styles/contact.css'
import '../styles/footer.css'
import '../styles/navbar.css'
import '../styles/header.css'
// -------------------------------------------------------


// App ---------------------------------------------------
export default function App() {
  return (
    <div class="App">
      <Header></Header>
      <Navbar></Navbar>
      <Contact></Contact>
      <Calendar></Calendar>
      <Footer></Footer>
    </div>
  );
}
// -------------------------------------------------------