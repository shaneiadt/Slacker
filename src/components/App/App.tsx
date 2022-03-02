import React from 'react';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';

import Header from '../Header/Header';
import Chat from '../Chat/Chat';
import Sidebar from '../Sidebar/Sidebar';
import { Login } from '../Login/Login';
import { auth } from '../../firebase';
import './App.css';

function App() {
  const [user, loading] = useAuthState(auth);

  if(!user) return <Login />;

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
