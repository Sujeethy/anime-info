// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home';
import ImageDetailPage from './Components/ImagePage';
import Login from "./Components/Login"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/image/:id" element={<ImageDetailPage />} />
        <Route path="/login_in" element ={<Login/>}/>
      </Routes>
    </Router>
  );
};

export default App;
