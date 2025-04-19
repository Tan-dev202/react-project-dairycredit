import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPageLayout from './layouts/LandingPageLayout';
import { DarkModeProvider } from "./context/DarkModeContext";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/about',
        element: <About />,
      },
      { path: "/faqs", 
        element: <Faqs /> 
      },
      { path: "/contact", 
        element: <Contact /> 
      }
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  <DarkModeProvider>
    <RouterProvider router={router} />
  </DarkModeProvider>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
