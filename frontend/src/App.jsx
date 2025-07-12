import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductDesign from './pages/ProductDesign';
import HomeLanding from "./pages/HomeLanding.jsx";
import MyListings from "./pages/MyListings.jsx";
import SwapRequests from "./pages/SwapRequests.jsx";
import Loading from './pages/Loading.jsx';
import { Navbar } from './components/Navbar.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
function App() {
  
  return (
    <>
    
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={HomeLanding}></Route>
          <Route path='/swap-requests' element={SwapRequests}></Route>
          <Route path='/my-listings' element={MyListings}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/product-design" element={<ProductDesign />} />
          <Route path='/admin-panel' element={AdminPanel}></Route>
          <Route path='/loading' element={Loading}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
