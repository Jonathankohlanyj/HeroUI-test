import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = document.getElementById("root");

if (!root) {
  document.body.innerHTML = "<h1 style='color:red'>Root element not found</h1>";
} else {
  createRoot(root).render(<App />);
}
