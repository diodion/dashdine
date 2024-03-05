import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Autenticacao from './pages/auth/Autenticacao'
import Login from './pages/auth/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { HashRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* TODO BrowserRouter buga o f5 em alguns hosts... Trocar pra HashRouter e ficar com a url feia quando isso rolar */}
    {/* <HashRouter> */}
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Routes>
              <Route path="/*" element={<Autenticacao />} />
        </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
    {/* </HashRouter> */}
  </React.StrictMode>
);