import {
  Avatar2,
  Avatar3,
  Chat,
  Grid,
  Smiley,
  Suitcase,
  Contact1,
  Contact2,
  Contact3,
  Service1,
  Service2,
  Service3,
  Memoji1,
  Portfolio1,
  Portfolio2,
  Home,
  CreateBudget,
  CreateExpense,
  PowerPlatform,
  PowerApps,
  PowerAutomate,
} from '../assets/images';
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaFigma,
  FaPenFancy,
  FaBriefcase,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';

export const navLinks = [
  { id: 1, label: 'About', url: '/about' },
  { id: 2, label: 'Portfolio', url: '/portfolio' },
  { id: 1, label: 'Services', url: '/services' },
  { id: 1, label: 'Contact', url: '/contact' },
];

export const pageinfo = {
  about: {
    title: 'Inside My World – The Story Behind Work',
    desc: 'Get a glimpse into my journey and the inspiration behind my work. Discover what drives me and how my experiences shape my creative vision.',
    label: 'About',
    color: '#ffc427',
    icon1: Memoji1,
    icon2: Avatar2,
    icon3: Avatar3,
  },
  contact: {
    title: 'Lets Connect and Collaborate',
    desc: 'Reach out to discuss your project or ideas. I’m here to provide support and turn your vision into reality.',
    label: 'Contact',
    color: '#20d7ff',
    icon1: Contact1,
    icon2: Contact2,
    icon3: Contact3,
  },
  services: {
    title: 'Explore My Range of Specialized Services',
    desc: 'Explore services crafted to bring your vision to life. From innovative solutions to expert support, I offer everything needed for exceptional results.',
    label: 'Services',
    color: '#2ef171',
    icon1: Service1,
    icon2: Service2,
    icon3: Service3,
  },
};

export const homeCards = [
  {
    id: 1,
    url: '/about',
    label: 'About',
    title: 'A Peek into My Creative Journey',
    icon: Smiley,
    color: '#ffc427',
  },
  {
    id: 2,
    url: '/portfolio',
    label: 'Portfolio',
    title: 'Top Work and Creative Projects',
    icon: Suitcase,
    color: '#c06fff',
  },
  {
    id: 3,
    url: '/services',
    label: 'Services',
    title: 'Solutions to Meet Your Goals',
    icon: Grid,
    color: '#2ef171',
  },
  {
    id: 4,
    url: '/contact',
    label: 'Contact',
    title: 'Lets Start a Conversation',
    icon: Chat,
    color: '#20d7ff',
  },
];

export const servicesLabel = [
  {
    id: 1,
    label: 'Front-End Development',
    color: '#2ef171',
  },
  {
    id: 1,
    label: 'UI/UX Design',
    color: '#2ef171',
  },
  {
    id: 1,
    label: 'Animation & Interactivity',
    color: '#2ef171',
  },
  {
    id: 1,
    label: 'Responsive Design',
    color: '#2ef171',
  },
];

export const aboutSkills = [
  {
    id: 1,
    label: 'Front-End Development',
    color: '#ffc427',
  },
  {
    id: 1,
    label: 'Low-Code/No-Code',
    color: '#ffc427',
  },
  {
    id: 1,
    label: 'Microsoft Power Platform',
    color: '#ffc427',
  },
  {
    id: 1,
    label: 'UI/UX Design',
    color: '#ffc427',
  },
  {
    id: 1,
    label: 'Power Apps',
    color: '#ffc427',
  },
  {
    id: 1,
    label: 'Animation & Interactivity',
    color: '#ffc427',
  },
  {
    id: 1,
    label: 'Power Automate',
    color: '#ffc427',
  },
  {
    id: 1,
    label: 'Responsive Design',
    color: '#ffc427',
  },
  {
    id: 1,
    label: 'Mobile Development',
    color: '#ffc427',
  },
  {
    id: 1,
    label: 'Data Visualization',
    color: '#ffc427',
  },
];

export const contactFollow = [
  {
    id: 1,
    url: 'https://linkedin.com/in/vishal2799',
    icon: FaLinkedin,
  },
  {
    id: 2,
    url: 'https://github.com/vishal2799',
    icon: FaGithub,
  },
  {
    id: 3,
    url: 'https://instagram.com/disisvishal',
    icon: FaInstagram,
  },
  {
    id: 4,
    url: 'https://x.com/vishal_2799',
    icon: FaXTwitter,
  },
];

