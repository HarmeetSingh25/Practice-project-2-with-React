import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { ToastContainer, toast } from "react-toastify";
import { Provider } from 'react-redux'
import { store } from "./Store/store.jsx";
createRoot(document.getElementById("root")).render(
     <Provider store={store}>
  <BrowserRouter basename="/Practice-project-2-with-React"  >
    <ToastContainer />
    <App />
  </BrowserRouter>
</Provider>

);

