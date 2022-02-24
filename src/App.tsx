import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';

const HomePage = () => <h1>This is the home page</h1>

function App() {
  return (
    <div>
      <h1>Let's Build Slack</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
