import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import paths from "../data/paths.json";
import ProSideBar from "../components/ProSideBar";

import SideBar from "../components/Sidebar";
import { Box, Grid } from "@mui/material";
const routes = paths.paths.map((route) => {
  const Component = lazy(() => import(`../components/${route.element}`));
  const routeObject = {
    key: route.id,
    path: route.link,
    element: (
      <Box className="router-container">
        <Grid xs={12} md={3} lg={2} className="sideMenu-container">
          <ProSideBar />
        </Grid>
        <Grid xs={12} md={3} lg={2} className="collapsed-sideMenu-container">
          <SideBar />
        </Grid>
        <Grid xs={12} md={9} lg={10} className="content-container">
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        </Grid>
      </Box>
    ),
  };

  return routeObject;
});

export const router = createBrowserRouter(routes);
