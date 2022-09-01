import * as React from "react";
import Layout from "../components/Layout";
import { usePhone } from "../contexts/PhoneContext";

function LockScreen() {
   const { unlock } = usePhone();

   return (
      <Layout>
         <div>
            <div>Lock screen</div>
            <button type="button" onClick={unlock}>
               Click to unlock!
            </button>
         </div>
      </Layout>
   );
}

export default LockScreen;
