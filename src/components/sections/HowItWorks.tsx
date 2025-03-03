import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Images from "../../constants/Images";
import { CheckCircleOutlined, PlayCircleFilledOutlined } from "@mui/icons-material";
import { HowItWorksData } from "../../datas";

const images = [Images.watch1, Images.watch2, Images.watch3, Images.watch4];
const ayangs = [Images.ayang1, Images.ayang2, Images.ayang3];
export default function HowItWorks() {
  return (
    <Container component="section" maxWidth="xl" sx={{ py: 10 }}>
      <Grid
        container
        justifyContent="space-between"
        rowGap={10}
        sx={{
          alignItems: {
            xs: "start",
            lg: "center",
          },
        }}
      >
        <Grid container item xs={12} md={5} alignItems="center">
          <Grid item md={12} className="watch__featured">
            <Box component="figure" position="relative">
              <img src={images[0]} alt="Hero Illustrations Image" style={{ width: "100%" }} />
              <Box position="absolute" sx={{ top: "40px", left: "-25px", bottom: "0", right: "40px", zIndex: -1 }}>
                <img src={Images.watchBg} alt="Hero Illustrations Image" style={{ width: "100%" }} />
              </Box>
              <PlayCircleFilledOutlined
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "rgba(255, 255, 255, .6)",
                  color: "primary.main",
                  fontSize: "5rem",
                  boxShadow: "0px 0px 6px 3px rgba(255, 255, 255, .4)",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Grid>
          <Grid container item md={12} rowGap={4} justifyContent="space-between" mt={5}>
            <Grid item sm={3.7}>
              <img src={images[1]} alt="Hero Illustrations Image" className="img" />
            </Grid>
            <Grid item sm={3.7}>
              <img src={images[2]} alt="Hero Illustrations Image" className="img" />
            </Grid>
            <Grid item sm={3.7}>
              <img src={images[3]} alt="Hero Illustrations Image" className="img" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={6} display="flex" flexDirection="column" alignItems="start" gap={5}>
          <Button variant="contained" sx={{ bgcolor: "secondary.main", textTransform: "none", borderRadius: 12 }}>
            Built For Winners
          </Button>
          <Typography variant="h3" component="h2" fontWeight="bold">
            Watch How It Works
          </Typography>
          <Typography variant="h6" component="h4">
            We designed a lot of features that can applied <br /> automatically so you do not have to run.
          </Typography>

          <Box component="ul" display="flex" flexDirection="column" gap={2}>
            {HowItWorksData.map((item, index) => (
              <Box key={index} component="li" display="flex" alignItems="center" gap={1}>
                <CheckCircleOutlined color="secondary" />
                <Typography variant="h5" component="h3" fontWeight="bold">
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box display="flex" alignItems="center" justifyContent="start" gap={3} sx={{ flexWrap: "wrap" }}>
            <Button variant="contained" size="large" sx={{ bgcolor: "primary", textTransform: "none", borderRadius: 2 }}>
              Get Free Trial
            </Button>
            <Box display="flex" alignItems="center" gap={2}>
              {ayangs.map((ayang, index) => (
                <Box key={ayang} component="figure" sx={{ borderRadius: "50%", overflow: "hidden", width: "4em" }} ml={index === 0 ? 0 : -3}>
                  <img src={ayang} alt="Hero Illustrations Image" className={`${ayang}-profile`} style={{ maxWidth: "100%", display: "block", aspectRatio: "1/1", objectFit: "cover" }} />
                </Box>
              ))}
              <Typography variant="h6" component="h4" fontWeight="bold" sx={{ fontSize: "12px" }}>
                992 people just signed up
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
