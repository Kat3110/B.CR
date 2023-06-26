import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeFeed from "./pages/home-feed";
import CreateProject from "./pages/create-project";
import PageTemplate from "./pages/page-templete";
import PageProjects from "./pages/page-projects";
import PageInsight from "./pages/page-insight";
import PageLogin from "./pages/page-login";
import PagePassword from "./pages/page-password";
import PageLoginManager from "./pages/page-login-manager";
import PageManagerHome from "./pages/page-manager-home";
import PageMembership from "./pages/page-membership";
import PageAccountInformation from "./pages/page-account-information";
import PageError from "./pages/page-error";
import PageResetPassword from "./pages/page-reset-password";
import PageNewPassword from "./pages/page-new-password";
import { ProtectRoute, PublicRoute } from "utils/protect-route";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute target="user" />}>
          <Route path="/" element={<PageLogin />} />
          <Route path="/membership" element={<PageMembership />} />
          <Route path="/reset-password" element={<PageResetPassword />} />
          <Route path="/new-password/:token" element={<PageNewPassword />} />
        </Route>
        <Route element={<PublicRoute target="admin" />}>
          <Route path="/login-manager" element={<PageLoginManager />} />
        </Route>
        <Route element={<ProtectRoute target="user" />}>
          <Route path="/home" element={<HomeFeed />} />
          <Route
            path="/projects/:projectId/:stageId/:blockId"
            element={<PageProjects />}
          />
          <Route
            path="/projects/create/:templateId"
            element={<CreateProject pm />}
          />
          <Route
            path="/projects/template/:templateId/:stageId"
            element={<PageTemplate />}
          />
          <Route path="/insights" element={<PageInsight />} />
          <Route path="/password" element={<PagePassword />} />
          <Route path="/account" element={<PageAccountInformation />} />
        </Route>
        <Route element={<ProtectRoute target="admin" />}>
          <Route path="/manager-home" element={<PageManagerHome />} />
        </Route>
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
