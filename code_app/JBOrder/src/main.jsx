import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { JBOrder } from "./JBOrder";
import { store } from "./store/store";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JBOrder />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
