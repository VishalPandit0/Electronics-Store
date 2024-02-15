import {React,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AppContext from './utils/Context';
import Header from './components/Header'; 
import SingleCategory from './components/SingleCategory';

function App() {
  
  return (
    <AppContext>
    <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<SingleCategory />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      <Newsletter />
      <Footer />
    </Router>
    </AppContext>
  );
}

export default App;
