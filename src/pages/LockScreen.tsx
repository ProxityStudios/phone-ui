import * as React from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { usePhone } from "../contexts/PhoneContext";
import useCurrentTime from "../hooks/useCurrentTime";
import {
   LockScreenFooter,
   LockScreenStyle,
   LockScreenTime,
   LockScreenTimeAlt,
} from "../styles";
import * as Utils from "../utils";

function LockScreen() {
   const currentTime = useCurrentTime();
   const { unlock } = usePhone();
   const navigate = useNavigate();

   const onClick = () => {
      unlock();
      navigate("/", { replace: true });
   };

   return (
      <Layout>
         <LockScreenStyle onClick={onClick}>
            <IoLockClosedOutline style={{ marginTop: "40px" }} size="3.2rem" />
            <LockScreenTime>
               {Utils.parseTime(currentTime)}
               <LockScreenTimeAlt>
                  {new Date().toDateString()}
               </LockScreenTimeAlt>
            </LockScreenTime>
            <LockScreenFooter>
               Click anywhere to unlock the phone.
            </LockScreenFooter>
         </LockScreenStyle>
      </Layout>
   );
}

export default LockScreen;
