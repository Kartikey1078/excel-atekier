export type NewsArticle = {
  id: number;
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  body: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "timber-hybrid-tower-business-district",
    title: "Timber hybrid tower breaks ground in the business district",
    date: "12/3/2026",
    image: "/news/01.jpg",
    excerpt:
      "A 32-storey structure pairs exposed timber with a steel core, targeting net-zero operations from day one.",
    body: [
      "Construction has started on a timber hybrid tower that will anchor a renewed business district. The design keeps structure and services in a central core so the perimeter can remain open and daylit.",
      "Facades use FSC-certified timber where code allows, with fire engineering and acoustic isolation integrated from the earliest sketches. The team is targeting net-zero operational carbon through passive shading, heat recovery, and rooftop PV.",
      "Public realm at the base includes a covered walkway and small plaza that connect to transit within a five-minute walk.",
    ],
  },
  {
    id: 2,
    slug: "adaptive-reuse-factory-creative-offices",
    title: "Adaptive reuse transforms a 1960s factory into creative offices",
    date: "4/3/2026",
    image: "/news/02.jpg",
    excerpt:
      "Original brick volumes and sawtooth roofs are preserved while new light wells bring daylight deep into the plan.",
    body: [
      "A former manufacturing hall is being converted into flexible creative workspace without erasing its industrial character. Existing brick and steel are cleaned and left visible; new insertions are clearly contemporary.",
      "Light wells and clerestory glazing pull daylight into the deep floor plate, reducing reliance on artificial lighting for most of the working day.",
      "The project demonstrates how adaptive reuse can deliver character, lower embodied carbon, and faster planning timelines than a full demolition and rebuild.",
    ],
  },
  {
    id: 3,
    slug: "public-plaza-shade-monsoon-drainage",
    title: "Public plaza design prioritises shade and monsoon-ready drainage",
    date: "22/2/2026",
    image: "/news/03.jpg",
    excerpt:
      "Landscape and architecture work as one system to keep civic space usable through heat and heavy rain.",
    body: [
      "The plaza treats stormwater as a visible part of the design rather than hiding it underground. Channels, planters, and permeable paving slow and store rainfall during peak monsoon events.",
      "Large canopy trees and lightweight fabric structures provide shade through the hottest months, while clear sightlines keep the space feeling safe and open.",
      "Local stone and precast seating create durable edges for everyday use, markets, and small performances.",
    ],
  },
  {
    id: 4,
    slug: "compact-live-work-affordable-housing-pilot",
    title: "Compact live-work prototypes win affordable housing pilot",
    date: "9/2/2026",
    image: "/news/04.jpg",
    excerpt:
      "Modular units stack around shared courts, offering flexible floor plates for young families and home studios.",
    body: [
      "The pilot explores compact live-work units arranged around shared courts and cycle storage. Units can combine vertically for growing households or split for studio use.",
      "Standardised structural bays keep construction repeatable while allowing variation in façade and interior fit-out.",
      "Community kitchens, laundry, and co-working on the ground floor reduce the pressure on individual unit sizes without sacrificing privacy.",
    ],
  },
  {
    id: 5,
    slug: "museum-extension-folded-concrete-canopy",
    title: "Museum extension opens with a folded concrete canopy",
    date: "28/1/2026",
    image: "/news/05.jpg",
    excerpt:
      "The new wing adds gallery volume without touching the heritage façade, using a single sculptural roof element.",
    body: [
      "The extension sits behind a protected heritage elevation, connected by a minimal glass link that reads separately from both old and new fabric.",
      "A folded concrete canopy spans the main gallery, bringing controlled north light and a column-free exhibition floor.",
      "Services are tucked into thickened walls so curators can reconfigure partitions without compromising ceiling height or lighting rigs.",
    ],
  },
  {
    id: 6,
    slug: "brick-campus-pedestrian-spines",
    title: "Brick campus masterplan centres on pedestrian-only spines",
    date: "15/1/2026",
    image: "/news/06.jpg",
    excerpt:
      "Classrooms, labs, and social spaces line shaded walkways that link to transit and local retail.",
    body: [
      "The masterplan organises teaching and research around two pedestrian spines shaded by planting and deep overhangs.",
      "Brick volumes step in height to match surrounding context while opening to internal courtyards for informal study and events.",
      "Vehicle access is limited to the perimeter so the centre of campus remains calm, walkable, and safe for students at all hours.",
    ],
  },
  {
    id: 7,
    slug: "high-rise-facade-solar-gain-study",
    title: "High-rise façade study cuts solar gain by forty percent",
    date: "3/1/2026",
    image: "/news/07.jpg",
    excerpt:
      "Parametric louvers and ceramic cladding were tested in a digital twin before a single panel was fabricated.",
    body: [
      "A façade optimisation study used digital twin simulation to compare louver depth, spacing, and ceramic panel colour across orientations.",
      "The selected system reduces peak solar gain by roughly forty percent while maintaining views and daylight autonomy targets.",
      "Mock-ups at full scale validated glare, maintenance access, and acoustic performance before procurement.",
    ],
  },
  {
    id: 8,
    slug: "riverside-pavilion-local-stone",
    title: "Riverside pavilion built from locally quarried stone",
    date: "18/12/2025",
    image: "/news/08.jpg",
    excerpt:
      "A lightweight timber roof floats above masonry walls, framing views of the water and evening gatherings.",
    body: [
      "The pavilion uses stone from a regional quarry, cut thick for thermal mass and left with a natural finish that will age gracefully.",
      "A light timber roof structure spans between masonry piers, leaving long edges open to river breezes and views.",
      "The space is programmed for small concerts, community meetings, and informal seating along the water’s edge.",
    ],
  },
];

export function getArchitectureBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function getAllArchitectureSlugs(): string[] {
  return newsArticles.map((article) => article.slug);
}
