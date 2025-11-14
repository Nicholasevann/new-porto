import { Smak, Unikom } from "../assets/logo";
import mobile from "../assets/mobile-projects";
import website from "../assets/website-projects";
import shopify from "../assets/shopify-projects";
import { getDriveImages } from "./getDriveImages";
import { video } from "framer-motion/client";

const API_KEY = "AIzaSyALn1intEk8tYJgJQG5GVXcmQzWe2aMNG4";
export const webProject = [
  {
    id: 1,
    title: "K Club Partner - Investment Platform",
    subtitle: "Next.js & Investment Platform",
    description:
      "Full-featured investment property platform built with Next.js, featuring secure authentication, real-time property listings, investment portfolio management, and encrypted transaction processing. Implements advanced search filters, detailed property analytics, and investor dashboard with comprehensive reporting capabilities.",
    image: website.kclub,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/18FxTca_YaZh5ZOjhNl3w-Gm8vwal6uq6?usp=drive_link",
    tags: ["Next.js", "Web Development", "Property Investment"],
  },
  {
    id: 11,
    title: "Bali Smart Investment - Investment & Rent Platform",
    subtitle: "Flask & Python",
    description:
      "Comprehensive dual-purpose platform combining investment opportunities with rental property management. Features include automated rental yield calculations, tenant screening workflows, secure payment gateway integration, investment tracking dashboards, and detailed financial reporting for both property investors and landlords.",
    image: website.bsi,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/19rrEqEYSKnqV--EElWO8tDDjMRW82bZ7?usp=drive_link",
    tags: ["Next JS", "Investment", "Property Rental"],
  },
  {
    id: 3,
    title: "Natalie - Online Education Platform",
    subtitle: "React.js & Online Education",
    description:
      "Robust e-learning platform built with React.js featuring interactive course creation tools, video streaming capabilities, progress tracking, quiz and assignment modules, integrated payment processing, certificate generation, and comprehensive admin dashboard for course management and student analytics.",
    image: website.natalie,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1sqr0tzwLkei1xxef3U_pK_1m9t_E1Xau?usp=drive_link",
    tags: ["React.js", "Online Education", "Course Management"],
  },
  {
    id: 4,
    title: "Massai - Restaurant Reservation System",
    subtitle: "Next.js & Reservations",
    description:
      "Elegant restaurant and nightclub reservation platform featuring real-time table availability, interactive seating charts, automated booking confirmations via email/SMS, special event management, guest list coordination, and stunning visual landing page with immersive photo galleries and dynamic menu displays.",
    image: website.massai,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1ITE5PSubFniqw-VE7OrGmHO5SxqWNyQ2?usp=drive_link",
    tags: ["Next.js", "Reservations", "User Engagement"],
  },
  {
    id: 12,
    title: "Total Energy - Data Management System",
    subtitle: "Flask & Python",
    description:
      "Advanced energy consumption monitoring system built with Vue.js and Nuxt, providing real-time energy usage tracking, historical data analysis, automated anomaly detection, consumption forecasting, cost optimization recommendations, and customizable reporting dashboards with export capabilities for stakeholder presentations.",
    image: website.total,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1uXDs_JnTzznKlgZNA1QXwROIA2uwZ6-t?usp=drive_link",
    tags: ["Vue JS", "Nuxt", "Data Management"],
  },
  {
    id: 9,
    title: "Banjarnegara Health Department - Health Examination System",
    subtitle: "React.js & Health Management",
    description:
      "Comprehensive health examination management system featuring customizable health screening forms, patient record management, appointment scheduling, digital health report generation, multi-parameter health tracking, statistical analysis tools, and detailed epidemiological reporting for public health monitoring and intervention planning.",
    image: website.eraport,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1pOevEhJ4jOvC1ZGZNe8hG_jrWBZ_fpPj?usp=drive_link",
    tags: ["React.js", "Health Management", "Reporting"],
  },
  {
    id: 2,
    title: "B One Consulting - Company Website",
    subtitle: "Next.js & Company Website",
    description:
      "Modern corporate website built with Next.js featuring responsive design across all devices, SEO optimization, dynamic content management, service showcase sections, client testimonials, integrated contact forms, blog functionality, and smooth animations delivering an exceptional user experience that effectively communicates the company's expertise and value proposition.",
    image: website.bone,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1JYC1xaDcFQLDTbzil0q285jbFqAcshT1?usp=drive_link",
    tags: ["Next.js", "Landing Page", "Responsive Design"],
  },
  {
    id: 5,
    title: "The Plug - Brand Website",
    subtitle: "React.js & Brand Website",
    description:
      "Contemporary brand showcase website crafted with React.js, featuring cutting-edge UI/UX design, smooth scroll animations, interactive product displays, brand storytelling sections, social media integration, newsletter subscription, and optimized performance delivering lightning-fast load times and seamless navigation throughout the user journey.",
    image: website.theplug,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1fk_UY0OggvAtVxZ0w2tAaNV4cuXkIWFs?usp=drive_link",
    tags: ["React.js", "Landing Page", "UI/UX"],
  },
  {
    id: 6,
    title: "North Sumatra Health Center - Health Management System",
    subtitle: "Vue.js & Health Management",
    description:
      "Enterprise-level health center management application built with Vue.js and Nuxt, featuring patient registration workflows, appointment scheduling, medical record digitization, prescription management, laboratory result tracking, billing and insurance integration, multi-facility reporting, and comprehensive analytics for operational efficiency and patient care quality monitoring.",
    image: website.epuskesmas,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1nNfezP3ODiEdR9vXhAwPzx2Itqfe36iT?usp=drive_link",
    tags: ["Vue.js", "Nuxt", "Health Management"],
  },
  {
    id: 7,
    title: "ERP Hotel System - Accounting Management",
    subtitle: "Next.js & Financial Reporting",
    description:
      "Sophisticated hotel ERP accounting module built with Next.js, featuring double-entry bookkeeping, automated journal entries, general ledger management, accounts payable/receivable tracking, cash flow monitoring, budget planning tools, financial statement generation, audit trail capabilities, and multi-property consolidation reporting for hotel chain management.",
    image: website.accounting,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1K4xJXmH9M70A5JavisjCcfXY74jV4gTy?usp=drive_link",
    tags: ["Next.js", "Financial Reporting", "ERP System"],
  },
  {
    id: 8,
    title: "Plural - Company Website",
    subtitle: "Next.js & Custom Design",
    description:
      "Bespoke corporate website developed through close client collaboration, featuring unique custom design elements, tailored functionality specific to business needs, interactive service presentations, dynamic portfolio showcasing, integrated CRM capabilities, and personalized user experiences that perfectly align with the client's brand identity and business objectives.",
    image: website.plural,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1zyluqJBpET37wIPk2UrIojvjCwwkiQac?usp=drive_link",
    tags: ["Next.js", "Custom Design", "Client Collaboration"],
  },
  {
    id: 10,
    title: "Toll Road Simulation - Interactive Application",
    subtitle: "Flask & Python",
    description:
      "Advanced toll road simulation application built with Flask and Python, featuring interactive map visualization with real-time vehicle movement tracking, traffic flow analysis, toll collection simulation, route optimization algorithms, congestion prediction modeling, and comprehensive data analytics for transportation planning and infrastructure optimization studies.",
    image: website.tollroad,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1AvRJ28KHWAhjFv2jcZu19EaeAnJ4Zdag?usp=drive_link",
    tags: ["Flask", "Python", "Simulation"],
  },
];

