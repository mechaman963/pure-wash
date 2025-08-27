"use client";
import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const Offer = () => {
  const belowXL = useMediaQuery("(width<=1280px)");
  const belowLg = useMediaQuery("(width<=1024px)");
  const belowMd = useMediaQuery("(width<=768px)");
  return (
    <Stack
      direction={"row"}
      paddingRight={belowLg ? (belowMd ? "16px" : "7%") : "10%"}
      height={belowLg ? "40dvh" : "50dvh"}
      bgcolor={"#FAF3E0"}
    >
      <Stack
        width={belowXL ? 60 / 100 : 45 / 100}
        height={"100%"}
        position={"relative"}
        display={belowLg ? "none" : "block"}
      >
        <Image src={"/car2.png"} alt="" fill objectFit="cover" />
      </Stack>
      <Stack
        width={belowXL ? (belowLg ? "100%" : 40 / 100) : 55 / 100}
        direction={"column"}
        alignItems={belowLg ? "center" : "end"}
        justifyContent={"center"}
        gap={6}
      >
        <Typography
          variant="h4"
          sx={{ direction: "rtl" }}
          textAlign={belowLg ? "center" : "end"}
        >
          الحق خصوماتنا !
        </Typography>
        <Typography
          variant="h4"
          sx={{ direction: "rtl" }}
          textAlign={belowLg ? "center" : "end"}
        >
          خصومات لغاية 30% على باقات الغسيل الشامل
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: "50px", paddingInline: 4 }}
        >
          اشترك الآن
        </Button>
      </Stack>
    </Stack>
  );
};
export default Offer;
