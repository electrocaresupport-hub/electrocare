import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "bn" | "hi";

type Dict = Record<string, string>;

const en: Dict = {
  brand: "ElectroCare",
  nav_home: "Home",
  nav_services: "Services",
  nav_about: "About",
  nav_contact: "Contact",
  nav_reviews: "Reviews",
  nav_location: "Location",
  nav_policy: "Policy",
  login: "Login",
  signup: "Sign Up",
  hero_greeting: "Namaste Sir/Madam",
  hero_welcome: "Welcome To Our Website",
  hero_tag: "For Any Service Click Here ↓",
  hero_cta: "Repair Anything",
  hero_sub: "Trusted home appliance & electronics repair, at your doorstep.",
  services_title: "Choose Your Appliance",
  services_sub: "Tap any appliance to request a quick repair.",
  request_title: "Repair Request",
  field_name: "Customer Name",
  field_phone: "Phone Number",
  field_address: "Address",
  field_appliance: "Appliance Name",
  field_problem: "Problem Description",
  upload_text: "Upload A Photo Of Your Problem",
  upload_hint: "PNG, JPG up to 5MB",
  submit: "Send via WhatsApp",
  charges_note: "Service charges depend on appliance condition and repair complexity.",
  whatsapp: "WhatsApp",
  back: "Back",
  // appliances
  television: "Television",
  washing_machine: "Washing Machine",
  refrigerator: "Refrigerator",
  blender: "Blender",
  electric_kettle: "Electric Kettle",
  electric_iron: "Electric Iron",
  lamp: "Lamp",
  electric_fan: "Electric Fan",
  microwave: "Microwave",
  mixer: "Mixer",
  electric_cooker: "Electric Cooker",
  air_conditioner: "Air Conditioner",
  speaker: "Music Box / Speaker",
  water_purifier: "Water Purifier",
  ceiling_fan: "Ceiling Fan",
  induction_cooker: "Induction Cooker",
  room_heater: "Room Heater",
  small_electronics: "Small Home Electronics",
  more_appliances: "More Appliances",
  // pages
  about_title: "About ElectroCare",
  about_body: "ElectroCare is your trusted neighborhood repair partner. With certified technicians and genuine parts, we bring your appliances back to life — fast, safe, and affordable.",
  contact_title: "Contact Us",
  contact_body: "Reach our support team on WhatsApp anytime. We respond within minutes during business hours.",
  policy_title: "Our Policy",
  policy_body: "Transparent pricing and honest inspection on every repair.",
  reviews_title: "What Customers Say",
  location_title: "Find Us",
  location_body: "Based in Khowai, Tripura, India — we provide on-site service across the area. Tap WhatsApp to share your location.",
  footer_rights: "All rights reserved.",
};

const bn: Dict = {
  brand: "ইলেক্ট্রোকেয়ার",
  nav_home: "হোম",
  nav_services: "সার্ভিস",
  nav_about: "আমাদের সম্পর্কে",
  nav_contact: "যোগাযোগ",
  nav_reviews: "রিভিউ",
  nav_location: "লোকেশন",
  nav_policy: "নীতিমালা",
  login: "লগইন",
  signup: "সাইন আপ",
  hero_greeting: "নমস্কার স্যার/ম্যাডাম",
  hero_welcome: "আমাদের ওয়েবসাইটে স্বাগতম",
  hero_tag: "যেকোনো সার্ভিসের জন্য এখানে ক্লিক করুন ↓",
  hero_cta: "যেকোনো কিছু মেরামত করুন",
  hero_sub: "বিশ্বস্ত হোম অ্যাপ্লায়েন্স ও ইলেকট্রনিক্স মেরামত, আপনার দরজায়।",
  services_title: "আপনার অ্যাপ্লায়েন্স বেছে নিন",
  services_sub: "দ্রুত মেরামতের জন্য যেকোনো অ্যাপ্লায়েন্সে ট্যাপ করুন।",
  request_title: "মেরামত অনুরোধ",
  field_name: "গ্রাহকের নাম",
  field_phone: "ফোন নম্বর",
  field_address: "ঠিকানা",
  field_appliance: "অ্যাপ্লায়েন্সের নাম",
  field_problem: "সমস্যার বিবরণ",
  upload_text: "আপনার সমস্যার একটি ছবি আপলোড করুন",
  upload_hint: "PNG, JPG সর্বোচ্চ ৫MB",
  submit: "WhatsApp এ পাঠান",
  charges_note: "সার্ভিস চার্জ অ্যাপ্লায়েন্সের অবস্থা এবং মেরামতের জটিলতার উপর নির্ভর করে।",
  whatsapp: "WhatsApp",
  back: "ফিরে যান",
  television: "টেলিভিশন",
  washing_machine: "ওয়াশিং মেশিন",
  refrigerator: "ফ্রিজ",
  blender: "ব্লেন্ডার",
  electric_kettle: "ইলেকট্রিক কেটলি",
  electric_iron: "ইলেকট্রিক আয়রন",
  lamp: "ল্যাম্প",
  electric_fan: "ইলেকট্রিক ফ্যান",
  microwave: "মাইক্রোওয়েভ",
  mixer: "মিক্সার",
  electric_cooker: "ইলেকট্রিক কুকার",
  air_conditioner: "এয়ার কন্ডিশনার",
  speaker: "মিউজিক বক্স / স্পিকার",
  about_title: "ইলেক্ট্রোকেয়ার সম্পর্কে",
  about_body: "ইলেক্ট্রোকেয়ার আপনার বিশ্বস্ত মেরামত পার্টনার। সার্টিফায়েড টেকনিশিয়ান এবং আসল পার্টস দিয়ে আমরা দ্রুত, নিরাপদ এবং সাশ্রয়ী সেবা দিই।",
  contact_title: "যোগাযোগ করুন",
  contact_body: "WhatsApp এ আমাদের সাপোর্ট টিমের সাথে যেকোনো সময় যোগাযোগ করুন।",
  policy_title: "আমাদের নীতিমালা",
  policy_body: "স্বচ্ছ মূল্য। বেশিরভাগ অ্যাপ্লায়েন্সে নো-ফিক্স নো-ফি ডায়াগনস্টিকস। মেরামতের পার্টসে ৩০ দিনের ওয়ারেন্টি।",
  reviews_title: "গ্রাহকদের মতামত",
  location_title: "আমাদের খুঁজুন",
  location_body: "শহর জুড়ে অন-সাইট সার্ভিস। WhatsApp ট্যাপ করে আপনার লোকেশন শেয়ার করুন।",
  footer_rights: "সর্বস্বত্ব সংরক্ষিত।",
};

