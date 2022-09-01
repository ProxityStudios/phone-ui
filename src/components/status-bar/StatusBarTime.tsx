import * as React from "react";
import { StatusBarTimeStyle } from "../../styles";

function StatusBarTime() {
   const [today, setToday] = React.useState<Date>(new Date());

   function check(n: number) {
      return n.toString().length <= 1;
   }

   const parsedHours = check(today.getHours())
      ? `0${today.getHours()}`
      : today.getHours();
   const parsedMinutes = check(today.getMinutes())
      ? `0${today.getMinutes()}`
      : today.getMinutes();
   const time = `${parsedHours}:${parsedMinutes}`;

   React.useEffect(() => {
      const interval = setInterval(() => {
         setToday(new Date());
      }, 10000);
      return () => clearInterval(interval);
   }, []);

   return <StatusBarTimeStyle>{time}</StatusBarTimeStyle>;
}

export default StatusBarTime;
