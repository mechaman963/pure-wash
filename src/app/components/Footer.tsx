import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <Stack height={"60vh"} bgcolor={"black"} justifyContent={"end"}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        height={"25vh"}
        gap={5}
      >
        <Typography variant="h4" sx={{ color: "#CCA84D", fontWeight: "600" }}>
          اتصل بنا
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "#CCA84D",
            fontWeight: "600",
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          123456789 <Image src={"/dial.png"} width={50} height={50} alt="" />
        </Typography>
      </Stack>
    </Stack>
  );
};
export default Footer;
