import { Box, Button } from "@mui/material";
import Images from "../../constants/Images";
import { navLinks } from "../../datas";

export default function Navbar() {
  const router = window.location.pathname;

  return (
    <Box component="nav" display="flex" justifyContent="space-between" alignItems="center" py={4}>
      <Box component="figure" sx={{ maxWidth: { xs: "10rem", lg: "15rem" } }}>
        <img src={Images.logo} alt="logo" className="img" />
      </Box>
      <Box component="ul" className="nav-item" gap={3} sx={{ display: { xs: "none", md: "flex" } }}>
        {navLinks.map((link) => (
          <Box component="li" color={"ascent.dark"} sx={{ fontWeight: router === link.path ? "bold" : "regular", fontSize: "18px", cursor: "pointer" }} key={link.label}>
            {link.label}
          </Box>
        ))}
      </Box>
      <Button variant="contained" size="large" sx={{ bgcolor: "ascent.dark", textTransform: "none" }}>
        Sign In
      </Button>
    </Box>
  );
}
