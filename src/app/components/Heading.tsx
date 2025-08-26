import {
  ArrowDownward,
  ArrowDownwardSharp,
  ArrowDropDown,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const Heading = ({ title }: { title: string }) => {
  return (
    <Stack
      width={"100%"}
      textAlign={"center"}
      alignItems={"center"}
      gap={3}
      marginTop={10}
      marginBottom={8}
    >
      <Typography variant="h4" fontWeight={"bold"}>
        {title}
      </Typography>
      <Image src={"/arrow.png"} alt="" width={45} height={45} />
    </Stack>
  );
};
export default Heading;
