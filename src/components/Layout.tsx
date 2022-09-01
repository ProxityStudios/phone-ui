import * as React from "react";
import { Phone } from "../styles";
import FindNameForThisComponent from "./FindNameForThisComponent";
import Notch from "./Notch";
import StatusBar from "./status-bar/StatusBar";

export interface LayoutProps extends React.ComponentPropsWithoutRef<"div"> {
   children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
   return (
      <Phone>
         <Notch />

         <StatusBar />
         <main>{children}</main>

         <FindNameForThisComponent />
      </Phone>
   );
}

export default Layout;
