import { Box, Container, Typography } from "@mui/material";
import Images from "../../constants/Images";

export default function Footer() {
  return (
    <Container maxWidth="xl" component="footer" sx={{ display: "flex", gap: 2, justifyContent: "space-between", alignItems: "end", mt: 10, borderTop: "1px solid #E0E0E0", py: 4 }}>
      <Box component="figure" sx={{ maxWidth: "10rem" }}>
        <img src={Images.logo} className="img" />
      </Box>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        All rights reserved Benarrr by BuildWithAngga 2023
      </Typography>
    </Container>
  );
}
