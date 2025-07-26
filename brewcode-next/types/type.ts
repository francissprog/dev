import { RefObject } from "react";
import { LucideIcon } from "lucide-react";
import { useRouter } from "next/router";
const router = useRouter();
// Define section keys
export type SectionKeys = "home" | "about" | "selling" | "collab";

// Base interface for scroll functionality
export interface NavbarProps {
  scroll: (section: SectionKeys) => void;
}


// Interface for components that need refs
export interface RefProps {
  section: RefObject<HTMLDivElement | null>;
}

// NavbarProps inheriting from Scrollable
export interface LandingProps extends NavbarProps, RefProps {}

// base content Props
export interface BaseContentProps {
  id: number;
  title: string;
  description: string;
}
// About Content props
export interface AboutContentProps extends BaseContentProps {
  iconName: LucideIcon;
  buttonContent: string;
}
// Selling Content Props
export interface SellingContentProps extends BaseContentProps {
  image: string;
  price: number;
}
