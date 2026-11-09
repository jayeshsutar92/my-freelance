import { Project, ServiceItem, Testimonial, ProcessStep } from '../types';

export const PERSONAL_INFO = {
  name: 'Jayesh Sutar',
  role: 'Freelance Web Developer',
  email: 'jayeshsutar76@gmail.com',
  phone: '+91-7387885582',
  phoneFormatted: '+91-7387885582',
  location: 'Mumbai and Remote',
  githubUrl: 'https://github.com/jayeshsutar92',
  githubHandle: 'github.com/jayeshsutar92',
  heroEyebrowLeft: 'AVAILABLE FOR PROJECTS • DIGITAL EXPERIENCES',
  heroEyebrowRight: 'DEV + CODE / HUMAN + IMPACT',
  heroHeadline: 'I build digital experiences that are intuitive, robust and impactful.',
  heroBio:
    "I'm Jayesh Sutar, a freelance web developer crafting high-performance, responsive websites and modern web applications that drive real results and elevate brands.",
  footerBio:
    'Crafting tailored web applications and bespoke user experiences that balance aesthetics and performance.',
};

export const PROJECTS: Project[] = [
  {
    id: 'omkar-arts',
    number: '01',
    title: 'OMKAR ARTS',
    tagline: 'Artisanal woodworking & bespoke craftsmanship.',
    category: 'Web Design, UI/UX & React',
    description:
      'A bespoke carpentry business landing page built to spotlight artisanal woodworking, custom architectural fixtures, and tailored furniture commissions with elegant fluid animations.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://omkar-arts.vercel.app/',
    previewType: 'omkar',
    accentColor: '#B45309',
  },
  {
    id: 'flowtime',
    number: '02',
    title: 'FLOWTIME',
    tagline: 'Smart flow states & deep work focus tracker.',
    category: 'Fullstack Platform & Productivity',
    description:
      'A full stack productivity application designed to track and improve user focus, eliminate context switching, and visualize cognitive rhythm through real-time sessions and telemetry.',
    techStack: ['NextJS', 'Django', 'PostgreSQL', 'Docker', 'Redis'],
    liveUrl: 'https://flow-time-jade.vercel.app/',
    previewType: 'flowtime',
    accentColor: '#10B981',
  },
  {
    id: 'aerovolt',
    number: '03',
    title: 'AEROVOLT',
    tagline: 'Wholesale wind generation cost prediction tool.',
    category: 'Clean Energy & ML Forecasting',
    description:
      'A wholesale market wind generation cost prediction tool analyzing historical meteorological feeds and grid telemetry from the Elexon dataset to model accurate power pricing in real time.',
    techStack: ['FastAPI', 'React', 'Elexon dataset', 'Docker'],
    liveUrl: 'https://aerovolt-alpha.vercel.app/',
    previewType: 'aerovolt',
    accentColor: '#0EA5E9',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    iconName: 'web',
    title: 'WEB DESIGN',
    description: 'Beautiful, responsive websites crafted with purpose and precision.',
  },
  {
    id: 'uiux-design',
    iconName: 'uiux',
    title: 'UI/UX DESIGN',
    description: 'Intuitive interfaces that create seamless experiences for users.',
  },
  {
    id: 'brand-design',
    iconName: 'brand',
    title: 'BRAND DESIGN',
    description: "Strong visual identities that communicate your brand's true value.",
  },
  {
    id: 'design-systems',
    iconName: 'system',
    title: 'DESIGN SYSTEMS',
    description: 'Scalable systems that ensure consistency and efficiency across platforms.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Riddhi Mishra',
    role: 'Product Lead',
    company: 'Studio Aethel',
    quote:
      'Jayesh translated our complex design specifications into an exceptionally fast, responsive web experience. His precision with micro-interactions, clean architecture, and prompt delivery made our product launch effortless and widely acclaimed.',
    rating: 5,
  },
  {
    id: 't-2',
    author: 'Rahul Desai',
    role: 'Co-Founder & CTO',
    company: 'VentureSprint Technologies',
    quote:
      "Working with Jayesh was a breath of fresh air. He doesn't just write clean code; he genuinely understands product intuition, user psychology, and performance optimization. Our conversion metrics showed an immediate uptick right after release.",
    rating: 5,
  },
  {
    id: 't-3',
    author: 'Arjun Mehta',
    role: 'Managing Director',
    company: 'Nexus Creative Labs',
    quote:
      'Uncompromising quality and seamless execution. Jayesh took complete ownership of the frontend architecture and delivered a sleek, scalable application that our clients constantly praise.',
    rating: 5,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'I learn about your goals, audience, and technical challenges.',
    iconName: 'search',
  },
  {
    step: '02',
    title: 'PLAN & DESIGN',
    description: 'I create concepts and architecture focused on clarity and impact.',
    iconName: 'plan',
  },
  {
    step: '03',
    title: 'DEVELOP',
    description: 'I bring designs to life with clean, modular, and efficient code.',
    iconName: 'code',
  },
  {
    step: '04',
    title: 'LAUNCH',
    description: 'I test, optimize, and launch digital experiences that perform.',
    iconName: 'launch',
  },
];
