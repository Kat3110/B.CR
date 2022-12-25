import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';
import Header from './layout/header/index.js'
import HomeFeed from "./pages/home-feed";
import CreateProject from './pages/create-project'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<HomeFeed />}/>
              <Route path="/projects" element={<CreateProject />}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
