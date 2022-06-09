//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/tire-project-1.PNG';
import Project2 from './assets/img/projects/perfume-project-2.PNG';
import Project3 from './assets/img/projects/tour-guide.PNG';
import Project4 from './assets/img/projects/conjumer-4.PNG';
import Project5 from './assets/img/projects/review-5.PNG';
// import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Tire-manufacturer',
    category: 'web development',
    about: "This is a tire manufacturing full-stack website. After login users can see individual tires of car details and order them & pay for them.Admin can add/delete any product on the website. He is also able to see all orders and cancel if he wants",
    live: "https://car-wheel-assignment.web.app/",
    git: "https://github.com/MilonMridha/tire-manufacture-assign-12-client"
  },
  {
    id: '2',
    image: Project2,
    name: 'Perfume-warehouse',
    category: 'web development',
    about: "Full-stack website and dynamic landing page with 6 sections and also responsive design.Email password and three social login functionality using firebase authentication.It has a JWT authentication and pagination system to manage all inventory sections."
  },
  {
    id: '3',
    image: Project3,
    name: 'Travel-guide',
    category: 'web development',
    about: "Firebase authentication system.Dynamic landing page and responsive design.Dynamic routing system using react-route."
  },
  
  {
    id: '4',
    image: Project5,
    name: 'Watch-reviews',
    category: 'web development',
    about: "It's a react router application.This site contains some reviews of a watch.It's has a navbar which manitain different route of Home, reviews, dashboard, blogs..."
  },
  {
    id: '5',
    image: Project4,
    name: 'Cosmetics-conjumar',
    category: 'web development',
    about: "This is a single page application ecomerce site. User can add products in cart. and randomly selected one in four items"
  },
  // {
  //   id: '6',
  //   image: Project6,
  //   name: 'project name 6',
  //   category: 'web development',
  // },
];

// projects
// export const projectsNav = [
//   {
//     name: 'all',
//   },
//   {
//     name: 'UI/UX Design',
//   },
//   {
//     name: 'web development',
//   },
//   {
//     name: 'branding',
//   },
// ];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Development',
    description:
      'I will try my best for web development service',
  },
  {
    icon: <FiSettings />,
    name: 'Front-end Development',
    description:
      'I will try my best for Front-end Development service.',
  },
  {
    icon: <FiPenTool />,
    name: 'MERN-Stack Development',
    description:
      'I will try my best for MERN-Stack Development service.',
  },
  {
    icon: <FiTag />,
    name: 'Figma',
    description:
      'I will also service figma to html',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];
