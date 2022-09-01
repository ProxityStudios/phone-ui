import "./assets/css/fonts.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomeScreen";
import { globalStyles } from "../stitches.config";
import NotFound from "./pages/NotFound";
import { usePhone } from "./contexts/PhoneContext";
import LockScreen from "./pages/LockScreen";

export function App() {
   globalStyles();
   const { locked } = usePhone();

   if (locked) {
      return (
         <>
            {locked.toString()}

            <Routes>
               <Route path="/" element={<LockScreen />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </>
      );
   }

   return (
      <>
         {locked.toString()}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </>
   );
}

export function WrappedApp() {
   return (
      <HashRouter>
         <App />
      </HashRouter>
   );
}
