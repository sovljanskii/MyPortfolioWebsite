import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Footer from "./templates/Footer";
import Header from "./templates/Header";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header></Header>
    <App />
    <Footer></Footer>
  </React.StrictMode>
);
