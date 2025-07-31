export interface ProjectSection {
  title: string
  content: string
  images?: string[]
  type?: "text" | "image-grid" | "full-width-image" | "two-column"
  imageFit?: "cover" | "contain" // Added new property
}

export interface Project {
  slug: string
  title: string
  description: string
  heroImage: string
  heroImageFit?: "cover" | "contain" // Added new property for hero image
  tags: string[]
  year: string
  client?: string
  duration?: string
  role?: string
  sections: ProjectSection[]
}

export const projects: Project[] = [
  {
    slug: "mobile-texting-assistant",
    title: "Mobile Texting Assistant",
    description: "AI-powered mobile texting assistant for enhanced communication",
    heroImage:
      "https://freight.cargo.site/t/original/i/a72a393b1741e467acfdbe2505aa4c8443bf085d9c2bde41b8ec053c23ccebbb/4c72c3eb-d31b-4949-9813-c8f5a6ce096e.png",
    heroImageFit: "contain", // Set heroImageFit to 'contain'
    tags: ["AI", "LLM", "Product"],
    year: "2024",
    sections: [
      {
        title: "Overview",
        content:
          "At Baidu USA, I led the vision and roadmap for AI texting assistant and content generation features in a mobile keyboard app (500+ global downloads) to grow AI features adoption and to transform mobile typing and content creation experience with AI.",
        type: "text",
      },
      {
        title: "Texting Assistant",
        content:
          "I developed product vision and a 1-year roadmap for AI content generation features based on user insights, by leading a 5-member team to conduct 40+ qualitative ethnographic interviews and co-design sessions, and conducting a survey with 1062 responses; the strategy focused on balancing user agency with proactive nudges that match user intention, and high-quality generations that fit users’ mental models.",
        images: [
          "https://freight.cargo.site/t/original/i/a2cd7ae45ad0c3da8ef6adb0f6e5c0b89757dc8ba905697a3622a44f16d0c119/ezgif-220dd9513cd06b.gif",
        ],
        type: "full-width-image",
        imageFit: "contain", // Set imageFit to 'contain' for this image
      },
      {
        title: "LLM Prompt Evaluations",
        content:
          "I led the team to iteratively improve LLM generation quality using evaluation tools built with Python and DSPy, making sure LLM generation is consistently high-quality, human-like, and natural. The resulting data (37% increase in daily usage) validated our assumption that users are more likely to adopt and send content that is natural and human-like while texting.",
        images: [
          "https://freight.cargo.site/t/original/i/4e4da62bd08985e02d91fdf2ee711d7f861ddb8f3888ba18aabafa1f1c795e9f/Screenshot-2025-07-31-010204.png",
        ],
        type: "full-width-image",
        imageFit: "contain", // Set imageFit to 'contain' for this image
      },
    ],
  },
  {
    slug: "ai-brand-kit",
    title: "AI Brand Kit",
    description: "AI-powered brand identity generation for small businesses",
    heroImage:
      "https://freight.cargo.site/t/original/i/f35c0a969b30ddc0498254254e117f555cd1e37300320ae21ba309ed9c634d9c/Group-1.png",
    heroImageFit: "contain", // Set heroImageFit to 'contain'
    tags: ["AI", "Product", "Design", "Prototyping"],
    year: "2023",
    sections: [
      {
        title: "Vision",
        content:
          "Small business owners lack the resources to hire professional designers for high-quality brand design. The latest LLM agent and AI image generation technology, combined with intuitive chat-based UX can solve this problem.",
        type: "text",
      },
      {
        title: "Brand Kit Prototype",
        content:
          "I developed the generative brand kit prototype to gather feedback regarding small business owner user needs. I worked closely with the founder to validate the prototype with 30+ potential customers. We validated users' need for comprehensive brand kit generation as our main product strategy, as well as their need for easy edit and visual control. The editing feature I built and tested increased user satisfaction by 25%.",
        images: [
          "https://freight.cargo.site/t/original/i/f35c0a969b30ddc0498254254e117f555cd1e37300320ae21ba309ed9c634d9c/Group-1.png",
          "https://freight.cargo.site/t/original/i/8ff14bd4c2c9ad93289bc4643278a3b1ab87998b48374875aff8de87a6a049d3/Group-3.png",
          "https://freight.cargo.site/t/original/i/25e5889cab3753655a9db2fb7ac23354f98b54c3917285e0e5b3351deba57929/Group-5.png",
        ],
        type: "image-grid",
        imageFit: "contain", // Apply object-contain to images in this section
      },
      {
        title: "Prompt Assistant Prototype",
        content:
          "I also built this prompting assistant prototype to explore innovative UX to make working with AI easier for customers.",
        images: [
          "https://freight.cargo.site/t/original/i/0fa6b2cbd883ecb9b6ae730042b6d38c6c1d6d67d902447249998ff0589e51a4/Group-8.png",
          "https://freight.cargo.site/t/original/i/ff050e4919f34ef6cb854e724cf516c8cc27efb9e2e2dfc74e40db0b7c344a1b/Group-9.png",
        ],
        type: "image-grid",
        imageFit: "contain", // Apply object-contain to images in this section
      },
    ],
  },
  {
    slug: "co-creative-canvas",
    title: "Co-Creative Canvas",
    description: "AI-augmented creative tool for artists and designers",
    heroImage:
      "https://freight.cargo.site/t/original/i/4d548a8b9ae1b417152e2a34c3eecf4ee0369bd29f0baf5b0cbca84e1a92ed3d/ezgif-183a6a02c66ddc.gif",
    tags: ["AI", "Product", "Design", "Prototyping"],
    year: "2025",
    sections: [
      {
        title: "Vision",
        content:
          "AI image generation can creatively augment, rather than replace human artists, through new UX paradigms that don't overly rely on prompt boxes.",
        type: "text",
      },
      {
        title: "Overview",
        content:
          "The Co-Creative Canvas is an AI creativity augmentation tool. It is a probabilistic canvas that allows artist control, creative flow state, and craft, taps into emerging real-time AI image generation capabilities, and breaks away from conventional prompt-based image generation UI. It helps artists enjoy and explore collaboration with AI without having to sacrifice the drawing process they enjoy.",
        images: [
          "https://freight.cargo.site/t/original/i/c398c1afeb43f13e79427722b8bebd5ded276ce27c775bbb78ec9169df1c6761/ezgif-18515558368dcc.gif",
        ],
        type: "full-width-image",
      },
      {
        title: "Vary Mode",
        content:
          "This feature allows artists access to the possibility space around their current drawing, offered through the diffusion model's latent space, accessed via a compass-like UI. Artists can pin any ideas they like as references, and modify their drawing. The canvas is no longer blank or static.",
        images: [
          "https://freight.cargo.site/t/original/i/35c4f82cad085b0428742e159651b12436fbcf91c7f027787dfb724c03d67435/ezgif-85324b51859617.gif",
        ],
        type: "full-width-image",
      },
      {
        title: "Mix Mode",
        content:
          "Users can drag any subject in their drawing onto another subject and mix the two. The result can be rendered directly onto the canvas, or used as a reference.",
        images: [
          "https://freight.cargo.site/t/original/i/de4af7c9fc4bac036247f40067bd5ae3c804094aeb8dd9903c38327314f1e99d/ezgif-3d9d3fcfeb075a.gif",
        ],
        type: "full-width-image",
      },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
