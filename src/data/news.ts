export type NewsArticle = {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
};

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Studio unveils coastal cultural district masterplan",
    date: "19/8/2026",
    image: "/news/01.jpg",
    excerpt:
      "A new waterfront quarter designed to connect public space, culture, and resilient infrastructure.",
  },
  {
    id: 2,
    title: "Tower construction phase begins in the city centre",
    date: "28/7/2026",
    image: "/news/02.jpg",
    excerpt:
      "Structural works are underway on a mixed-use tower that will anchor a renewed civic plaza.",
  },
  {
    id: 3,
    title: "New seating collection launches with design partner",
    date: "16/7/2026",
    image: "/news/03.jpg",
    excerpt:
      "A limited collection of sculptural seating explores comfort, craft, and circular materials.",
  },
  {
    id: 4,
    title: "Regional headquarters opens after four-year build",
    date: "30/6/2026",
    image: "/news/04.jpg",
    excerpt:
      "A new headquarters brings teams together under one roof with adaptable work settings.",
  },
  {
    id: 5,
    title: "Airport terminal extension completes passenger trials",
    date: "23/6/2026",
    image: "/news/05.jpg",
    excerpt:
      "Passenger flow testing validates wayfinding, security processing, and gate operations ahead of opening.",
  },
  {
    id: 6,
    title: "Exhibition centre hosts inaugural performance season",
    date: "16/6/2026",
    image: "/news/06.jpg",
    excerpt:
      "The venue welcomes its first public season of exhibitions, talks, and live performance.",
  },
  {
    id: 7,
    title: "Mixed-use district announces twin landmark towers",
    date: "4/6/2026",
    image: "/news/07.jpg",
    excerpt:
      "Two towers will define a new mixed-use district with retail, workspace, and shared amenities.",
  },
  {
    id: 8,
    title: "Lighting collection debuts at international fair",
    date: "22/4/2026",
    image: "/news/08.jpg",
    excerpt:
      "A family of architectural lighting fixtures launches at a major international design fair.",
  },
];
