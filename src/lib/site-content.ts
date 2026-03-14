import type {
  Category,
  CategorySlug,
  ContactConfig,
  GalleryItem,
  ImagePrompt,
  NavLink,
  Product,
  StoryCard,
} from "@/types/content";

export const siteConfig = {
  name: "SMG Fashion",
  tagline: "Heritage Curated for Refined Retail.",
  description:
    "SMG Fashion is a UK-focused wholesale house for textiles, ethnic clothing, footwear, perfume, and cosmetics, bringing heritage-led product curation to modern retail partners.",
  longDescription:
    "SMG Fashion presents a premium B2B wholesale identity for retailers seeking refined ethnic textiles, celebration wear, footwear, fragrances, and beauty essentials with confident sourcing and polished presentation.",
  market: "United Kingdom",
};

export const primaryNavigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const legalNavigation: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export const contactConfig: ContactConfig = {
  email: "Contact@smgfashion.shop",
  phone: "+44 7443977632",
  whatsapp: "+44 7443977632",
  addressLines: ["SMG Fashion Limited", "3 FIR TREE ROAD", "TW47HH"],
  businessHours: "Retail consultations arranged by appointment",
  serviceArea: "Serving retailers across the United Kingdom",
};

export const aboutHighlights: StoryCard[] = [
  {
    title: "Curated wholesale identity",
    description:
      "Each collection is selected to help retailers present a composed, elevated ethnic offer rather than a crowded commodity assortment.",
  },
  {
    title: "Traditional roots, modern retail discipline",
    description:
      "SMG Fashion balances heritage-driven design cues with dependable presentation, quality checks, and commercial readiness for the UK market.",
  },
  {
    title: "Multi-category sourcing under one house",
    description:
      "Textiles, occasionwear, footwear, fragrance, and beauty sit together under a single premium narrative for retail buyers.",
  },
];

export const trustPillars = [
  {
    title: "Quality Control",
    description:
      "Merchandise is reviewed for finish, feel, packaging, and consistency so retailers receive stock that supports a premium in-store impression.",
  },
  {
    title: "Global Sourcing",
    description:
      "SMG Fashion brings together heritage-inspired craft language and international sourcing relationships to create a composed wholesale assortment.",
  },
  {
    title: "Timely Delivery",
    description:
      "Seasonal planning, concise assortment building, and clear fulfilment coordination help retail partners prepare launches with confidence.",
  },
];

