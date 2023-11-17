import React from "react";
import ReactDOM from "react-dom/client";
import Cricket from './day-3/Cricket';
import reportWebVitals from "../reportWebVitals";


const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <Cricket/>
  </React.StrictMode>,
);
