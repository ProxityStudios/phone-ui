import * as React from "react";
import { Navigate } from "react-router-dom";
import { usePhone } from "../contexts/PhoneContext";

export interface ProtectedScreenProps {
   children: React.ReactNode;
}

function ProtectedScreen({ children }: ProtectedScreenProps): React.ReactNode {
   const { locked } = usePhone();

   if (locked) {
      return <Navigate to="/lock-screen" replace />;
   }

   return children;
}
export default ProtectedScreen;
