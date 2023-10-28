import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import TerminalIcon from "@mui/icons-material/Terminal";

export const skills = [
  {
    category: "Front-End Development",
    icon: WebIcon,
    items: [
      "HTML5, CSS3",
      "JavaScript (ES6+)",
      "React, Next.js",
      "Responsive Web Design",
      "State Management (Redux, Mobx)",
    ],
  },
  {
    category: "Back-End Development",
    icon: TerminalIcon,
    items: [
      "Node.js",
      "Express.js",
      "Go",
      "RESTful API Design",
      "Authentication and Authorization",
    ],
  },
  {
    category: "Database Management",
    icon: StorageIcon,

    items: [
      "MongoDB",
      "Data Modeling",
      "Query Optimization",
      "Data Integration",
    ],
  },
  {
    category: "Others",
    icon: GitHubIcon,

    items: ["Git", "GitHub", "Vercel"],
  },
];
