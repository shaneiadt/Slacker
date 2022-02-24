import React from 'react';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';

import Header from '../Header/Header';
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <AppBody>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </AppBody>
    </>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
