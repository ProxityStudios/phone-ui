import React from "react";
import ReactDOM from "react-dom/client";
import { WrappedApp } from "./App";
import { PhoneProvider } from "./contexts/PhoneContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <PhoneProvider>
         <WrappedApp />
      </PhoneProvider>
   </React.StrictMode>
);
