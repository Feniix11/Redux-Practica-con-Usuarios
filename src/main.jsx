import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyRouter from "./router/MyRouter.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
