import { Button, Box, Container, Typography, Grid } from "@mui/material";
import { packages, partners } from "../../datas";
import { CheckCircleOutlined } from "@mui/icons-material";
import { PriceCardProps } from "../../types";

export default function Pricing() {
  return (
    <Box component="section" sx={{ mt: 6, bgcolor: "background.paper" }} py={10}>
      <Container component="section" maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "start" }}>
        <Grid container justifyContent="space-between" alignItems="start" gap={1}>
          <Grid item xs={12} md={5.2} lg={5} component="article" display="flex" flexDirection="column" alignItems="start" gap={4}>
            <Button variant="contained" sx={{ bgcolor: "ascent", textTransform: "none", borderRadius: 12 }}>
              Good Invesment
            </Button>
            <Typography variant="h3" component="h2" fontWeight="bold">
              Most Friendly Pricing Plans For Everyone
            </Typography>
            <Typography variant="h6" component="h4">
              We designed a lot of features that can applied automatically so you do not have to run.
            </Typography>
            <Grid container gap={3}>
              {partners.map((partner) => (
                <Grid
                  item
                  lg={5.2}
                  key={partner.title}
                  component="article"
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  {partner.icon}
                  <Typography variant="h5" component="h3" fontWeight="bold">
                    {partner.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid container item xs={12} md={6.5} gap={1} justifyContent="space-between" component="article">
            {packages.map((data, index) => (
              <PriceCard key={index} {...data} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function PriceCard({ title, price, description, benefits }: PriceCardProps) {
  return (
    <Grid item lg={5.8}>
      <Box borderRadius={4} p={4} bgcolor="background.default" sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "start" }}>
        <Typography>{title}</Typography>
        <Box display="flex" alignItems="center" gap={0.5}>
          <Typography variant="h3" component="h3" fontWeight="bold">
            ${price}
          </Typography>
          <Typography>/month</Typography>
        </Box>
        <Typography>{description}.</Typography>

        <Box component="ul" display="flex" flexDirection="column" gap={2}>
          {benefits.map((benefit: string, index: number) => (
            <Box key={index} component="li" display="flex" alignItems="center" gap={1}>
              <CheckCircleOutlined color={index < 4 ? "secondary" : "primary"} />
              <Typography variant="h6" component="h3" fontWeight="bold">
                {benefit}
              </Typography>
            </Box>
          ))}
        </Box>
        <Button variant="contained" size="large" sx={{ bgcolor: `${title === "Professional" ? "ascent.dark" : "ascent"}`, textTransform: "none", borderRadius: 2, width: "100%" }}>
          Get Package
        </Button>
      </Box>
    </Grid>
  );
}
