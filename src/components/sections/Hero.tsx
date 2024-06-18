import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { EmojiEventsOutlined, PlayCircleFilledOutlined } from "@mui/icons-material";
import Images from "../../constants/Images";

export default function Hero() {
  return (
    <Container component="section" maxWidth="xl" sx={{ paddingInline: { xs: "0.125rem", smallPhone: "1.125rem", lg: "0rem" } }}>
      <Grid container justifyContent="space-between" alignItems="center" gap={6}>
        <Grid item xs={12} md={5.5} display="flex" flexDirection="column" alignItems="start" gap={5} sx={{ gap: { xs: 2, smallPhone: 3, md: 5 } }}>
          <Box
            display="inline-flex"
            bgcolor={"#F3F0F8"}
            px={2}
            columnGap={1}
            sx={{
              borderRadius: { xs: "1.125rem", smallPhone: "0.5rem", md: "0.75rem" },
              flexDirection: { xs: "column", smallPhone: "row" },
              justifyContent: "center",
              alignItems: { xs: "start" },
              py: { xs: ".875rem", smallPhone: "0.5rem", md: "0.75rem" },
            }}
          >
            <EmojiEventsOutlined color="primary" />
            <Box display="flex" flexWrap="wrap" justifyContent="start" alignItems="center" columnGap={0.4}>
              <Typography variant="subtitle2" sx={{ color: "primary" }}>
                12,000
              </Typography>
              <Typography variant="subtitle2" fontWeight="bold">
                top freelancers signed up last week
              </Typography>
            </Box>
          </Box>
          <Typography variant="h1" component="h1" sx={{ pr: { xl: 4 } }}>
            Clients Analytics for Freelancer
          </Typography>

          <Typography variant="h6" component="p" sx={{ pr: { xl: 16 } }}>
            Learn how to track the hot prospects to bring more fortune while freelancing from home or your favorite cafes.
          </Typography>
          <Box display="flex" columnGap={2} sx={{ flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "start" }, gap: { xs: 1.5, smallPhone: 2, md: 3 }, width: "100%" }}>
            <Button variant="contained" sx={{ bgcolor: "primary.main", textTransform: "none", py: { xs: "0.875rem", sm: "1.25rem" } }} size="large">
              Explore Features
            </Button>
            <Button variant="contained" sx={{ bgcolor: "ascent.dark", textTransform: "none", py: { xs: "0.875rem", sm: "1.25rem" } }} size="large" startIcon={<PlayCircleFilledOutlined />}>
              Explore Features
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={5.5} component="figure" sx={{ width: "10rem" }}>
          <img src={Images.hero} alt="Hero Illustrations Image" className="img" />
        </Grid>
      </Grid>
    </Container>
  );
}
