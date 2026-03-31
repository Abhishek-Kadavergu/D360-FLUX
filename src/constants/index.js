import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import { links } from "../config";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "2",
    title: "AI Platform",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Analytics",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Source Code",
    url: links.sourceCode,
    onlyMobile: true,
    external: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Story Generator",
  "Test Case Builder",
  "Smart Estimator",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Sprint velocity",
    text: "Real-time tracking of team output and velocity across all active sprints.",
    date: "Current",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Capacity tracking",
    text: "Visualize team workload and availability to prevent burnout and optimize effort.",
    date: "Current",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Risk alerts",
    text: "AI-driven predictions that flag potential delays and blockers before they happen.",
    date: "Current",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Cross-project insights",
    text: "Unified view of health metrics spanning multiple engineering projects.",
    date: "Current",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const collabText = "No spreadsheets. No blind spots. Just clarity.";

export const collabContent = [
  {
    id: "0",
    title: "Billable vs non-billable tracking",
    text: collabText,
  },
  {
    id: "1",
    title: "Budget overruns flagged instantly",
  },
  {
    id: "2",
    title: "Real-time cost analysis",
  },
  {
    id: "3",
    title: "Team utilization insights",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Starter",
    description: "For small teams getting started",
    price: "0",
    features: [
      "Core project management and tracking",
      "Basic sprint planning and agile boards",
      "Community support and documentation",
    ],
    premium: false,
  },
  {
    id: "1",
    title: "Growth",
    description: "For scaling engineering teams",
    price: "49",
    features: [
      "AI-powered story and test generation",
      "Advanced analytics and custom dashboards",
      "Financial tracking and billing intelligence",
    ],
    premium: true,
  },
  {
    id: "2",
    title: "Enterprise",
    description: "For high-performance organizations",
    price: null,
    features: [
      "Dedicated AI engineering intelligence",
      "Custom voice-first workflows",
      "Priority enterprise support and SLA",
    ],
    premium: false,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Agile Without Friction",
    text: "Run sprints, retrospectives, and planning poker natively — no plugins, no hacks.",
    backgroundUrl: "/src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Financial Intelligence Built-In",
    text: "Track cost, effort, and margins in real-time — where engineering meets business.",
    backgroundUrl: "/src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "AI That Understands Your Project",
    text: "Not a chatbot. A system that knows your sprint, velocity, blockers, and risks.",
    backgroundUrl: "/src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Voice-First Workflows",
    text: "Create tasks, generate reports, and analyze sprints — just by speaking.",
    backgroundUrl: "/src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Real-Time Project Intelligence",
    text: "Dashboards that show what matters — instantly.",
    backgroundUrl: "/src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Unified Workspace",
    text: "Docs, tasks, QA, analytics — all in one system.",
    backgroundUrl: "/src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/_sanidhyy",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://telegram.org",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com",
  },
];
