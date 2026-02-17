export type ServiceKey =
  | "parking"
  | "masonry"
  | "concrete"
  | "historic"
  | "waterproofing"
  | "high-rise"

export type ServiceData = {
  slug: ServiceKey
  meta: { title: string; description: string }
  hero: {
    bgImage: string
    eyebrow?: string
    headingLine1: string
    headingLine2?: string
  }
  description: string
  why: {
    image: string
    lead: string
    points: string[]
  }
  gallery: string[]
}

export const SERVICES: Record<ServiceKey, ServiceData> = {
  parking: {
    slug: "parking",
    meta: {
      title: "Services - Parking Structure Restoration | Frank Capasso & Sons, Inc.",
      description:
        "Expert parking structure restoration and rehabilitation services in Connecticut. Over 50 years of experience in concrete restoration, resurfacing, and structural repair.",
    },
    hero: {
      bgImage: "/services/service1_hero.png",
      eyebrow: "Services",
      headingLine1: "Parking Structure",
      headingLine2: "Restoration",
    },
    description:
      "At Frank Capasso & Sons, we have earned a name in Parking Structure Rehabilitation as we are one of the only Restoration companies in Connecticut that have a successful project history with this unique work. With over 50 years of completing projects of all types, all sizes, and in a variety of conditions, we have become concrete structure experts and have seen it all. With the ability to get it right the first time while minimizing business disruption, Frank Capasso & Sons stands alone as Connecticut's Parking Structure Restoration experts.",
    why: {
      image: "/services/service1_card.png",
      lead:
        "We have over 50 years of experience in successful Parking Structure Restoration.",
      points: [
        "Concrete Restoration",
        "Concrete Resurfacing/Coatings",
        "Minimal Business Disruption",
        "Structural Repair",
      ],
    },
    gallery: ["/services/service1_gallery1.png", "/services/service1_gallery2.png", "/services/service1_gallery3.png"],
  },

  masonry: {
    slug: "masonry",
    meta: {
      title: "Services - Masonry Restoration | Frank Capasso & Sons, Inc.",
      description:
        "Professional masonry restoration in Connecticut including brick, stone, and mortar repair for commercial and historic structures.",
    },
    hero: {
      bgImage: "/services/service2_hero.jpg",
      eyebrow: "Services",
      headingLine1: "Masonry",
      headingLine2: "Restoration",
    },
    description: "Our Masonry Restoration experience goes back over 50 years. We’ve earned a name in Masonry Restoration in the state of Connecticut for both our time in the industry and our reputation for taking on a variety of challenging Masonry Restoration projects. From storefronts to historic buildings, large or small, we have seen it all and have the skills, the tools, and the people to take on the challenge.",
    why: {
      image: "/services/service2_card.jpg",
      lead: "We have over 50 years of experience in Masonry Restoration to help maximize the return on your investment.",
      points: ["Mortar Repair", "Brick Repair", "Block Repair", "Historic Structures"],
    },
    gallery: ["/services/service2_gallery1.jpg", "/services/service2_gallery2.png", "/services/service2_gallery3.jpg"],
  },

  concrete: {
    slug: "concrete",
    meta: {
      title: "Services - Concrete Restoration | Frank Capasso & Sons, Inc.",
      description:
        "Concrete repair and restoration services for commercial and institutional facilities across Connecticut.",
    },
    hero: {
      bgImage: "/services/service3_hero.png",
      eyebrow: "Services",
      headingLine1: "Concrete",
      headingLine2: "Restoration",
    },
    description: "You name it and we’ve worked on it. We’ve earned a name in the Concrete Restoration industry with over 50 years of completing projects of all types, all sizes, in a variety of conditions, and with serious demand when it comes to the time we need to be in and out and minimize business disruption. Our customers range from Higher Ed to Healthcare. From private care facilities to public parks and recreation centers. From the most demanding commercial shopping centers to highly specialized historic buildings",
    why: {
      image: "/services/service3_card.jpg",
      lead: "We have over 50 years of experience in restoring concrete to help maximize the return on your investment.",
      points: ["Classic Restoration", "Concrete Resurfacing", "Minimal Business Disruption", "Foundation Stabilization", "Structural Repair"],
    },
    gallery: ["/services/service3_gallery1.png", "/services/service3_gallery2.jpg", "/services/service3_gallery3.jpg", "/services/service3_gallery4.png"],
  },

  historic: {
    slug: "historic",
    meta: {
      title: "Services - Historic Restorations | Frank Capasso & Sons, Inc.",
      description:
        "Historic restoration and preservation services for aging masonry and concrete structures.",
    },
    hero: {
      bgImage: "/services/service4_hero.png",
      eyebrow: "Services",
      headingLine1: "Historic",
      headingLine2: "Restorations",
    },
    description: "Our Historic Restoration experience goes back over 50 years. We’ve earned a name in Historic Restorations in the state of Connecticut for both our time in the industry and reputation for taking on a variety of challenging Historic Restoration projects. From storefronts to historic buildings, large or small, we have seen it all and have the skills, the tools, and the people to take on the challenge.",
    why: {
      image: "/services/service4_card.png",
      lead: "We have over 50 years of experience in Historic Restorations to help maximize the return on your investment.",
      points: ["Mortar Repair", "Brick Repair", "Block Repair", "Historic Structures"],
    },
    gallery: ["/services/service4_gallery1.jpg", "/services/service4_gallery2.png", "/services/service4_gallery3.jpg", "/services/service4_gallery4.png"],
  },

  waterproofing: {
    slug: "waterproofing",
    meta: {
      title: "Services - Waterproofing | Frank Capasso & Sons, Inc.",
      description:
        "Waterproofing systems to protect structures from water intrusion, corrosion, and deterioration.",
    },
    hero: {
      bgImage: "/services/service5_hero.png",
      eyebrow: "Services",
      headingLine1: "Waterproofing",
    },
    description: "At Frank Capasso & Sons we are restoration experts. In the northeast you know that a lot of damage comes from moisture, and we get plenty of it (rain, snow). We’ve earned a name in the Restoration Construction industry here in Connecticut with over 50 years of completing waterproofing projects of all types, all sizes, in a variety of conditions. Waterproofing structures with various liquid-applied membranes, caulking, and architectural coatings is one of our specialties. From the most demanding commercial shopping centers to highly specialized historic buildings, we are Connecticut’s leader in Waterproofing",
    why: {
      image: "/services/service5_card.jpg",
      lead: "We have over 50 years of experience in Waterproofing maximizing the lifespan of your facility or structure.",
      points: ["Protective Coatings", "Expansion Joint Repairs", "Leak & Crack Repairs", "Deck Waterproofing", "Leak/Waterstop Repairs"],
    },
    gallery: ["/services/service5_gallery1.png",  "/services/service5_gallery2.png", "/services/service5_gallery3.jpg", "/services/service5_gallery4.png"],
  },

  "high-rise": {
    slug: "high-rise",
    meta: {
      title: "Services - High-Rise Restoration | Frank Capasso & Sons, Inc.",
      description:
        "High-rise facade and structural restoration services delivered safely and efficiently.",
    },
    hero: {
      bgImage: "/services/service6_hero.png",
      eyebrow: "Services",
      headingLine1: "High-Rise",
      headingLine2: "Restoration",
    },
    description: "At Frank Capasso & Sons we have an impressive portfolio of successfully completed High-Rise Restorations under our belt. We’ve earned a name in the industry with over 50 years of High-Rise Restoration work in Connecticut. Our customers and project types range across private and public work, from high-touch specialty to large-scale restoration.",
    why: {
      image: "/services/service6_card.png",
      lead: "We have over 50 years of experience in High-Rise Restoration Construction work in Connecticut such as:",
      points: ["Exterior Restoration", "Concrete Resurfacing", "Structural Repair"],
    },
    gallery: ["/services/service6_gallery1.png", "/services/service6_gallery2.jpg", "/services/service6_gallery3.png"],
  },
}