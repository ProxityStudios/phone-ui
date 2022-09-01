import * as React from "react";

interface PhoneContextType {
   locked: boolean;
   lock: () => Promise<boolean> | null;
   unlock: () => Promise<boolean> | null;
}

export const PhoneContext = React.createContext<PhoneContextType>({
   locked: true,
   lock: () => null,
   unlock: () => null,
});

export interface PhoneProviderProps {
   children: React.ReactNode;
}

export function PhoneProvider({ children }: PhoneProviderProps) {
   const [locked, setLocked] = React.useState<PhoneContextType["locked"]>(true);

   async function lock() {
      setLocked(true);
      return true;
   }

   async function unlock() {
      setLocked(false);
      return true;
   }

   const value = React.useMemo(
      () => ({
         locked,
         lock,
         unlock,
      }),
      [locked]
   );

   return (
      <PhoneContext.Provider value={value}>{children}</PhoneContext.Provider>
   );
}

export const usePhone = () => React.useContext(PhoneContext);
