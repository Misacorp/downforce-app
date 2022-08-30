import React from "react";
import Welcome from "@/pages/Welcome";
import { Route, Routes as RouterRoutes } from "react-router-dom";

/**
 * Directory of main level routes in the application
 * @constructor
 */
const Routes: React.FC = () => (
  <RouterRoutes>
    <Route index element={<Welcome />} />
  </RouterRoutes>
);

export default Routes;
