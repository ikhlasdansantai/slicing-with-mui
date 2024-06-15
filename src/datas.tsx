import { FacebookOutlined, GTranslate, PlayCircleFilled, ApiOutlined } from "@mui/icons-material";
import { PartnersItem, PriceCardProps } from "./types";

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

export const packages: PriceCardProps[] = [
  {
    title: "Professional",
    price: "4.999",
    description: "Good for freelancer having 5-15 clients per month about twice.",
    benefits: ["Real tracking behavior", "100 GB file-size documents", "24/7 customer support", "Quick invoicing modules"],
  },
  {
    title: "For Team",
    price: "18.500",
    description: "Good for teams having 30 clients per month about twice.",
    benefits: ["Real tracking behavior", "100 GB file-size documents", "24/7 customer support", "Quick invoicing modules", "Anti fraud payments", "Legal support backed", "LMS for demo features", "More coming soon"],
  },
];

export const HowItWorksData: string[] = [
  "Auto running when reaches certain number",
  "Calling backup when you overwhelmed",
  "Sending invoices to client completed projects",
  "Turn off tracker when the client not agree",
  " More great features coming soon",
];
