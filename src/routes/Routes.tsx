import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import paths from "../data/paths.json";
import ProSideBar from "../components/ProSideBar";
import { Col, Container } from "react-bootstrap";
import SideBar from "../components/Sidebar";
const routes = paths.paths.map((route) => {
  const Component = lazy(() => import(`../components/${route.element}`));
  const routeObject = {
    key: route.id,
    path: route.link,
    element: (
      <Container className="router-container">
        <Col xs={12} md={3} lg={2} className="sideMenu-container">
          <ProSideBar />
        </Col>
        <Col xs={12} md={3} lg={2} className="collapsed-sideMenu-container">
          <SideBar />
        </Col>
        <Col xs={12} md={9} lg={10} className="content-container">
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        </Col>
      </Container>
    ),
  };

  return routeObject;
});

export const router = createBrowserRouter(routes);
