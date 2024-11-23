import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routerData } from "./browserRouterData";
import Popup from "./components/shared/popup";

const router = createBrowserRouter(routerData);

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <RouterProvider router={router} />
      </Container>
      <Popup />
    </div>
  );
}

export default App;
