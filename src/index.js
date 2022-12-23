import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/index.js'
import CreateProject from './pages/create-project'
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeFead from "./pages/home-fead";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomeFead />}/>
              <Route path="/projects" element={<CreateProject />}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
