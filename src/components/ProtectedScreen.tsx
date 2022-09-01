import * as React from "react";
import { Navigate } from "react-router-dom";
import { usePhone } from "../contexts/PhoneContext";

export interface ProtectedScreenProps {
   children: React.ReactNode;
}

function ProtectedScreen({ children }: ProtectedScreenProps) {
   const { locked } = usePhone();

   if (locked) {
      return <Navigate to="/lock-screen" replace />;
   }

   // eslint-disable-next-line react/jsx-no-useless-fragment
   return <>{children}</>;
}

export default ProtectedScreen;
