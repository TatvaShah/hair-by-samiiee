import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Hair by Samiiee",
  tagline: "Balayage and colour corrections.",
  category: "Balayage and colour",
  schemaType: "BeautySalon",
  area: "Brampton, ON",
  siteUrl: "https://hair-by-samiiee.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#d4a5a5" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "At Oasis in Brampton",
    headline: "Colour you will want to keep",
    subhead: "Balayage and colour corrections. Book your appointment on Square.",
    images: [
      { src: "/images/post-10.jpg", alt: "Dimensional blonde waves by Hair by Samiiee" },
      { src: "/images/post-6.jpg", alt: "Soft wavy balayage by Hair by Samiiee" },
      { src: "/images/post-5.jpg", alt: "Finished dark waves by Hair by Samiiee" },
    ],
    primaryCta: { label: "Book on Square", href: "https://oasissalonspaxhairbysamiiee.square.site" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: ["Balayage", "Colour corrections", "Book on Square", "At Oasis in Brampton"],

  about: {
    title: "Welcome to Hair by Samiiee",
    body: [
      "Sammie offers balayage and colour corrections at Oasis in Brampton. Book an appointment on Square, or get in touch by phone or Instagram.",
    ],
    image: { src: "/images/post-6.jpg", alt: "Soft wavy balayage by Hair by Samiiee" },
  },

  menu: {
    label: "Services",
    title: "Our services",
    variant: "list",
    showPrices: false,
    groups: [
      {
        title: "Colour",
        items: [
          { name: "Balayage" },
          { name: "Colour corrections" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent colour",
    items: [
      { src: "/images/post-10.jpg", alt: "Dimensional blonde waves by Hair by Samiiee", caption: "Dimensional blonde" },
      { src: "/images/post-6.jpg", alt: "Soft wavy balayage by Hair by Samiiee", caption: "Soft waves" },
      { src: "/images/post-5.jpg", alt: "Finished dark waves by Hair by Samiiee", caption: "A fresh finish" },
      { src: "/images/post-1.jpg", alt: "Vibrant red colour by Hair by Samiiee", caption: "Red without bleach" },
      { src: "/images/post-8.jpg", alt: "Cool toned blonde colour by Hair by Samiiee", caption: "Cool blonde" },
      { src: "/images/post-9.jpg", alt: "Blended blonde colour by Hair by Samiiee", caption: "Blended colour" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "hairbysamiiee",
    embeds: [
      "https://www.instagram.com/reel/Dc2KhPsxD-N/",
      "https://www.instagram.com/reel/DeLFEQLRVtk/",
    ],
  },

  order: {
    label: "How to book",
    title: "Book your appointment",
    intro: "Book on Square, or get in touch by phone or Instagram.",
    dmMessage: "Hi Hair by Samiiee! I would like to book an appointment.\nService:\nPreferred date:\nColour or style notes:",
    headerCtaLabel: "DM to book",
    links: [{ label: "Book on Square", href: "https://oasissalonspaxhairbysamiiee.square.site" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Book your appointment on Square, or call or send a message on Instagram." },
    { q: "Where are you located?", a: "Hair by Samiiee is at Oasis, 3-3955 Cottrelle Blvd, Brampton." },
    { q: "What services do you offer?", a: "Balayage and colour corrections." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Brampton, Ontario",
    phone: "905-913-2600",
    email: "hairbysamiiee@hotmail.com",
    address: "3-3955 Cottrelle Blvd, Brampton, ON",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/hairbysamiiee/" }],
  },

  seo: {
    title: "Hair by Samiiee | Balayage and colour in Brampton",
    description: "Balayage and colour corrections at Oasis in Brampton. Book your appointment on Square, or get in touch by phone or Instagram.",
    keywords: ["balayage Brampton", "colour corrections Brampton", "Hair by Samiiee", "Oasis salon Brampton"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
