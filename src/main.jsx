import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router";
import App from './App';


ReactDOM.createRoot(root).render(
   <React.StrictMode>
   <BrowserRouter>
     <App />
   </BrowserRouter>
 </React.StrictMode>
);