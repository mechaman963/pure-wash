import {
  Button,
  CssBaseline,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

interface ISubs {
  id: number;
  title: string;
  desc: string;
  price: number;
}

const subs: ISubs[] = [
  {
    id: 1,
    title: "اشتراك VIP",
    desc: "تنظيف فعال وآمن للمحرك باستخدام البخار لإزالة الشحوم والأوساخ للمعان آمن",
    price: 500,
  },
  {
    id: 2,
    title: "اشتراك سنوي",
    desc: "استعادة اللمعان والطلاء وحماية الطلاء باستخدام تلميع الشمع المتخصص والحفاظ على لونها",
    price: 500,
  },
  {
    id: 3,
    title: "اشتراك شهري",
    desc: "غسيل شامل للعربية من الخارج والداخل باستخدام مواد تنظيف عالية الجودة",
    price: 500,
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
        gap={belowLg ? (belowMd ? 4 : 10) : 12}
        paddingInline={belowLg ? (belowMd ? "16px" : "7%") : "10%"}
        sx={{ marginBottom: 10, flexWrap: "wrap" }}
      >
        {subs.map((service) => (
          <Stack
            key={service.id}
            direction={"column"}
            gap={2}
            alignItems={"center"}
            sx={{
              border: "1px solid #EEEEEC",
              borderRadius: "16px",
              padding: "48px",
              textAlign: "center",
              boxShadow: "0 5px 3px 0 rgba(0,0,0,0.2)",
              width: "300px",
              flexGrow: 1,
            }}
          >
            <Typography variant="h5" sx={{ direction: "rtl" }}>
              {service.title}
            </Typography>
            <Typography paddingInline={belowLg ? 0 : 8} variant="body1">
              {service.desc}
            </Typography>
            <Typography
              variant="h6"
              sx={{ direction: "rtl" }}
              fontWeight="bold"
            >
              {service.price} جنيه
            </Typography>
            <Button
              variant="contained"
              size="medium"
              sx={{ borderRadius: "50px", fontSize: 17, paddingInline: 4 }}
            >
              اطلب الآن
            </Button>
          </Stack>
        ))}
      </Stack>
    </>
  );
};
export default Services;
