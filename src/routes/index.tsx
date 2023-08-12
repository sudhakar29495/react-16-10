import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Landing = React.lazy(() => import("../pages/Landing"));

const ProjectRoutes = () => {
  const routes = [
    { path: '/', component: Landing },
    { path: '/dashboard', component: Dashboard },
  ];

  const securedRoutes: any[] = [];

  const isUserAuthorized = false;

  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Component = route.component;
            return <Route key={index} path={route.path} element={<Component />} />
          })}
          {isUserAuthorized && securedRoutes.map((route, index) => {
            const Component = route.component;
            return <Route key={index} path={route.path} element={<Component />} />
          })}
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
