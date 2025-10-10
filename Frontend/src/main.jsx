import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { ToastContainer, toast } from 'react-toastify';


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ToastContainer/>
    <App />
  </BrowserRouter>
);
