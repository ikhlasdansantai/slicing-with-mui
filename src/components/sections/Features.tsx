import { Button, Box, Container, Typography } from "@mui/material";
import FeatureGrids from "../layouts/FeatureGrids";

export default function Features() {
  return (
    <Box component="section" sx={{ mt: 6, bgcolor: "background.paper" }} py={10}>
      <Container component="section" maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "start" }}>
        <Button variant="contained" sx={{ bgcolor: "primary.main", textTransform: "none", borderRadius: 12 }}>
          Top Features
        </Button>
        <Typography variant="h3" component="h2" fontWeight="bold">
          Built-in Robust Features
          <br /> Versatile Purposes
        </Typography>
        <FeatureGrids />
      </Container>
    </Box>
  );
}
