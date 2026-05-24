import {
  Tv, WashingMachine, Refrigerator, Blend, CookingPot, Shirt, Lamp, Fan,
  Microwave, Soup, Wind, Speaker, Droplet, Flame, Zap, Cpu, MoreHorizontal,
  type LucideIcon,
} from "lucide-react";

export interface Appliance {
  slug: string;
  key:
    | "television" | "washing_machine" | "refrigerator" | "blender"
    | "electric_kettle" | "electric_iron" | "lamp" | "electric_fan"
    | "microwave" | "mixer" | "electric_cooker" | "air_conditioner" | "speaker"
    | "water_purifier" | "ceiling_fan" | "induction_cooker" | "room_heater"
    | "small_electronics" | "more_appliances";
  icon: LucideIcon;
}

export const APPLIANCES: Appliance[] = [
  { slug: "television", key: "television", icon: Tv },
  { slug: "washing-machine", key: "washing_machine", icon: WashingMachine },
  { slug: "refrigerator", key: "refrigerator", icon: Refrigerator },
  { slug: "air-conditioner", key: "air_conditioner", icon: Wind },
  { slug: "ceiling-fan", key: "ceiling_fan", icon: Fan },
  { slug: "electric-fan", key: "electric_fan", icon: Fan },
  { slug: "water-purifier", key: "water_purifier", icon: Droplet },
  { slug: "induction-cooker", key: "induction_cooker", icon: Zap },
  { slug: "room-heater", key: "room_heater", icon: Flame },
  { slug: "microwave", key: "microwave", icon: Microwave },
  { slug: "electric-cooker", key: "electric_cooker", icon: Soup },
  { slug: "electric-kettle", key: "electric_kettle", icon: CookingPot },
  { slug: "blender", key: "blender", icon: Blend },
  { slug: "mixer", key: "mixer", icon: Blend },
  { slug: "electric-iron", key: "electric_iron", icon: Shirt },
  { slug: "lamp", key: "lamp", icon: Lamp },
  { slug: "speaker", key: "speaker", icon: Speaker },
  { slug: "small-electronics", key: "small_electronics", icon: Cpu },
  { slug: "more-appliances", key: "more_appliances", icon: MoreHorizontal },
];

// Replace with real business WhatsApp number (international format, no +)
export const WHATSAPP_NUMBER = "8801700000000";