export const categories: Record<CategorySlug, Category> = {
  textiles: {
    slug: "textiles",
    name: "Wholesale of Textiles",
    shortName: "Textiles",
    href: "/categories/textiles",
    eyebrow: "Premium textile wholesale",
    heroTitle: "Ethnic fabrics shaped for refined retail presentation.",
    heroDescription:
      "From festive jacquards to fluid occasionwear bases, our textile assortment is composed for boutiques and independent retailers seeking heritage richness with contemporary retail polish.",
    pageDescription:
      "Explore premium ethnic fabrics, rich textures, and heritage-inspired textile sourcing for retailers in the United Kingdom.",
    visual: "textile",
    stats: [
      { label: "Fabric directions", value: "12 curated lines" },
      { label: "Retail focus", value: "Boutiques & occasionwear" },
      { label: "Merchandising tone", value: "Heritage-led" },
    ],
    introTitle: "A refined textile house for retailers with a sharper point of view",
    introBody:
      "SMG Fashion curates textiles that hold visual depth, elegant drape, and occasion-ready surface detail. The range is designed for retailers who want fabrics that feel elevated on the rail, in the window, and in the hand.",
    spotlightTitle: "Featured textile types",
    spotlightIntro:
      "Assortments are selected to support ethnic wear edits, wedding capsules, and premium ready-to-stitch or design-led buying strategies.",
    spotlights: [
      {
        title: "Embroidered occasion fabrics",
        description:
          "Statement bases with refined surface work, suited to bridal edits, occasion capsules, and elevated ethnic collections.",
      },
      {
        title: "Lustrous festive jacquards",
        description:
          "Structured and richly woven textiles that create depth, ceremonial presence, and stronger visual impact on display.",
      },
      {
        title: "Soft-flow drape fabrics",
        description:
          "Fluid fabrics with a softer hand feel, ideal for layered silhouettes, contemporary ethnic lines, and versatile boutique buying.",
      },
    ],
    collectionTitle: "Premium materials and ethnic richness",
    collectionIntro:
      "Every textile story is built around touch, tone, and merchandising clarity rather than volume alone.",
    collections: [
      {
        title: "Silk blends and satin sheens",
        description:
          "For retailers seeking festive radiance with a polished luxury handle.",
      },
      {
        title: "Textural cottons and artisanal weaves",
        description:
          "For more grounded, breathable collections with heritage character and year-round retail appeal.",
      },
      {
        title: "Statement borders and detailing",
        description:
          "For sharper visual differentiation across ethnic edits and boutique-led seasonal drops.",
      },
    ],
    catalogTitle: "Textile catalogue",
    catalogIntro:
      "A selective catalogue designed to support smarter wholesale buying rather than overwhelming product volume.",
    enquiryIntro:
      "Share the fabric direction, colour stories, and target retail positioning you are sourcing for, and the SMG Fashion team can prepare a more focused conversation.",
  },
  "clothing-footwear": {
    slug: "clothing-footwear",
    name: "Wholesale of Clothing and Footwear",
    shortName: "Clothing & Footwear",
    href: "/categories/clothing-footwear",
    eyebrow: "Celebrationwear wholesale",
    heroTitle: "Wedding-ready ethnic fashion with a composed wholesale finish.",
    heroDescription:
      "SMG Fashion presents occasionwear and ethnic footwear for women, men, and children, shaped for retailers who want traditional craftsmanship expressed through a premium, editorial retail lens.",
    pageDescription:
      "Explore premium ethnic clothing, weddingwear, occasion collections, and traditional footwear for UK retailers.",
    visual: "bridal",
    stats: [
      { label: "Audience segments", value: "Women, men & kids" },
      { label: "Retail mood", value: "Occasion-led" },
      { label: "Footwear focus", value: "Traditional profiles" },
    ],
    introTitle: "Celebration collections built for confident wholesale buying",
    introBody:
      "Our clothing and footwear category leans into ceremony, festivity, and presentation. Each grouping is arranged to help retailers create coordinated stories for weddings, gifting seasons, and milestone dressing.",
    spotlightTitle: "Segmented displays for modern ethnic retail",
    spotlightIntro:
      "Collections are composed so buyers can balance family occasion dressing, premium festive edits, and complementary footwear with clarity.",
    spotlights: [
      {
        title: "Women",
        description:
          "Elevated bridal and occasion-led silhouettes with rich detailing, colour depth, and premium finishing.",
      },
      {
        title: "Men",
        description:
          "Ceremonial and festive looks with tailored structure, refined trims, and a confident heritage attitude.",
      },
      {
        title: "Kids",
        description:
          "Special-occasion pieces with celebratory charm and practical merchandising appeal for coordinated family dressing.",
      },
    ],
    collectionTitle: "Collection highlights",
    collectionIntro:
      "The assortment is balanced between statement dressing and retail-ready commerciality.",
    collections: [
      {
        title: "Wedding and occasionwear",
        description:
          "Collections with ceremonial elegance, layered embellishment, and sharper premium positioning.",
      },
      {
        title: "Festive ready-to-merchandise edits",
        description:
          "Capsules that help retailers build high-value seasonal presentations with less assortment noise.",
      },
      {
        title: "Ethnic footwear",
        description:
          "Traditional footwear, including Solapur-inspired directions and embellished profiles, curated to complete occasion-led dressing stories.",
      },
    ],
    catalogTitle: "Fashion showcase",
    catalogIntro:
      "Use the search and filters to review occasionwear and footwear stories by segment, mood, or category.",
    enquiryIntro:
      "Outline the audience mix, event calendar, and price architecture you are buying for, and we can guide the discussion toward the right celebrationwear edit.",
  },
  "perfume-cosmetics": {
    slug: "perfume-cosmetics",
    name: "Wholesale of Perfume and Cosmetics",
    shortName: "Perfume & Cosmetics",
    href: "/categories/perfume-cosmetics",
    eyebrow: "Soft-luxury beauty wholesale",
    heroTitle: "Own-brand beauty stories with fragrance, care, and polish.",
    heroDescription:
      "A refined beauty category pairing Indian-style perfumes, moisturisers, and makeup essentials in a cleaner, softer luxury language tailored for premium retail shelves.",
    pageDescription:
      "Discover premium wholesale perfumes, moisturisers, and makeup essentials with a refined beauty presentation for UK retailers.",
    visual: "beauty",
    stats: [
      { label: "Beauty stories", value: "Fragrance, care & colour" },
      { label: "Shelf language", value: "Soft luxury" },
      { label: "Brand mood", value: "Clean and composed" },
    ],
    introTitle: "Beauty with cultural richness and a quieter premium tone",
    introBody:
      "The perfume and cosmetics offer is designed to feel elegant rather than loud. Products are positioned as a considered own-brand line for retailers seeking warmth, giftability, and shelf presence with restraint.",
    spotlightTitle: "Category pillars",
    spotlightIntro:
      "Each pillar supports a fuller own-brand beauty conversation while keeping the overall assortment focused.",
    spotlights: [
      {
        title: "Fragrance range",
        description:
          "Indian-inspired perfumes with warm, floral, amber, and oud signatures presented through a cleaner luxury format.",
      },
      {
        title: "Moisturiser and skincare essentials",
        description:
          "Daily care formulations designed around softness, comfort, and an elevated self-care shelf story.",
      },
      {
        title: "Makeup essentials",
        description:
          "Edit-led colour basics created to complement occasion dressing, gifting, and premium beauty merchandising.",
      },
    ],
    collectionTitle: "Premium beauty range",
    collectionIntro:
      "The category is arranged to support compact, polished retail launches across beauty and gifting environments.",
    collections: [
      {
        title: "Layered scent profiles",
        description:
          "Fragrance stories that move from bright florals to richer base notes without feeling overpowering on shelf.",
      },
      {
        title: "Soft-touch skincare",
        description:
          "Moisture-led essentials with calm packaging and a refined everyday ritual narrative.",
      },
      {
        title: "Elegant colour accents",
        description:
          "Makeup essentials chosen to support sophisticated beauty edits rather than mass-market clutter.",
      },
    ],
    catalogTitle: "Beauty showcase",
    catalogIntro:
      "Browse the range by fragrance, skincare, or cosmetics, and use the quick view for B2B buying context.",
    enquiryIntro:
      "Tell us about your beauty positioning, shelf environment, and preferred category mix to start a more tailored wholesale discussion.",
  },
};

