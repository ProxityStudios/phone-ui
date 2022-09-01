import { styled } from "../../stitches.config";

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
   fontSize: "1rem",
   // borderBottom: "1px black solid",
});

export const StatusBarTimeStyle = styled("div", {
   fontWeight: 500,
});

export const FindNameForThisComponentStyle = styled("div", {
   position: "absolute",
   height: 9,
   width: 175,
   bottom: -1,
   left: "50%",
   right: "50%",
   transform: "translateX(-50%)",
   opacity: 0.2,
   background: "black",
   borderRadius: "$large",
   transition: "all 250ms",
   cursor: "grab",
   "&:hover": {
      opacity: 0.7,
   },
});
