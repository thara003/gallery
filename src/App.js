// import logo from './logo.svg';
import React from 'react'
import Gallery from './component/Gallery';
import Navbar from './component/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';
function App() {
  return (
    <>
      <Gallery />
    </>
  );
}

export default App;
