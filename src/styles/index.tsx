import { styled } from "../../stitches.config";

export const PhoneWrapper = styled("div", {
   position: "relative",
});

export const Phone = styled("div", {
   marginBottom: -1,
   width: 340,
   height: 660,
   minWidth: 340,
   minHeight: 660,
   border: "8px black solid",
   borderRadius: "$xxlarge",
   overflow: "hidden",
   position: "relative",
   boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
});

export const PhoneOff = styled("div", {
   background: "#111",
   position: "absolute",
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   transition: "all 200ms ease",
   variants: {
      hovering: {
         true: {
            opacity: 1,
            zIndex: 100,
         },
         false: {
            opacity: 0,
            zIndex: -1,
         },
      },
   },
});

export const NotchStyle = styled("div", {
   $$borderBottomRadius: "15px",
   position: "absolute",
   height: 27,
   width: 150,
   top: 0,
   left: "50%",
   right: "50%",
   transform: "translateX(-50%)",
   background: "black",
   borderBottomLeftRadius: "$$borderBottomRadius",
   borderBottomRightRadius: "$$borderBottomRadius",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   gap: 10,
   paddingBottom: 4,
   zIndex: 1000,
   "> div": {
      borderRadius: "100%",
      height: 20,
      width: 20,
   },
});

export const StatusBarStyle = styled("header", {
   display: "flex",
   alignItems: "center",
   justifyContent: "space-between",
   height: 37,
   padding: "0 $horizontalBase",
   fontSize: ".9rem",
   // borderBottom: "1px black solid",
});

export const StatusBarTimeStyle = styled("div", {
   fontWeight: 500,
});

export const FindNameForThisComponentStyle = styled("div", {
   position: "absolute",
   height: 7,
   width: 150,
   bottom: -1,
   left: "50%",
   right: "50%",
   transform: "translateX(-50%)",
   opacity: 0.5,
   background: "white",
   borderRadius: "$large",
   transition: "all 250ms",
   cursor: "grab",
   zIndex: 10,
   "&:hover": {
      opacity: 0.8,
   },
});

export const LockScreenStyle = styled("div", {
   height: "100%",
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   textAlign: "center",
});

export const LockScreenTime = styled("div", {
   fontSize: "4rem",
   marginTop: "15px",
});

export const LockScreenTimeAlt = styled("div", {
   fontSize: "1rem",
   marginTop: "8px",
   fontWeight: 500,
});

export const LockScreenFooter = styled("footer", {
   position: "absolute",
   bottom: 25,
   width: 200,
   fontWeight: 600,
});
