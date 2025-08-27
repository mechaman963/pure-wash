"use client";

import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const Landing = () => {
  const aboveMd = useMediaQuery("(width>=768px)");
  const belowMd = useMediaQuery("(width<768px)");
  const belowLg = useMediaQuery("(width<1024px)");
  const aboveLg = useMediaQuery("(width>=1280px)");

  return (
    <Stack
      marginTop={2}
      direction={belowLg ? "column-reverse" : "row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      height={"70dvh"}
      width={"100vw"}
      paddingInline={belowLg ? (belowMd ? "16px" : "7%") : "10%"}
      zIndex={90}
      gap={belowLg && aboveMd ? 4 : 0}
    >
      <Stack
        width={belowLg ? "100%" : 1 / 2}
        justifyContent={belowLg ? "center" : "start"}
        direction={"row"}
      >
        <Stack
          // width={"100%"}
          direction={"column"}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={belowMd ? 4 : 5}
        >
          <Typography variant={belowLg ? "h3" : "h3"} letterSpacing={-2}>
            نظافة عربيتك بتبدأ من هنا
          </Typography>
          <Typography variant="h6">
            خدمات غسيل احترافبه بأفضل أسعار و أسرع وقت
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{
              borderRadius: "50px",
              width: "fit-content",
              paddingInline: 7,
              paddingBlock: 1.5,
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            ابدأ الحجز
          </Button>
        </Stack>
      </Stack>
      <Stack
        width={belowLg ? "100%" : 1 / 2}
        height={"100%"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"end"}
        position={"relative"}
      >
        <Image
          src={"/car1.png"}
          fill
          alt=""
          className="z-50"
          objectFit="contain"
        />
      </Stack>
    </Stack>
  );
};
export default Landing;
