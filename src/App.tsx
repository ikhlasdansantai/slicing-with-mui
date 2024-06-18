import { Container, Box } from "@mui/material";
import "./App.css";
import Header from "./components/layouts/Header";
import Hero from "./components/sections/Hero";
import Brands from "./components/sections/Brands";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <Box>
      <Header />
      <Container component="main" maxWidth="xl" sx={{ mt: 6 }}>
        <Hero />
        <Brands />
      </Container>
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Footer />
    </Box>
  );
}

export default App;