export const mobileProject = [
  {
    id: 11,
    title: "The Plug Mobile App - Deals App",
    subtitle: "Flutter & Cross-platform",
    description:
      "Feature-rich cross-platform mobile application built with Flutter, offering seamless deals discovery, push notifications for new offers, location-based deal recommendations, favorites management, in-app purchases, social sharing capabilities, and intuitive user interface with smooth animations ensuring consistent experience across iOS and Android platforms.",
    image: mobile.theplug,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/12mC8r1FKj-mDfmoE2JMc3VF_KjXMIfDa?usp=drive_link",
    tags: ["Flutter", "Cross-platform", "Mobile Development"],
  },
  {
    id: 14,
    title: "Raindo Ruscargo - Logistics App",
    subtitle: "Flutter & Maintenance",
    description:
      "Comprehensive logistics application maintenance project involving critical bug fixes, performance optimization, crash resolution, API integration improvements, user experience enhancements, and feature updates. Collaborated closely with client stakeholders to prioritize issues, implement solutions, and ensure stable production deployment with minimal downtime.",
    image: mobile.ruscargo,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1MWvxeAwdpTXjDCmklrv570fhP-3o2CZ1?usp=drive_link",
    tags: ["Flutter", "Bug Fixing", "App Maintenance"],
  },
  {
    id: 16,
    title: "Xperience - Employee Management App",
    subtitle: "Flutter & Management",
    description:
      "Modern employee management mobile application featuring attendance tracking with GPS verification, leave request workflows, performance evaluation modules, task assignment and tracking, employee directory, internal communication tools, payroll integration, and comprehensive reporting. Enhanced data synchronization architecture and resolved critical bugs to improve reliability.",
    image: mobile.bone,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1Y3vh2e-gUJRadeP-LKrS6xuinkm3tedc?usp=drive_link",
    tags: ["Flutter", "Management", "Mobile Development"],
  },
  {
    id: 12,
    title: "Employee Cooperative Toyota - Cooperative App",
    subtitle: "Flutter & Enterprise",
    description:
      "Enterprise-grade cooperative management application for Toyota employees, featuring loan application and approval workflows, savings management, member contribution tracking, dividend calculations, financial statement access, and transaction history. Maintained and enhanced existing features while integrating new payment gateway and coordinating with third-party service providers for seamless operations.",
    image: mobile.kopkar,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1yfizrKuKTvYNg0tY5rgWRAIE7VJLQu0b?usp=drive_link",
    tags: ["Flutter", "App Maintenance", "Enterprise App"],
  },
  {
    id: 13,
    title: "Employee Shuttle Service - Shuttle App",
    subtitle: "Flutter & Subscription",
    description:
      "Subscription-based employee shuttle service application featuring real-time shuttle tracking with GPS, route planning and optimization, subscription plan management, automated payment processing, ride history and receipts, schedule notifications, capacity management, and seat reservation system. Led strategic planning and system architecture development from initial concept through production deployment.",
    image: mobile.tomas,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1xxN1yh6MtAueTKRnjuy2QVPUz17p0HeD?usp=drive_link",
    tags: ["Flutter", "Project Management", "Subscription Service"],
  },
  {
    id: 15,
    title: "Ideabox - Idea Management App",
    subtitle: "React Native & Idea Management",
    description:
      "Innovative employee idea collection and management platform built with React Native, enabling staff to submit creative suggestions, vote on proposals, track idea implementation status, receive feedback from management, view trending ideas, and participate in innovation challenges. Improved data synchronization system and resolved critical bugs to enhance user engagement and idea submission reliability.",
    image: mobile.telkom,
    borderColor: "#fff",
    url: "https://drive.google.com/drive/folders/1g83SM6yEKS91J1G7ue1bSdz3ihDfM7Py?usp=drive_link",
    tags: ["React Native", "Idea Management", "Mobile Development"],
  },
];
export const shopifyProject = [
  {
    id: 21,
    title: "Eczewear - Shopify Website",
    subtitle: "Shopify & E-commerce",
    description:
      "Custom Shopify store for Eczewear, featuring product catalog, secure checkout, responsive design, and integrated payment gateways. Includes inventory management, promotional banners, and customer review system for enhanced shopping experience.",
    image: shopify.eczewear, // Use the correct image from your assets
    video: "/eczewear.mp4",
    borderColor: "#fff",
    tags: ["Shopify", "E-commerce", "Web Development"],
  },
  {
    id: 22,
    title: "Bubbaduck - Shopify Website",
    subtitle: "Shopify & Brand Store",
    description:
      "Shopify-powered online store for Bubbaduck, offering branded merchandise, seamless navigation, mobile optimization, and marketing integrations. Features include product filtering, wishlist, and analytics dashboard for store performance tracking.",
    image: shopify.bubbaduck, // Use the correct image from your assets
    video: "/bubbaduck.mp4",
    borderColor: "#fff",
    tags: ["Shopify", "Brand Store", "Online Shop"],
  },
];

