import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';
import Header from './layout/header/index.js'
import HomeFead from "./pages/home-fead";
import MakeProject from './pages/make-project'
import CreateProject from './pages/create-project'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<CreateProject/>}/>
              <Route path="/projects" element={<MakeProject />}/>
              <Route path="/home-fead" element={<HomeFead />}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
