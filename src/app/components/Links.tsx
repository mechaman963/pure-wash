import { Stack, useMediaQuery } from "@mui/material";
import Link from "next/link";

interface ILinks {
  id: number;
  label: string;
  url: string;
}

const links: ILinks[] = [
  { id: 1, label: "التواصل", url: "/" },
  { id: 2, label: "الاشتراكات", url: "/" },
  { id: 3, label: "الخدمات", url: "/" },
  { id: 4, label: "العروض", url: "/" },
];

const Links = ({ parent }: { parent: string }) => {
  const belowMd = useMediaQuery("(width<=768px)");
  const aboveMd = useMediaQuery("(width>=1023px)");

  return (
    <Stack
      direction={parent === "main" ? "row" : "column"}
      gap={parent === "main" ? 3 : 1}
      display={parent === "main" ? (belowMd ? "none" : "flex") : "flex"}
    >
      {links.map((link: ILinks) => (
        <Link
          href={link.url}
          key={link.id}
          style={
            parent === "menu" ? { padding: "8px 0", textAlign: "center" } : {}
          }
          className={`${parent === "menu" && "hover:bg-[#eeeeec]"} rounded-sm ${
            aboveMd || belowMd ? "text-lg" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </Stack>
  );
};
export default Links;
