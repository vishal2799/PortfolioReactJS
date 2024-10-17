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
  Portfolio3,
  Portfolio4,
} from '../assets/images';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

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
    label: 'UI/UX Design',
    color: '#ffc427',
  },
  {
    id: 1,
    label: 'Animation & Interactivity',
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
    url: '/',
    icon: FaInstagram,
  },
  {
    id: 2,
    url: '/',
    icon: FaXTwitter,
  },
  {
    id: 3,
    url: '/',
    icon: FaLinkedin,
  },
  {
    id: 4,
    url: '/',
    icon: FaGithub,
  },
];

export const servicesSkills = [
  {
    id: 1,
    url: '/',
    icon: FaInstagram,
    label: 'HTML 5',
  },
  {
    id: 2,
    url: '/',
    icon: FaXTwitter,
    label: 'HTML 5',
  },
  {
    id: 3,
    url: '/',
    icon: FaLinkedin,
    label: 'HTML 5',
  },
  {
    id: 4,
    url: '/',
    icon: FaGithub,
    label: 'HTML 5',
  },
];

export const portfolioItems = [
  {
    id: 1,
    image: Portfolio1,
    title: 'Squash',
    desc: 'Website',
  },
  {
    id: 1,
    image: Portfolio2,
    title: 'Squash',
    desc: 'Website',
  },
  {
    id: 1,
    image: Portfolio3,
    title: 'Squash',
    desc: 'Website',
  },
  {
    id: 1,
    image: Portfolio4,
    title: 'Squash',
    desc: 'Website',
  },
];
