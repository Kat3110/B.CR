import * as React from 'react';
import Header from "./layout/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeFeed from "./pages/home-feed";
import CreateProject from "./pages/create-project";
import PageTemplate from "./pages/page-templete";
import PageProjects from "./pages/page-projects";
import {useState} from "react";
import PageInsight from "./pages/page-insight";
import PageLogin from "./pages/page-login";


function App() {
    const [join, setJoin] = useState(true)

    return (
        <BrowserRouter>
            <Header onClick={() => setJoin(!join)} join={join} />
            <Routes>
                <Route path="/" element={<HomeFeed />}/>
                <Route path="/projects" element={<CreateProject join={join} />}/>
                <Route path="/projects/template" element={<PageTemplate />}/>
                <Route path="/projects/all" element={<PageProjects />}/>
                <Route path="/insights" element={<PageInsight />}/>
                <Route path="/faq" element={<PageLogin />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
