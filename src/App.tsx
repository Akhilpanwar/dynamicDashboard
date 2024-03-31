import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import "./styles/main.css";

function App() {
  return (
    <div style={{ background: "whiteSmoke" }}>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
