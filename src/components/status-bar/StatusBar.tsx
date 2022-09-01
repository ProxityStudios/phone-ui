import * as React from "react";
import { BsMoonFill } from "react-icons/bs";
import { IoIosBatteryFull } from "react-icons/io";
import { StatusBarStyle } from "../../styles";
import StatusBarTime from "./StatusBarTime";

function StatusBar() {
   return (
      <StatusBarStyle>
         <StatusBarTime />
         <div
            style={{
               display: "flex",
               alignItems: "center",
               fontSize: "1rem",
               gap: 8,
            }}
         >
            <BsMoonFill />
            <IoIosBatteryFull style={{ fontSize: "1.5rem" }} />
         </div>
      </StatusBarStyle>
   );
}

export default StatusBar;