export const listProject = [
  { id: "website", title: "Web Development" },
  { id: "mobile", title: "Mobile Development" },
  { id: "shopify", title: "Shopify Development" },
];

function extractFolderId(url) {
  const match = url.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
}

// Add folderId and images to all projects
webProject.forEach((project) => {
  project.folderId = extractFolderId(project.url);
  project.images = [];
});

mobileProject.forEach((project) => {
  project.folderId = extractFolderId(project.url);
  project.images = [];
});

// async function fillProjectImages(projects) {
//   for (const project of projects) {
//     if (project.folderId) {
//       project.images = await getDriveImages(project.folderId, API_KEY);
//     }
//   }
// }

// await fillProjectImages(webProject);
// await fillProjectImages(mobileProject);

const experiences = [
  {
    title: "Fullstack Website & Mobile Developer",
    company_name: "PT B One Consulting",
    iconBg: "#383E56",
    date: "September 2024 - Current",
    location: "Bali",
    points: [
      "Built full‑stack web applications using Next.js, Vue.js, Nest.Js and Express.js with TypeScript.",
      "Developed cross‑platform mobile apps using Flutter and React Native.",
      "Designed and implemented RESTful APIs and microservices with Node.js/Express and Flask.",
      "Integrated third‑party services (payments, analytics, auth) and optimized CI/CD pipelines.",
      "Improved app performance, accessibility and test coverage; collaborated closely with designers and product owners.",
    ],
  },
  {
    title: "Senior Frontend & Mobile Developer",
    company_name: "PT B One Consulting",
    iconBg: "#383E56",
    date: "September 2024 - September 2025",
    location: "Bali",
    points: [
      "Lead front-end and mobile development projects, ensuring high-quality deliverables.",
      "Develop and optimize web and mobile applications according to client specifications.",
      "Collaborate with cross-functional teams to troubleshoot and solve complex technical challenges.",
      "Manage source code repositories and version control using Git.",
      "Oversee the deployment of mobile applications to the Google Play Store and Apple App Store.",
    ],
  },
  {
    title: "Front-End & Mobile Developer",
    company_name: "PT Supernova Palapa Indonesia",
    iconBg: "#383E56",
    date: "April 2023 – August 2024",
    location: "Bandung",
    points: [
      "Designed and implemented scalable web and mobile applications for company projects.",
      "Worked closely with the development team to resolve technical issues efficiently.",
      "Managed project repositories using Git and ensured code quality through reviews.",
      "Handled the end-to-end mobile app deployment process for Play Store and App Store.",
      "Delivered applications in line with client requirements and business goals.",
    ],
  },
  {
    title: "Front-End Web Developer",
    company_name: "PT Plural",
    iconBg: "#383E56",
    date: "July 2023 – October 2023",
    location: "Bali",
    points: [
      "Designed and developed the company's landing page, ensuring responsive and modern UI/UX.",
      "Implemented and optimized website functionalities for better performance.",
      "Deployed the application to a live production environment, ensuring public accessibility.",
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "PT Raindo",
    iconBg: "#383E56",
    date: "January 2023 – February 2023",
    location: "Jakarta",
    points: [
      "Debugged and resolved critical issues in existing mobile applications.",
      "Enhanced app performance and stability through code optimizations.",
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "PT Layanan Cerdas Indonesia",
    iconBg: "#383E56",
    date: "July 2022 – March 2023",
    location: "Bandung",
    points: [
      "Developed and maintained mobile applications, improving user experience and performance.",
      "Engaged in team discussions to identify and solve development roadblocks.",
      "Conducted application testing and provided direct support to clients.",
      "Managed version control and application deployments to Play Store and App Store.",
    ],
  },
  {
    title: "Mobile Developer Intern",
    company_name: "PT Telkom Digital Amoeba",
    iconBg: "#383E56",
    date: "September 2021 – May 2022",
    location: "Bandung",
    points: [
      "Developed an internal application to collect and manage employee ideas.",
      "Documented project workflows and transferred knowledge to incoming interns for project continuity.",
    ],
  },
];

const educations = [
  {
    degree: "Bachelor of Computer Engineering",
    branch: "Information Technology",
    marks: "GPA : 3.42 / 4",
    name: "Indonesian Computer University Bandung Indonesia",
    year: "(2018 - 2022)",
    image: Unikom,
  },
  {
    degree: "High School Diploma",
    branch: "Science",
    marks: "Accumulations : 85",
    name: "SMAK Kolese Santo Yusup Malang Indonesia",
    year: "(2015 - 2018)",
    image: Smak,
  },
];

export { experiences, educations };