const hi: Dict = {
  brand: "इलेक्ट्रोकेयर",
  nav_home: "होम",
  nav_services: "सेवाएँ",
  nav_about: "हमारे बारे में",
  nav_contact: "संपर्क",
  nav_reviews: "समीक्षाएँ",
  nav_location: "स्थान",
  nav_policy: "नीति",
  login: "लॉगिन",
  signup: "साइन अप",
  hero_greeting: "नमस्ते सर/मैडम",
  hero_welcome: "हमारी वेबसाइट पर आपका स्वागत है",
  hero_tag: "किसी भी सेवा के लिए यहाँ क्लिक करें ↓",
  hero_cta: "कुछ भी मरम्मत करें",
  hero_sub: "भरोसेमंद होम अप्लायंस और इलेक्ट्रॉनिक्स मरम्मत, आपके दरवाज़े पर।",
  services_title: "अपना उपकरण चुनें",
  services_sub: "त्वरित मरम्मत के लिए किसी भी उपकरण पर टैप करें।",
  request_title: "मरम्मत अनुरोध",
  field_name: "ग्राहक का नाम",
  field_phone: "फ़ोन नंबर",
  field_address: "पता",
  field_appliance: "उपकरण का नाम",
  field_problem: "समस्या का विवरण",
  upload_text: "अपनी समस्या की तस्वीर अपलोड करें",
  upload_hint: "PNG, JPG अधिकतम 5MB",
  submit: "WhatsApp पर भेजें",
  charges_note: "सेवा शुल्क उपकरण की स्थिति और मरम्मत की जटिलता पर निर्भर करता है।",
  whatsapp: "WhatsApp",
  back: "वापस",
  television: "टेलीविजन",
  washing_machine: "वॉशिंग मशीन",
  refrigerator: "रेफ्रिजरेटर",
  blender: "ब्लेंडर",
  electric_kettle: "इलेक्ट्रिक केतली",
  electric_iron: "इलेक्ट्रिक आयरन",
  lamp: "लैंप",
  electric_fan: "इलेक्ट्रिक पंखा",
  microwave: "माइक्रोवेव",
  mixer: "मिक्सर",
  electric_cooker: "इलेक्ट्रिक कुकर",
  air_conditioner: "एयर कंडीशनर",
  speaker: "म्यूज़िक बॉक्स / स्पीकर",
  about_title: "इलेक्ट्रोकेयर के बारे में",
  about_body: "इलेक्ट्रोकेयर आपका भरोसेमंद मरम्मत साथी है। प्रमाणित तकनीशियन और असली पार्ट्स के साथ हम तेज़, सुरक्षित और किफायती सेवा देते हैं।",
  contact_title: "संपर्क करें",
  contact_body: "WhatsApp पर हमारी सहायता टीम से किसी भी समय संपर्क करें।",
  policy_title: "हमारी नीति",
  policy_body: "पारदर्शी मूल्य निर्धारण। अधिकांश उपकरणों पर नो-फिक्स, नो-फी डायग्नोस्टिक्स। मरम्मत किए गए पार्ट्स पर 30-दिन की वारंटी।",
  reviews_title: "ग्राहक क्या कहते हैं",
  location_title: "हमें खोजें",
  location_body: "पूरे शहर में ऑन-साइट सेवा। WhatsApp टैप करके अपना स्थान साझा करें।",
  footer_rights: "सर्वाधिकार सुरक्षित।",
};

const dicts: Record<Lang, Dict> = { en, bn, hi };

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof en) => string;
}

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored && dicts[stored]) setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: keyof typeof en) => dicts[lang][key] ?? en[key] ?? key;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "bn", label: "বাংলা" },
  { code: "hi", label: "हिन्दी" },
];
