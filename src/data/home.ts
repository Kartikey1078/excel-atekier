import { newsArticles, type NewsArticle } from "@/data/news";
import { COMPANY_NAME } from "@/lib/brand";

export const navItems = [
  "Projects",
  "Expertise",
  "People",
  "About Us",
  "Research",
  "Sustainability",
  "Architecture",
  "Contact",
] as const;

export type NewsItem = NewsArticle;

export const newsItems = newsArticles;

export type ExpertiseItem = {
  title: string;
  image: string;
  objectPosition?: string;
};

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "Architecture",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Interior Architecture",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    objectPosition: "55% 28%",
  },
  {
    title: "Masterplans",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80",
    objectPosition: "45% 48%",
  },
  {
    title: "Virtual Spaces",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Workplace Consultancy",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Products",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Exhibitions",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    objectPosition: "31% 44%",
  },
  {
    title: "Installations + Pavilions",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80",
  },
];

export const ctaLinks = [
  { label: `Inside ${COMPANY_NAME}`, href: "#about" },
  { label: "The team", href: "#people" },
  { label: "Our research", href: "#research" },
  { label: "Our approach", href: "#approach" },
] as const;
