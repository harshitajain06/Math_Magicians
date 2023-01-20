import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Quote from './components/Quote';
import Calculator from './components/Calculator';
import Nav from './components/Nav';
import Home from './components/Home';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>

    );
  }
}
