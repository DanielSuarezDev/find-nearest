import { FC, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "../Components/Layout/Layout";

import { Route as RouteType, ROUTES } from "./types";

const Home = lazy(() => import(/*webpackChunkName: "Home"*/ "../Pages/Home"));

export const RoutesPublic: RouteType[] = [
  {
    path: ROUTES.HOME,
    element: <Home />,
    isLayout: true,
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.HOME} replace />,
  },
];

export const Router: FC = () => {

  return (
    <Routes>
      {RoutesPublic.map((route, index) => (
        <Route path={route.path} element={<Layout>{route.element}</Layout>} key={index} />
      ))}
    </Routes>
  );
};
