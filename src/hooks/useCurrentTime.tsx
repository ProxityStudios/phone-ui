import * as React from "react";

function useCurrentTime(): Date {
   const [today, setToday] = React.useState<Date>(new Date());

   React.useEffect(() => {
      const interval = setInterval(() => {
         setToday(new Date());
      }, 10000);
      return () => clearInterval(interval);
   }, []);

   return today;
}

export default useCurrentTime;
