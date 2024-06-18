import { Container } from "@mui/material";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <Container maxWidth="xl" sx={{ paddingInline: { xs: "0.125rem", smallPhone: "1.125rem", lg: "0rem" } }}>
      <Navbar />
    </Container>
  );
}
