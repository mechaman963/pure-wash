"use client";
import { Cairo } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material";
import React, { JSX } from "react";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["200", "300", "400", "600", "700", "900"],
  display: "swap",
  variable: "--font-cairo",
});

const ThemesProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F4C95D",
      },
    },
    typography: {
      fontFamily: cairo.style.fontFamily,
      h2: { fontWeight: 700 },
      h3: { fontWeight: 600 },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemesProvider;
