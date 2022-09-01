import "./assets/css/fonts.css";
import * as ReactRouter from "react-router-dom";
import Home from "./pages/HomeScreen";
import { globalStyles } from "../stitches.config";
import NotFound from "./pages/NotFound";
import LockScreen from "./pages/LockScreen";
import ProtectedScreen from "./components/ProtectedScreen";

export function App() {
   globalStyles();

   return (
      <ReactRouter.Routes>
         <ReactRouter.Route
            path="/"
            element={
               <ProtectedScreen>
                  <Home />
               </ProtectedScreen>
            }
         />
         <ReactRouter.Route path="/lock-screen" element={<LockScreen />} />
         <ReactRouter.Route path="*" element={<NotFound />} />
      </ReactRouter.Routes>
   );
}

export function WrappedApp() {
   return (
      <ReactRouter.HashRouter>
         <App />
      </ReactRouter.HashRouter>
   );
}
