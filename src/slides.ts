import type { ComponentType } from "react";
import { CoverSlide } from "./slides/01-cover";
import { VisionSlide } from "./slides/02-vision";
import { AboutSlide } from "./slides/03-about";
import { MissionVisionSlide } from "./slides/04-mission-vision";
import { OrgSlide } from "./slides/05-org";
import { ServicesSlide } from "./slides/06-services";
import { ProductsSlide } from "./slides/07-products";
import { PartnersSlide } from "./slides/08-partners";
import { StrengthsSlide } from "./slides/09-strengths";
import { IndustriesSlide } from "./slides/10-industries";
import { ProjectsIntroSlide, SwissHotelSlide, P2PSlide, AmaSalonSlide, F7Slide, WatchMarketSlide, SerenitySpaSlide, ShowroomSlide } from "./slides/11-projects";
import { GeographySlide } from "./slides/12-geography";
import { ContactSlide } from "./slides/13-contact";

export interface SlideDef {
  title: string;
  component: ComponentType;
  tone?: "light" | "dark" | "image";
  tubeY?: number;
}

export const slides: SlideDef[] = [
  { title: "Cover",                component: CoverSlide,         tone: "dark", tubeY: 540 },
  { title: "Vision Statement",     component: VisionSlide,        tone: "dark", tubeY: 80  },
  { title: "About Us",             component: AboutSlide,         tone: "light", tubeY: 80 },
  { title: "Mission & Vision",     component: MissionVisionSlide, tone: "dark", tubeY: 80  },
  { title: "Organization",         component: OrgSlide,           tone: "light", tubeY: 80 },
  { title: "Services",             component: ServicesSlide,      tone: "light", tubeY: 80 },
  { title: "Product Categories",   component: ProductsSlide,      tone: "dark", tubeY: 80  },
  { title: "Global Partners",      component: PartnersSlide,      tone: "light", tubeY: 80 },
  { title: "Our Strengths",        component: StrengthsSlide,     tone: "dark", tubeY: 80  },
  { title: "Industry Applications",component: IndustriesSlide,    tone: "light", tubeY: 80 },
  { title: "Featured Projects",    component: ProjectsIntroSlide, tone: "dark", tubeY: 80  },
  { title: "Swiss Hotel Jeddah",   component: SwissHotelSlide,    tone: "image" },
  { title: "P2P Motors Showroom",  component: P2PSlide,           tone: "image" },
  { title: "AMA Salon",            component: AmaSalonSlide,      tone: "image" },
  { title: "F7 Showroom",          component: F7Slide,            tone: "image" },
  { title: "Watch Market",         component: WatchMarketSlide,   tone: "image" },
  { title: "Serenity Secret Spa",  component: SerenitySpaSlide,   tone: "image" },
  { title: "Modular Lighting Showroom", component: ShowroomSlide, tone: "image" },
  { title: "Geographic Presence",  component: GeographySlide,     tone: "dark", tubeY: 80  },
  { title: "Contact",              component: ContactSlide,       tone: "dark", tubeY: 540 },
];
