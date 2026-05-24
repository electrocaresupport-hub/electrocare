import {
  Tv, WashingMachine, Refrigerator, Blend, CookingPot, Shirt, Lamp, Fan,
  Microwave, Soup, Wind, Speaker, type LucideIcon,
} from "lucide-react";

export interface Appliance {
  slug: string;
  key:
    | "television" | "washing_machine" | "refrigerator" | "blender"
    | "electric_kettle" | "electric_iron" | "lamp" | "electric_fan"
    | "microwave" | "mixer" | "electric_cooker" | "air_conditioner" | "speaker";
  icon: LucideIcon;
}

export const APPLIANCES: Appliance[] = [
  { slug: "television", key: "television", icon: Tv },
  { slug: "washing-machine", key: "washing_machine", icon: WashingMachine },
  { slug: "refrigerator", key: "refrigerator", icon: Refrigerator },
  { slug: "blender", key: "blender", icon: Blend },
  { slug: "electric-kettle", key: "electric_kettle", icon: CookingPot },
  { slug: "electric-iron", key: "electric_iron", icon: Shirt },
  { slug: "lamp", key: "lamp", icon: Lamp },
  { slug: "electric-fan", key: "electric_fan", icon: Fan },
  { slug: "microwave", key: "microwave", icon: Microwave },
  { slug: "mixer", key: "mixer", icon: Blend },
  { slug: "electric-cooker", key: "electric_cooker", icon: Soup },
  { slug: "air-conditioner", key: "air_conditioner", icon: Wind },
  { slug: "speaker", key: "speaker", icon: Speaker },
];

export const WHATSAPP_NUMBER = "8801700000000"; // Replace with real business WhatsApp number
