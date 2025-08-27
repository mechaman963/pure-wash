"use client";
import { CssBaseline, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

interface ISubs {
  id: number;
  img: string;
  title: string;
  desc: string;
}

const subs: ISubs[] = [
  {
    id: 1,
    img: "/customer.png",
    title: "راحة العملاء اولويتنا",
    desc: "بنوفر خيارات حجز سهلة ومريحة علشان تناسب جدولك",
  },
  {
    id: 2,
    img: "/time.png",
    title: "سرعة وكفاءة",
    desc: "بنقدم خدماتنا في وقت قياسي  بدون التأثير على الجودة",
  },
  {
    id: 3,
    img: "/reward.png",
    title: "خدمات احترافية",
    desc: "نستخدم أحدث التقنيات وأفضل المواد للحفاظ على عربيتك بأفضل حال.",
  },
];

const Services = () => {
  const belowLg = useMediaQuery("(width<1024px)");
  const belowMd = useMediaQuery("(width<768px)");

  return (
    <>
      <CssBaseline />
      <Stack
        direction={"row"}
        gap={1}
        sx={{ direction: "rtl" }}
        alignItems={"center"}
        justifyContent={"center"}
        fontSize={20}
      >
        ليه <Image src={"/logo.png"} width={180} height={50} alt="" />؟
      </Stack>
      <Stack
        direction={"row"}
        paddingInline={belowLg ? (belowMd ? "16px" : "7%") : "10%"}
        sx={{ marginBottom: 10, flexWrap: "wrap" }}
      >
        {subs.map((service) => (
          <Stack
            key={service.id}
            direction={"column"}
            alignItems={"flex-end"}
            justifyContent={"space-between"}
            sx={{
              padding: "48px",
              width: "400px",
              flexGrow: 1,
            }}
          >
            <Stack
              width={"100%"}
              direction={"row-reverse"}
              gap={2}
              alignItems={"center"}
            >
              <Image
                src={service.img}
                width={80}
                height={80}
                style={{ objectFit: "contain" }}
                alt=""
              />
              <Typography variant="h5" sx={{ direction: "rtl" }}>
                {service.title}
              </Typography>
            </Stack>
            <Typography
              sx={{ direction: "rtl", paddingRight: "90px" }}
              variant="body1"
            >
              {service.desc}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </>
  );
};
export default Services;