export const servicesSkills = [
  {
    id: 1,
    url: '/',
    icon: FaHtml5,
    label: 'HTML5',
    svg: false,
  },
  {
    id: 2,
    url: '/',
    icon: FaCss3Alt,
    label: 'CSS3',
    svg: false,
  },
  {
    id: 3,
    url: '/',
    icon: FaReact,
    label: 'React',
    svg: false,
  },
  {
    id: 4,
    url: '/',
    icon: PowerPlatform,
    label: 'Power Platform',
    svg: true,
  },
  {
    id: 5,
    url: '/',
    icon: PowerApps,
    label: 'Power Apps',
    svg: true,
  },
  {
    id: 6,
    url: '/',
    icon: PowerAutomate,
    label: 'Power Automate',
    svg: true,
  },
  {
    id: 7,
    url: '/',
    icon: IoLogoJavascript,
    label: 'JavaScript',
    svg: false,
  },
  {
    id: 7,
    url: '/',
    icon: FaFigma,
    label: 'Figma',
    svg: false,
  },
];

export const portfolioItems = [
  {
    id: 1,
    image: Home,
    title: 'Budget Tracker',
    desc: 'Power Platform',
    images: [Home, CreateBudget, CreateExpense],
  },
  {
    id: 1,
    image: Portfolio1,
    title: 'Squash',
    desc: 'Website',
    images: [Home, CreateBudget, CreateExpense],
  },
  {
    id: 1,
    image: Portfolio2,
    title: 'Squash',
    desc: 'Website',
    images: [Home, CreateBudget, CreateExpense],
  },
];

export const servicesList = [
  {
    title: 'Frontend Development',
    description:
      'I design and develop responsive websites and web applications using HTML, CSS, JavaScript, React.js, and Bootstrap.',
    icon: FaPenFancy,
    tags: [
      {
        id: 1,
        label: 'React',
        color: '#2ef171',
      },
      {
        id: 1,
        label: 'Tailwind CSS',
        color: '#2ef171',
      },
      {
        id: 1,
        label: 'API Integration',
        color: '#2ef171',
      },
      {
        id: 1,
        label: 'JavaScript',
        color: '#2ef171',
      },
    ],
    svg: false,
  },
  {
    title: 'Power Platform Solutions',
    description:
      'Building apps, automating workflows, and visualizing data using Power Apps, Power Automate, and Power BI.',
    icon: PowerPlatform,
    tags: [
      {
        id: 1,
        label: 'Power Apps',
        color: '#2ef171',
      },
      {
        id: 1,
        label: 'Power Automate',
        color: '#2ef171',
      },
      {
        id: 1,
        label: 'Power Pages',
        color: '#2ef171',
      },
      {
        id: 1,
        label: 'Dataverse',
        color: '#2ef171',
      },
    ],
    svg: true,
  },
  {
    title: 'Freelance Projects',
    description:
      'I offer freelance services, helping clients turn their ideas into functional and well-designed digital products.',
    icon: FaBriefcase,
    tags: [
      {
        id: 1,
        label: 'Front-End Development',
        color: '#2ef171',
      },
      {
        id: 1,
        label: 'UI/UX Design',
        color: '#2ef171',
      },
      {
        id: 1,
        label: 'Animation & Interactivity',
        color: '#2ef171',
      },
      {
        id: 1,
        label: 'Responsive Design',
        color: '#2ef171',
      },
    ],
    svg: false,
  },
];

export const certifications = [
  {
    id: 1,
    title: '🏅 AZ-900',
    year: '2024',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/VishalSharma-3832/DAD4E4E39B4C3E8?sharingId=CF6179E345C022D6',
  },
  {
    id: 2,
    title: '🏆 PL-900',
    year: '2024',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/VishalSharma-3832/7225DF99FD70C4F2?sharingId=CF6179E345C022D6',
  },
  { id: 3, title: '🥇 PL-200(In Progress)', year: '2024', url: '/about' },
];
