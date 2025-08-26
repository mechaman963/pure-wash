import { Stack, useMediaQuery } from "@mui/material";
import Links from "./Links";

const LinksMenu = () => {
  const belowMd = useMediaQuery("(width<=768px)");
  const aboveMobile = useMediaQuery("(width>=500px)");

  return (
    <Stack
      width={aboveMobile ? "60%" : "75%"}
      bgcolor={"white"}
      position={"absolute"}
      top={"100%"}
      right={16}
      padding={2}
      display={belowMd ? "flex" : "none"}
      sx={{
        boxShadow: "0 7px 8px 0 rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        border: "1px solid #EEEEEC",
      }}
    >
      <Links parent={"menu"} />
    </Stack>
  );
};
export default LinksMenu;