export const categoryList = Object.values(categories);

export const products: Product[] = [
  {
    id: "textile-1",
    name: "Zari Heritage Brocade",
    category: "textiles",
    segment: "Occasion fabric",
    audience: "Bridal",
    badge: "Featured textile",
    description:
      "A lustrous brocade base with ceremonial depth, selected for premium festive sets, bridal edits, and boutique-led couture developments.",
    materials: ["Brocade weave", "Metallic detailing", "Occasion finish"],
    tags: ["Festive", "Window statement", "Premium fabric"],
    featured: true,
    visual: "textile",
    alt: "Editorial placeholder for ornate brocade textile wholesale collection",
  },
  {
    id: "textile-2",
    name: "Velvet Border Occasion Base",
    category: "textiles",
    segment: "Textural fabric",
    audience: "Boutique",
    badge: "Rich texture",
    description:
      "A plush occasion textile with bold border potential, ideal for winter capsules and higher-value ceremonial merchandising.",
    materials: ["Velvet texture", "Border-ready", "Premium handle"],
    tags: ["Winter edit", "Heritage", "Occasion"],
    featured: false,
    visual: "heritage",
    alt: "Premium placeholder for velvet ethnic textile sourcing",
  },
  {
    id: "textile-3",
    name: "Silk Blend Festive Satin",
    category: "textiles",
    segment: "Fluid drape",
    audience: "Occasion",
    badge: "Retail favourite",
    description:
      "A smooth satin-led fabric story with subtle sheen, designed for elegant ethnic silhouettes and polished boutique presentations.",
    materials: ["Silk blend", "Soft drape", "Gloss finish"],
    tags: ["Fluid", "Occasionwear", "Luxury touch"],
    featured: true,
    visual: "textile",
    alt: "Curated placeholder for silk blend festive fabric",
  },
  {
    id: "textile-4",
    name: "Artisanal Cotton Jacquard",
    category: "textiles",
    segment: "Everyday premium",
    audience: "Boutique",
    badge: "Core line",
    description:
      "A grounded, breathable jacquard with a more understated heritage profile for year-round premium ethnic retail.",
    materials: ["Cotton-rich", "Jacquard texture", "Breathable"],
    tags: ["Transitional", "Craft-led", "Everyday premium"],
    featured: false,
    visual: "heritage",
    alt: "Editorial placeholder for artisanal cotton jacquard textiles",
  },
  {
    id: "fashion-1",
    name: "Regal Bridal Lehenga Set",
    category: "clothing-footwear",
    segment: "Women",
    audience: "Women",
    badge: "Wedding focus",
    description:
      "A ceremonial statement set designed for premium wedding edits, with layered embellishment and elevated merchandising value.",
    materials: ["Occasion fabric", "Embellished detailing", "Premium finishing"],
    tags: ["Wedding", "Bridal", "Statement"],
    featured: true,
    visual: "bridal",
    alt: "Luxury placeholder for bridal ethnic wear wholesale",
  },
  {
    id: "fashion-2",
    name: "Tailored Sherwani Ensemble",
    category: "clothing-footwear",
    segment: "Men",
    audience: "Men",
    badge: "Ceremonial tailoring",
    description:
      "A structured men’s celebrationwear direction designed to give retailers a sharper premium ceremonial offer.",
    materials: ["Tailored silhouette", "Textural detailing", "Occasion finish"],
    tags: ["Ceremonial", "Menswear", "Festive"],
    featured: true,
    visual: "heritage",
    alt: "Editorial placeholder for men’s ethnic occasionwear wholesale",
  },
  {
    id: "fashion-3",
    name: "Family Occasion Kids Set",
    category: "clothing-footwear",
    segment: "Kids",
    audience: "Kids",
    badge: "Family celebration",
    description:
      "An occasion-led children’s set with colour richness and easy merchandising appeal for coordinated festive dressing.",
    materials: ["Lightweight structure", "Comfort lining", "Festive detailing"],
    tags: ["Kids", "Family edit", "Occasion"],
    featured: false,
    visual: "bridal",
    alt: "Premium placeholder for children’s ethnic occasionwear",
  },
  {
    id: "fashion-4",
    name: "Solapur-Inspired Jutti Edit",
    category: "clothing-footwear",
    segment: "Footwear",
    audience: "Footwear",
    badge: "Traditional footwear",
    description:
      "A footwear story grounded in traditional form, decorative richness, and premium add-on value for celebrationwear buying.",
    materials: ["Traditional profile", "Decorative upper", "Comfort sole"],
    tags: ["Footwear", "Traditional", "Add-on sale"],
    featured: true,
    visual: "footwear",
    alt: "Luxury placeholder for ethnic footwear wholesale collection",
  },
  {
    id: "beauty-1",
    name: "Amber Rose Attar Mist",
    category: "perfume-cosmetics",
    segment: "Fragrance",
    audience: "Fragrance",
    badge: "Signature scent",
    description:
      "A warm floral fragrance story with amber depth, gift-ready presentation, and a softer luxury beauty tone.",
    materials: ["Layered fragrance", "Giftable profile", "Own-brand direction"],
    tags: ["Perfume", "Amber", "Gift"],
    featured: true,
    visual: "perfume",
    alt: "Soft luxury placeholder for Indian-style perfume wholesale",
  },
  {
    id: "beauty-2",
    name: "Saffron Silk Moisture Cream",
    category: "perfume-cosmetics",
    segment: "Skincare",
    audience: "Skincare",
    badge: "Care essential",
    description:
      "A moisturiser-led hero designed for an elegant, daily beauty ritual with a clean shelf presence.",
    materials: ["Moisture care", "Soft-touch finish", "Premium presentation"],
    tags: ["Moisturiser", "Skincare", "Self-care"],
    featured: true,
    visual: "beauty",
    alt: "Premium placeholder for moisturiser and beauty essentials",
  },
  {
    id: "beauty-3",
    name: "Velvet Kajal & Liner Duo",
    category: "perfume-cosmetics",
    segment: "Makeup",
    audience: "Makeup",
    badge: "Editorial essential",
    description:
      "A cleanly presented colour essential created for occasion-led beauty merchandising and compact premium displays.",
    materials: ["Precision format", "Colour focus", "Shelf-ready packaging"],
    tags: ["Makeup", "Occasion beauty", "Retail staple"],
    featured: false,
    visual: "beauty",
    alt: "Elegant placeholder for premium makeup essentials",
  },
  {
    id: "beauty-4",
    name: "Oud Noir Perfume Oil",
    category: "perfume-cosmetics",
    segment: "Fragrance",
    audience: "Fragrance",
    badge: "Deep scent",
    description:
      "A richer fragrance profile with oud character, suited to premium gifting, statement shelves, and evening-led beauty edits.",
    materials: ["Perfume oil", "Rich base note", "Luxury aura"],
    tags: ["Oud", "Evening", "Premium gift"],
    featured: false,
    visual: "perfume",
    alt: "Refined placeholder for oud perfume oil collection",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Loomed richness",
    category: "textiles",
    caption:
      "Textiles presented with layered pattern language, soft metallic light, and boutique-ready depth.",
    alt: "Curated gallery placeholder showing premium ethnic textiles",
    visual: "textile",
  },
  {
    id: "gallery-2",
    title: "Ceremonial silhouettes",
    category: "clothing-footwear",
    caption:
      "Wedding-led fashion stories designed to feel editorial, regal, and commercially relevant.",
    alt: "Luxury gallery placeholder for wedding ethnic fashion",
    visual: "bridal",
  },
  {
    id: "gallery-3",
    title: "Footwear accents",
    category: "clothing-footwear",
    caption:
      "Traditional footwear framed as premium finishing pieces within occasion-led assortments.",
    alt: "Gallery placeholder for ethnic footwear close-up",
    visual: "footwear",
  },
  {
    id: "gallery-4",
    title: "Fragrance ritual",
    category: "perfume-cosmetics",
    caption:
      "Perfume stories with warm notes, composed packaging, and an elegant gifting sensibility.",
    alt: "Premium gallery placeholder for perfume wholesale display",
    visual: "perfume",
  },
  {
    id: "gallery-5",
    title: "Beauty softness",
    category: "perfume-cosmetics",
    caption:
      "Moisture and colour essentials arranged with a clean, soft-luxury shelf language.",
    alt: "Gallery placeholder for premium skincare and cosmetics",
    visual: "beauty",
  },
  {
    id: "gallery-6",
    title: "Heritage detailing",
    category: "textiles",
    caption:
      "Surface detail, border structure, and texture-led storytelling for retailers with a stronger visual point of view.",
    alt: "Editorial gallery placeholder for heritage textile detail",
    visual: "heritage",
  },
];

