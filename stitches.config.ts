import { createStitches } from "@stitches/react";

export const {
   styled,
   css,
   globalCss,
   keyframes,
   getCssText,
   theme,
   createTheme,
   config,
} = createStitches({
   prefix: "phone-ui",
   theme: {
      space: {
         horizontalBase: "20px",
      },
      radii: {
         base: ".30rem",
         large: ".8rem",
         xlarge: "1rem",
         xxlarge: "2.5rem",
      },
      colors: {
         accent100: "hsl(198, 66%, 92%)",
         accent200: "hsl(198, 66%, 82%)",
         accent300: "hsl(198, 66%, 74%)",
         accent400: "hsl(198, 66%, 69%)",
         accent500: "hsl(198, 66%, 65%)",
         accent600: "hsl(198, 66%, 47%)",
         accent700: "hsl(198, 66%, 38%)",
         accent800: "hsl(198, 66%, 29%)",
         accent900: "hsl(198, 66%, 25%)",

         yellow100: "hsl(52, 96%, 92%)",
         yellow200: "hsl(52, 96%, 88%)",
         yellow300: "hsl(52, 96%, 79%)",
         yellow400: "hsl(52, 96%, 71%)",
         yellow500: "hsl(52, 96%, 69%)",
         yellow600: "hsl(52, 96%, 54%)",
         yellow700: "hsl(52, 96%, 43%)",
         yellow800: "hsl(52, 96%, 32%)",
         yellow900: "hsl(52, 96%, 26%)",

         red100: "hsl(352, 93%, 92%)",
         red200: "hsl(352, 93%, 88%)",
         red300: "hsl(352, 93%, 79%)",
         red400: "hsl(352, 93%, 71%)",
         red500: "hsl(352, 93%, 68%)",
         red600: "hsl(352, 93%, 54%)",
         red700: "hsl(352, 93%, 43%)",
         red800: "hsl(352, 93%, 32%)",
         red900: "hsl(352, 93%, 27%)",
      },
   },
   media: {},
   utils: {},
});

export const globalStyles = globalCss({
   "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
   },
   "html, body": {
      colorScheme: "light",
      fontFamily:
         "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
   },
   "html, body, #root": {
      height: "100%",
      width: "100%",
      isolation: "isolate",
      zIndex: 0,
      userSelect: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      backgroundColor: "#fafafa",
   },
});
