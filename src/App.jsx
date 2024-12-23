import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPostman from './LayoutPostman';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';

const App = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/printify" element={<LandingPage />}>
        </Route>
        <Route path="/createPdf" element={<LayoutPostman />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
