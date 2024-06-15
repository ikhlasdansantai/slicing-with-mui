import { FacebookOutlined, GTranslate, PlayCircleFilled, ApiOutlined } from "@mui/icons-material";
import { PartnersItem } from "./types";

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Showcase", path: "/showcase" },
  { label: "Pricing", path: "/pricing" },
  { label: "Testimonial", path: "/testimonials" },
];

export const partners: PartnersItem[] = [
  { icon: <FacebookOutlined />, title: "FaceBuku" },
  { icon: <GTranslate />, title: "Gugel Translate" },
  { icon: <PlayCircleFilled />, title: "yusubs" },
  { icon: <ApiOutlined />, title: "Bandung Lautan API" },
];

export const HowItWorksData: string[] = [
  "Auto running when reaches certain number",
  "Calling backup when you overwhelmed",
  "Sending invoices to client completed projects",
  "Turn off tracker when the client not agree",
  " More great features coming soon",
];
