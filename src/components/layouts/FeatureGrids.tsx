import { Typography, Grid, Box } from "@mui/material";
import { TravelExploreOutlined } from "@mui/icons-material";

export default function FeatureGrids() {
  return (
    <Box>
      <Grid container justifyContent="space-between" gap={3}>
        <Grid item xs={12} md={3.8} bgcolor="background.default" padding={4} borderRadius={2}>
          <TravelExploreOutlined sx={{ fontSize: "4rem" }} />
          <Typography variant="h5" component="h3" fontWeight="bold" sx={{ mt: 8 }}>
            Real Tracking
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Get the clients behavior faster and accurate by a few of clicks.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3.8} bgcolor="background.default" padding={4} borderRadius={2}>
          <TravelExploreOutlined sx={{ fontSize: "4rem" }} />
          <Typography variant="h5" component="h3" fontWeight="bold" sx={{ mt: 8 }}>
            Email Marketing
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Send a couple of templates A/B testing to encourage clients
          </Typography>
        </Grid>
        <Grid item xs={12} md={3.8} bgcolor="background.default" padding={4} borderRadius={2}>
          <TravelExploreOutlined sx={{ fontSize: "4rem" }} />
          <Typography variant="h5" component="h3" fontWeight="bold" sx={{ mt: 8 }}>
            Payment Gateway
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Clients would send the money to your bank account, secured.
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="space-between" gap={2} mt={4}>
        <Grid item xs={12} md={5.9} bgcolor="background.default" padding={4} borderRadius={2}>
          <TravelExploreOutlined sx={{ fontSize: "4rem" }} />
          <Typography variant="h5" component="h3" fontWeight="bold" sx={{ mt: 8 }}>
            Avoid Client Fraud
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Our AI technologies can prevent client to steal your final income from each project you worked.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5.9} bgcolor="background.default" padding={4} borderRadius={2}>
          <TravelExploreOutlined sx={{ fontSize: "4rem" }} />
          <Typography variant="h5" component="h3" fontWeight="bold" sx={{ mt: 8 }}>
            More Automations
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Our system will notify clients regarding deadline payment, repetition orders, and many more.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
