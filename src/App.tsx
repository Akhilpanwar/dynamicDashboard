import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import "./styles/main.css";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Container>
      <RouterProvider router={router} />;
    </Container>
  );
}

export default App;
