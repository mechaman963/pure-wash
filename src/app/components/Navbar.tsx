"use client";

import { Button, IconButton, Stack, useMediaQuery } from "@mui/material";
import Image from "next/image";
import LinksMenu from "./LinksMenu";
import { MenuSharp } from "@mui/icons-material";
import { useState } from "react";
import Links from "./Links";

const Navbar = () => {
  const belowLg = useMediaQuery("(width<=1024px)");
  const belowMd = useMediaQuery("(width<=768px)");

  const [open, setOpen] = useState<boolean>(false);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      height={80}
      position={"relative"}
      paddingInline={belowLg ? (belowMd ? "16px" : "7%") : "10%"}
      zIndex={100}
    >
      {/* === LOGO === */}
      <Image src={"/logo.png"} height={43.35} width={150} alt="logo" />

      {/* === MEDIUM SCREENS AND ABOVE LINKS === */}
      <Links parent={"main"} />

      {/* === SMALL SCREENS LINKS MENU === */}
      <IconButton
        onClick={() => setOpen((prev) => !prev)}
        sx={{ display: belowMd ? "block" : "none" }}
      >
        <MenuSharp sx={{ cursor: "pointer", fontSize: 40 }} />
      </IconButton>
      {open && <LinksMenu />}

      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ borderRadius: "50px", display: belowMd ? "none" : "block" }}
      >
        احجز دلوقتي
      </Button>
    </Stack>
  );
};
export default Navbar;
