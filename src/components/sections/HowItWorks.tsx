import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Images from "../../constants/Images";
import { useState } from "react";
import { CheckCircleOutlined, PlayCircleFilledOutlined } from "@mui/icons-material";

const images = [Images.watch1, Images.watch2, Images.watch3, Images.watch4];
const ayangs = [Images.ayang1, Images.ayang2, Images.ayang3];
export default function HowItWorks() {
  const [index, setIndex] = useState<any>(images[0]);

  return (
    <Container component="section" maxWidth="xl" sx={{ py: 10 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid container item xs={12} md={5} alignItems="center">
          <Grid item md={12} className="watch__featured">
            <Box component="figure" position="relative">
              <img src={index} alt="Hero Illustrations Image" style={{ width: "100%" }} />
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
          <Grid container item md={12} justifyContent="space-between" mt={5}>
            <Grid item lg={3.7}>
              <img src={images[2]} alt="Hero Illustrations Image" className="img" />
            </Grid>
            <Grid item lg={3.7}>
              <img src={images[2]} alt="Hero Illustrations Image" className="img" />
            </Grid>
            <Grid item lg={3.7}>
              <img src={images[2]} alt="Hero Illustrations Image" className="img" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={5} display="flex" flexDirection="column" alignItems="start" gap={5}>
          <Button variant="contained" sx={{ bgcolor: "secondary.main", textTransform: "none", borderRadius: 12 }}>
            Built For Winners
          </Button>
          <Typography variant="h3" component="h2" fontWeight="bold">
            Watch How It Works
          </Typography>
          <Typography variant="h6" component="h4">
            We designed a lot of features that can applied
            <br /> automatically so you do not have to run.
          </Typography>
          <Box component="ul" display="flex" flexDirection="column" gap={2}>
            <Box component="li" display="flex" alignItems="center" gap={1}>
              <CheckCircleOutlined color="secondary" />
              <Typography variant="h6" component="h3" fontWeight="bold">
                Auto running when reaches certain number
              </Typography>
            </Box>
            <Box component="li" display="flex" alignItems="center" gap={1}>
              <CheckCircleOutlined color="secondary" />
              <Typography variant="h6" component="h3" fontWeight="bold">
                Calling backup when you overwhelmed
              </Typography>
            </Box>
            <Box component="li" display="flex" alignItems="center" gap={1}>
              <CheckCircleOutlined color="secondary" />
              <Typography variant="h6" component="h3" fontWeight="bold">
                Sending invoices to client completed projects
              </Typography>
            </Box>
            <Box component="li" display="flex" alignItems="center" gap={1}>
              <CheckCircleOutlined color="secondary" />
              <Typography variant="h6" component="h3" fontWeight="bold">
                Turn off tracker when the client not agree
              </Typography>
            </Box>
            <Box component="li" display="flex" alignItems="center" gap={1}>
              <CheckCircleOutlined color="secondary" />
              <Typography variant="h6" component="h3" fontWeight="bold">
                More great features coming soon
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Button variant="contained" size="large" sx={{ bgcolor: "primary", textTransform: "none", borderRadius: 2 }}>
              Get Free Trial
            </Button>
            <Box display="flex" alignItems="center" gap={2}>
              {ayangs.map((ayang, index) => (
                <Box key={ayang} component="figure" sx={{ borderRadius: "50%", overflow: "hidden", width: "45px", height: "45px" }} ml={index === 0 ? 0 : -3}>
                  <img src={ayang} alt="Hero Illustrations Image" className="img" />
                </Box>
              ))}
              <Typography variant="h6" component="h4" fontWeight="bold">
                992 people just signed up
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
