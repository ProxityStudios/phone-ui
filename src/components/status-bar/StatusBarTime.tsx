import * as React from "react";
import useCurrentTime from "../../hooks/useCurrentTime";
import { StatusBarTimeStyle } from "../../styles";
import * as Utils from "../../utils";

function StatusBarTime() {
   const currentTime = useCurrentTime();

   return (
      <StatusBarTimeStyle>{Utils.parseTime(currentTime)}</StatusBarTimeStyle>
   );
}

export default StatusBarTime;
