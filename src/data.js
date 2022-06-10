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
    
    "imgOne": "https://i.ibb.co/ZGC9DYW/tire-project-1.png",
    "imgTwo": "https://i.ibb.co/cDjbZYx/tire-2.png",
    "imgThree": "https://i.ibb.co/PTZWjWp/tire-3.png",
    "name": "Tire-manufacturer",
    "category": "web development",
    "about": "This is a tire manufacturing full-stack website. After login users can see individual tires of car details and order them & pay for them.Admin can add/delete any product on the website. He is also able to see all orders and cancel if he wants",
    "live": "https://car-wheel-assignment.web.app/",
    "git": "https://github.com/MilonMridha/tire-manufacture-assign-12-client",
    "details": "This is a tire manufacturing full-stack website.After login users can see individual tires of car details and order them & pay for them.It has Admin route system in page.Admin can add/delete any product on the website. He is also able to see all orders and cancel if he wants.It's contains react router firebase authentication application.It's has two part. one part is backend & other part is client or Frontend.Backend part is hosting in Heroku and frontend part is firebase.It's has a navbar which maintain different route of Home,blogs, portfolio, Login ...There are a banner of a tyre manufacture & six section of different part and a footer in homepage.Purchase page is protected by requiredAuth route."
  },
  {
    
    "imgOne": "https://i.ibb.co/gyHZp7W/perfume-project-2.png",
    "imgTwo": "https://i.ibb.co/hddQqnn/per-2.png",
    "imgThree": "https://i.ibb.co/HPDycsK/per-3.png",
    "name": "Perfume-warehouse",
    "category": "web development",
    "about": "Full-stack website and dynamic landing page with 6 sections and also responsive design.Email password and three social login functionality using firebase authentication.It has a JWT authentication and pagination system to manage all inventory sections.",
    "live": "https://perfume-wear-house.web.app/",
    "git": "https://github.com/MilonMridha/wear-house-assign-11-client",
    "detail": "Full-stack website and dynamic landing page with 6 sections and also responsive design.Email password and three social login functionality using firebase authentication.It has a JWT authentication and pagination system to manage all inventory sections.It's has two part. one part is backend & other part is client or Frontend.Backend part is hosting in Heroku and frontend part is firebase.It's has a navbar which maintain different route of Home,blogs, addItems,MyItem, ManageItem, Login ...There are a carousel of a perfume storehouse & six inventories of different perfume product and a footer in homepage."
    
  },
  {
    
    "imgOne": "https://i.ibb.co/2Zwg8xj/tour-guide.png",
    "imgTwo": "https://i.ibb.co/DY5NFkq/tour-2.png",
    "imgThree": "https://i.ibb.co/vdZ6hyT/tour-3.png",
    "name": "Travel-guide",
    "category": "web development",
    "about": "Firebase authentication system.Dynamic landing page and responsive design.Dynamic routing system using react-route.",
    "live": "https://perfect-tour-guide-auth.web.app/",
    "git": "https://github.com/MilonMridha/independent-occupasion-assign-10",
    "detail": "Firebase authentication system.Dynamic landing page and responsive design.Dynamic routing system using react-route.It,s a single page application.This site contains a individual profession of A travel Guide .It's has a navbar which maintain different route of Home, CheckOut, blogs, About, Login...There are a Background picture of a travel guide & three services and a footer in homepage..Checkout page is protected by requiredAuth route.if user not login on this site they cannot entry in checkout page."
  }
  
  
]

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
    description: 'Email me at milon90phero@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Gazipur, Bangladesh',
    description: 'Serving clients worldwide',
  },
];
