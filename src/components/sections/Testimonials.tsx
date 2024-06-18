import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { TestimonialsData } from "../../datas";

export default function Testimonials() {
  return (
    <Box component="section" mt={6} py={10}>
      <Container component="section" maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
          <Button variant="contained" sx={{ bgcolor: "ascent", textTransform: "none", borderRadius: 12, display: "block", margin: "auto" }}>
            Success Customers
          </Button>
          <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center">
            Listen What They're
            <br />
            Saying About Benarrr
          </Typography>
        </Box>

        <Grid container justifyContent="space-between">
          {TestimonialsData.map((data, index) => (
            <TestimonialCard key={index} {...data} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function TestimonialCard({ profile, position, message, name, id }: any) {
  return (
    <Grid item lg={3.8} p={4} display="flex" flexDirection="column" gap={2.5} sx={{ borderRadius: 7, boxShadow: `${id !== 1 ? "none" : "0px 0px 50px -2px rgba(0, 0, 0, .11)"}` }}>
      <Box component="figure" sx={{ width: "4rem", borderRadius: "50%", overflow: "hidden" }}>
        <img src={profile} alt="Testimonial Image" className="img" />
      </Box>
      <Typography component="p" fontSize="1.125rem">
        {message}
      </Typography>
      <Box>
        <Typography variant="h5" component="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="h6" component="h3">
          {position}
        </Typography>
      </Box>
    </Grid>
  );
}
