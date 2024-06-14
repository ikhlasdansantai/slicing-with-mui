import { Box, Container, Typography } from "@mui/material";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css"; // Pastikan untuk mengimpor CSS Splide
import { useEffect } from "react";
import { FacebookOutlined, GTranslate, PlayCircleFilled, ApiOutlined } from "@mui/icons-material";

export default function Brands() {
  useEffect(() => {
    // Inisialisasi Splide setelah komponen dirender
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

  interface TempItem {
    icon: JSX.Element | any;
    title: string;
  }
  const temp: TempItem[] = [
    { icon: <FacebookOutlined />, title: "FaceBuku" },
    { icon: <GTranslate />, title: "Gugel Translate" },
    { icon: <PlayCircleFilled />, title: "yusubs" },
    { icon: <ApiOutlined />, title: "Bandung Lautan API" },
  ];

  return (
    <Container maxWidth="xl" component="section" sx={{ mt: 6 }}>
      <Typography variant="h4" color="ascent.dark" textAlign="center" fontWeight="bold">
        Over{" "}
        <Typography variant="h4" color="primary.main" fontWeight="bold" display="inline">
          280,000
        </Typography>{" "}
        big companies
        <br />
        trust Benarrr for their{" "}
        <Typography variant="h4" color="primary.main" fontWeight="bold" display="inline">
          280,000
        </Typography>
      </Typography>

      <Box mt={6} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {temp.map((item) => (
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
