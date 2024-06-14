import { Box, Button } from "@mui/material";
import Images from "../../constants/Images";
import { navLinks } from "../../datas";

export default function Navbar() {
  const router = window.location.pathname;

  return (
    <Box component="nav" display="flex" justifyContent="space-between" alignItems="center" py={4}>
      <Box component="figure">
        <img src={Images.logo} alt="logo" />
      </Box>
      <Box component="li" className="nav-item" display="flex" justifyContent="space-between" alignItems="center" gap={3}>
        {navLinks.map((link) => (
          <Box component="li" color={"ascent.dark"} sx={{ fontWeight: router === link.path ? "bold" : "regular", cursor: "pointer" }} key={link.label}>
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
