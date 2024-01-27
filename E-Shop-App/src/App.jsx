// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './pages/Login';
import ProductList from './pages/Product';
import About from './pages/About';
import './App.css'
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <ChakraProvider>
      <Router>
        <div className="app-container">
         
         

          <Routes>
            <Route
              path="/login"
              element={
                isLoggedIn ? (
                  <Navigate to="/product-list" />
                ) : (
                  <Login onLogin={handleLogin} />
                  /* Remove the logo prop */
                )
              }
            />
            <Route path="/product-list" element={<ProductList  />} />
            <Route path="/about" element={<About />} />

            {/* Catch-all route for any other path */}
            <Route path="/*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
};

export default App;
