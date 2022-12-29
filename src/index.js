import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';
import Header from './layout/header/index.js'
import HomeFeed from "./pages/home-feed";
import CreateProject from './pages/create-project'
import PageTemplate from './pages/page-templete'
import PageProjects from './pages/page-projects'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<HomeFeed />}/>
              <Route path="/projects" element={<CreateProject />}/>
              <Route path="/projects/template" element={<PageTemplate />}/>
              <Route path="/projects/all" element={<PageProjects />}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
