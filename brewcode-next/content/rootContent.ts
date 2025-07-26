import { AboutContentProps, SellingContentProps } from "@/types/type";
import { Coffee, WindArrowDown, HandCoins } from "lucide-react";
// About content
export const aboutContent: AboutContentProps[] = [
  {
    id: 1,
    title: "Affordable Prices",
    description: "Enjoy premium coffee and snacks without breaking the bank.",
    iconName: HandCoins,
    buttonContent: "See Coffee Pricing", // A button to view prices
  },
  {
    id: 2,
    title: "Quality Coffee",
    description:
      "Savor the rich taste of expertly brewed coffee made from the finest beans.",
    iconName: Coffee,
    buttonContent: "Discover Our Beans",
  },
  {
    id: 3,
    title: "Cozy Ambience",
    description:
      "Relax in a warm and inviting atmosphere perfect for work or leisure.",
    iconName: WindArrowDown,
    buttonContent: "Book Your Spot",
  },
];

export const sellingContent: SellingContentProps[] = [
  {
    id: 1,
    title: "Espresso",
    description: "Bold and rich, a timeless favorite for coffee lovers.",
    image: "/images/espresso.png",
    price: 2.49,
  },
  {
    id: 2,
    title: "Macchiato",
    description: "Sweet caramel with a creamy finish, perfect for a treat.",
    image: "/images/caramel-macchiato.png",
    price: 3.99,
  },
  {
    id: 3,
    title: "Americano",
    description: "Smooth and simple, a classic choice for any time of day.",
    image: "/images/americano.png",
    price: 2.99,
  },
];
