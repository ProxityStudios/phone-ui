import { NotchStyle } from "../styles";

function Notch() {
   return (
      <NotchStyle>
         <div style={{ backgroundColor: "#7777" }} />
         <div style={{ backgroundColor: "#6666" }} />
         <div style={{ backgroundColor: "#5555" }} />
         <div style={{ backgroundColor: "#4444" }} />
      </NotchStyle>
   );
}

export default Notch;
