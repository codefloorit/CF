import { itServices } from "./itServices";
import { taxServices } from "./taxServices";

export const navigation = [
  { label: "Home", path: "/" },
  // {
  //   label: "About",
  //   path: "/about",
  //   children: [
  //     { label: "About Us", path: "/about" },
  //     { label: "Our Team", path: "/about/team" },
  //     { label: "Why Choose Us", path: "/about/why-choose-us" },
  //   ],
  // },

  { label: 'About', path: '/about' },

  { label: 'Our Work', path: '/case-studies' },

  {
    label: "IT Services",
    path: "/it-services",
    mega: true,
    children: itServices.map((s) => ({ label: s.title, path: `/it-services/${s.slug}` })),
  },
  {
    label: "Tax & Financial",
    path: "/tax-services",
    mega: true,
    children: taxServices.map((s) => ({ label: s.title, path: `/tax-services/${s.slug}` })),
  },
  
      // { label: "Testimonials", path: "/testimonials" },

  // {
  //   label: "Contact",
  //   path: "/contact",
  //   children: [
  //     { label: "Contact Us", path: "/contact" },
  //     { label: "Get a Quote", path: "/get-quote" },
  //     { label: "Book Consultation", path: "/book-consultation" },
  //     { label: "Support", path: "/support" },
  //   ],
  // },

  { label: 'Contact', path: '/contact' },
];
