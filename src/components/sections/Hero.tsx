import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { EmojiEventsOutlined, PlayCircleFilledOutlined } from "@mui/icons-material";
import Images from "../../constants/Images";

export default function Hero() {
  return (
    <Container component="section" maxWidth="xl">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item lg={5} display="flex" flexDirection="column" rowGap={5}>
          <Box display="inline-flex" alignItems="center" bgcolor={"#F3F0F8"} py={1} px={2} columnGap={1} borderRadius={12} sx={{ maxWidth: "70%" }}>
            <Box sx={{ color: "primary" }} display="flex" alignItems="center" columnGap={0.4}>
              <EmojiEventsOutlined />
              <Typography variant="subtitle2">12,000</Typography>
            </Box>
            <Typography variant="subtitle2" fontWeight="bold">
              top freelancers signed up last week
            </Typography>
          </Box>
          <Typography variant="h2" component="h1" fontSize="68px">
            Clients Analytics
            <br /> for Freelancer
          </Typography>

          <Typography>Learn how to track the hot prospects to bring more fortune while freelancing from home or your favorite cafes.</Typography>
          <Box display="flex" columnGap={2}>
            <Button variant="contained" sx={{ bgcolor: "primary.main", textTransform: "none" }} size="large">
              Explore Features
            </Button>
            <Button variant="contained" sx={{ bgcolor: "ascent.dark", textTransform: "none" }} size="large" startIcon={<PlayCircleFilledOutlined />}>
              Explore Features
            </Button>
          </Box>
        </Grid>
        <Grid item lg={5.5} component="figure" sx={{ width: "10rem" }}>
          <img src={Images.hero} alt="Hero Illustrations Image" className="img" />
        </Grid>
      </Grid>
    </Container>
  );
}
