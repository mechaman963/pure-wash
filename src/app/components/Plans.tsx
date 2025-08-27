"use client";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
interface IPlans {
  id: number;
  img: string;
  title: string;
}
const plans: IPlans[] = [
  { id: 1, img: "/check.png", title: "تغيير فيلم الحماية" },
  { id: 2, img: "/check.png", title: "ترصيص وظبط الزوايا" },
  { id: 3, img: "/check.png", title: "تشحيم" },
];

const Plans = () => {
  const belowLg = useMediaQuery("(width < 1024px)");
  const mobile = useMediaQuery("(width < 630px)");

  return (
    <Stack
      direction={mobile ? "column" : "row"}
      width={belowLg ? "95vw" : "80vw"}
      height={mobile ? "65vh" : "40vh"}
      borderRadius={"32px"}
      bgcolor={"#E67E22"}
      margin={"0 auto"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        translate: "0 50%",
        mt: mobile ? "-30vh" : "-20vh",
        direction: "rtl",
      }}
      flexWrap={"wrap"}
      padding={4}
    >
      {plans.map((plan) => (
        <Stack
          key={plan.id}
          width={belowLg ? (mobile ? "100%" : "33%") : "30%"}
          alignItems={"center"}
          gap={4}
        >
          <Image
            src={plan.img}
            width={belowLg ? 70 : 80}
            height={belowLg ? 70 : 80}
            alt=""
          />
          <Typography
            textAlign={"center"}
            variant={belowLg ? "h5" : "h4"}
            fontWeight={"500"}
          >
            {plan.title}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
export default Plans;