export const imagePrompts: ImagePrompt[] = [
  {
    title: "Luxury textile hero",
    useCase: "Homepage and textile category banner",
    prompt:
      "Premium editorial image of folded Indian ethnic fabrics with zari, jacquard, and silk textures, soft ivory and champagne backdrop, muted gold accents, refined luxury wholesale styling, warm natural light, high-end fashion campaign composition, no clutter, ultra-detailed.",
  },
  {
    title: "Weddingwear editorial",
    useCase: "Clothing and footwear hero",
    prompt:
      "Luxury South Asian weddingwear editorial scene for B2B wholesale brand, elegant lehenga and sherwani styling, refined boutique presentation, soft beige architectural backdrop, royal but tasteful mood, premium fashion photography, cinematic composition.",
  },
  {
    title: "Perfume and beauty shelf story",
    useCase: "Perfume and cosmetics page visual",
    prompt:
      "Premium Indian-inspired perfume and cosmetics still life, amber fragrance bottles, moisturiser jars, elegant beauty essentials, soft ivory and sand palette, muted gold details, high-end clean luxury styling, editorial lighting, no loud branding.",
  },
];

export const privacySections = [
  {
    title: "Information we receive",
    body: "When a retailer submits an enquiry, SMG Fashion may receive business contact details, category interests, and the commercial information voluntarily shared in the message field.",
  },
  {
    title: "How information is used",
    body: "Enquiry information is used to respond to wholesale questions, assess product relevance, prepare follow-up discussions, and improve future communication with retail partners.",
  },
  {
    title: "Data handling",
    body: "SMG Fashion aims to store business enquiry information responsibly and to limit access to team members or service providers directly involved in wholesale communication and site operations.",
  },
  {
    title: "Your choices",
    body: "Retail partners may request updates or removal of their submitted contact information by using the contact route provided on this website once business contact details are configured.",
  },
];

export const termsSections = [
  {
    title: "Wholesale focus",
    body: "This website is intended to introduce SMG Fashion as a business-to-business wholesale brand serving retailers in the United Kingdom. Product displays are indicative and do not form a direct consumer sales offer.",
  },
  {
    title: "Product presentation",
    body: "Descriptions, visuals, and category stories are provided to communicate range direction. Final availability, specifications, minimum quantities, and lead times should be confirmed directly during wholesale discussions.",
  },
  {
    title: "Enquiry submissions",
    body: "Submitting an enquiry does not create a supply agreement. Any commercial relationship with SMG Fashion remains subject to direct review, acceptance, and agreed wholesale terms.",
  },
  {
    title: "Site usage",
    body: "Visitors agree not to misuse the website, disrupt its operation, or reproduce brand copy, visuals, or commercial information in ways that conflict with SMG Fashion’s business interests.",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories[slug as CategorySlug];
}

export function getCategoryProducts(slug: CategorySlug) {
  return products.filter((product) => product.category === slug);
}
