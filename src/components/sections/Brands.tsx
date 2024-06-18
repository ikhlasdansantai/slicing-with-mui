import { Box, Container, Typography } from "@mui/material";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect } from "react";
import { partners } from "../../datas";

export default function Brands() {
  useEffect(() => {
    new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      arrows: false,
      pagination: false,
      perPage: 5,
      autoScroll: {
        speed: 0.5,
      },
    }).mount({ AutoScroll });
  }, []);

  return (
    <Container maxWidth="xl" component="section" sx={{ mt: 6 }}>
      <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" gap={0.5}>
        <Box>
          <Typography component="h4" fontSize="2rem" color="ascent.dark" textAlign="center" fontWeight="bold" display="inline">
            Over{" "}
          </Typography>
          <Typography component="h4" fontSize="2rem" color="primary.main" fontWeight="bold" display="inline">
            280,000{" "}
          </Typography>
          <Typography component="h4" fontSize="2rem" color="ascent.dark" fontWeight="bold" display="inline">
            big companies
          </Typography>
        </Box>
        <Box>
          <Typography component="h4" fontSize="2rem" color="ascent.dark" fontWeight="bold" display="inline">
            trust Benarrr for their{" "}
          </Typography>
          <Typography component="h4" fontSize="2rem" color="primary.main" fontWeight="bold" display="inline">
            280,000
          </Typography>
        </Box>
      </Box>

      <Box mt={6} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {partners.map((item) => (
              <Box className="splide__slide" key={item.title} display="flex" justifyContent="center" alignItems="center" gap={2}>
                {item.icon}
                <p>{item.title}</p>
              </Box>
            ))}
          </ul>
        </div>
      </Box>
    </Container>
  );
}

// Thanks to
// https://codepen.io/HackyG/pen/WNmReYd
