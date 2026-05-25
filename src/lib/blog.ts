import { ShieldAlert, Wrench, Sparkles, HardHat, type LucideIcon } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  icon: LucideIcon;
  accent: string; // tailwind gradient classes
  content: { heading: string; body: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "appliance-repair-safety-rules",
    title: "Appliance Repair Safety Rules (Important Warning)",
    excerpt:
      "Critical electrical safety rules every household must know before touching any appliance — from microwave capacitor risks to water damage hazards.",
    readTime: "5 min read",
    category: "Safety",
    icon: ShieldAlert,
    accent: "from-red-500/15 to-blue-500/15",
    content: [
      {
        heading: "Always Unplug Before Any Repair",
        body: "Before opening, inspecting, or cleaning any appliance, fully disconnect it from the power source. Switching off the wall switch is not enough — a faulty switch can still allow current to leak. Pulling the plug is the only guaranteed safe step.",
      },
      {
        heading: "Microwave Capacitor — A Hidden Killer",
        body: "Microwave ovens contain a high-voltage capacitor that can store a lethal electric charge for days, even after being unplugged. Touching the wrong component can cause severe shock, burns, or even an explosion. Never open a microwave at home — always call a trained technician.",
      },
      {
        heading: "Water-Damaged Appliances Are Dangerous",
        body: "If an appliance has been exposed to water, do not plug it in to 'test' if it works. Hidden moisture can cause short circuits, fires, or fatal electric shocks. The appliance must be fully dried and inspected by a professional before any power is reapplied.",
      },
      {
        heading: "Why Professional Repair Matters",
        body: "Certified technicians have the tools, training, and discharge equipment to handle high-voltage components safely. A small mistake during DIY can damage the appliance permanently, void your warranty, or cause serious injury. When in doubt — call ElectroCare.",
      },
    ],
  },
  {
    slug: "why-proper-appliance-repair-matters",
    title: "Why Proper Appliance Repair Matters",
    excerpt:
      "Cutting corners on repairs costs more in the long run. Here is why correct diagnosis and quality parts protect your appliance and your wallet.",
    readTime: "4 min read",
    category: "Guide",
    icon: Wrench,
    accent: "from-blue-500/15 to-cyan-500/15",
    content: [
      {
        heading: "Correct Diagnosis Saves Money",
        body: "Many appliance failures look similar on the surface but have very different root causes. A skilled technician identifies the actual problem instead of replacing parts blindly — saving you from paying for unnecessary repairs.",
      },
      {
        heading: "Long-Lasting Performance",
        body: "Quality repair with genuine spare parts restores the appliance to near-original performance. Your fridge cools properly, your AC consumes less power, and your washing machine runs quietly — for years to come.",
      },
      {
        heading: "Risks of Cheap or Incorrect Repair",
        body: "Low-quality spare parts and untrained mechanics often trigger repeated failures, sudden breakdowns, and even fire risks. What seems cheap today usually becomes the most expensive repair tomorrow.",
      },
      {
        heading: "Long-Term Cost Savings",
        body: "A properly repaired appliance can serve you for many more years, postponing the cost of a brand-new replacement. Professional service is an investment in reliability, energy efficiency, and peace of mind.",
      },
    ],
  },
  {
    slug: "regular-maintenance-guide",
    title: "Regular Maintenance Guide for Home Appliances",
    excerpt:
      "Simple maintenance habits that keep your AC, fridge, fan, and microwave running efficiently and reduce your monthly electricity bill.",
    readTime: "6 min read",
    category: "Maintenance",
    icon: Sparkles,
    accent: "from-cyan-500/15 to-blue-500/15",
    content: [
      {
        heading: "Air Conditioner Care",
        body: "Clean or replace the AC filter every 30 days during heavy use. Get a professional service before summer and after monsoon to clean coils, check gas, and inspect drainage. A well-serviced AC cools faster and uses up to 20% less power.",
      },
      {
        heading: "Refrigerator Maintenance",
        body: "Vacuum the back coils every 3 months to remove dust. Keep at least 10 cm of space behind the fridge for airflow. Check the door rubber seal — if it cannot hold a paper sheet firmly, it is leaking cold air and wasting energy.",
      },
      {
        heading: "Ceiling Fans & Electric Fans",
        body: "Wipe blades monthly to remove dust build-up that unbalances the fan and stresses the motor. Once a year, lubricate the bearing (for older models) and tighten the mounting screws. A balanced fan runs quietly and lasts longer.",
      },
      {
        heading: "Microwave Hygiene & Safety",
        body: "Wipe the interior weekly with a mild soap solution. Never run the microwave empty. Keep the door seal clean — a damaged seal leaks microwaves and reduces heating efficiency.",
      },
      {
        heading: "Dust Protection & Energy Saving",
        body: "Dust is the silent enemy of every electronic device. A clean appliance breathes better, runs cooler, lasts longer, and consumes less electricity — protecting both your equipment and your monthly bill.",
      },
    ],
  },
  {
    slug: "diy-vs-professional-repair",
    title: "DIY Repair vs Professional Service",
    excerpt:
      "When is it safe to fix something yourself, and when must you call an expert? A clear guide for every household.",
    readTime: "5 min read",
    category: "Advice",
    icon: HardHat,
    accent: "from-blue-500/15 to-indigo-500/15",
    content: [
      {
        heading: "The Real Risks of DIY Electrical Repair",
        body: "Opening an electrical appliance without proper training exposes you to electric shock, short circuits, fire hazards, and permanent damage to the appliance. Online tutorials cannot replace years of hands-on experience.",
      },
      {
        heading: "When DIY Is Safe",
        body: "Basic cleaning is perfectly safe: wiping surfaces, cleaning fan blades, vacuuming the back of the fridge, replacing the AC filter, or changing a remote battery. As long as you do not open the casing or touch internal wiring, you are fine.",
      },
      {
        heading: "Why Professional Repair Is Safer",
        body: "Certified technicians use insulated tools, multimeters, and capacitor dischargers. They follow a tested diagnostic process, replace only what is actually faulty, and test the appliance under load before returning it to you.",
      },
      {
        heading: "Expert Handling Advantages",
        body: "A professional repair includes safety inspection, correct genuine parts, proper reassembly, and post-repair testing. The result: an appliance that is not just working — but safe, efficient, and reliable for years.",
      },
    ],
  },
];
