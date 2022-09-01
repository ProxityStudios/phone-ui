import * as React from "react";
import { usePhone } from "../contexts/PhoneContext";
import { Phone, PhoneOff, PhoneWrapper } from "../styles";
import FindNameForThisComponent from "./FindNameForThisComponent";
import Notch from "./Notch";
import StatusBar from "./status-bar/StatusBar";

export interface LayoutProps extends React.ComponentPropsWithoutRef<"div"> {
   children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
   const [isHovering, setIsHovering] = React.useState(false);
   const { lock } = usePhone();

   return (
      <PhoneWrapper>
         <span
            style={{
               color: "black",
               position: "absolute",
               left: -200,
               top: "50%",
            }}
         >
            HOVER THE PHONE =&gt;
         </span>

         <Phone
            onMouseEnter={() => {
               console.log("MOUSE ENTER");
               setIsHovering(true);
            }}
            onMouseLeave={() => {
               console.log("MOUSE LEAVE");
               lock();
               setIsHovering(false);
            }}
            css={{
               backgroundImage:
                  'url("https://cdn-0.preppywallpapers.com/wp-content/uploads/2018/12/Abstract-iPhone-Wallpapers-7.jpg")',
               color: "white",
            }}
         >
            <PhoneOff hovering={!isHovering} />

            <Notch />

            <StatusBar />
            <main style={{ height: "calc(100% - 36px)" }}>{children}</main>

            <FindNameForThisComponent />
         </Phone>
      </PhoneWrapper>
   );
}

export default Layout;
