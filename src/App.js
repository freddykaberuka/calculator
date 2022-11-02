import React, { Component } from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Calculator from './component/Calculator';
import Footer from './component/Footer';
import Tabs from './component/Tabs';
import Home from './pages/Home';
import Quote from './pages/Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <Tabs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
