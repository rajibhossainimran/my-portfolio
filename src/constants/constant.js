import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    development,
    webdesign,
    fullstack,
    website1,
    website2,
    website3,
    php,
    mysql,
    laravel,
    bootstrap,
    jquery
  } from "../assets";
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web designer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend (Laravel)",
      icon: backend,
    },
    {
      title: "Tutor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "laravel",
      icon: laravel,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "jquery",
      icon: jquery,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Fontend",
      company_name: "",
      icon: development,
      iconBg: "#383E56",
      date: "",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Application Developer",
      company_name: "",
      icon: webdesign,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  
    {
      title: "Full stack Developer",
      company_name: "",
      icon: fullstack,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Developing and maintaining web applications using React.js and Laravel.",
        "Collaborating with cross-functional teams including designers, product managers",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pharmacy",
      description:
        "The pharmacy project is a web-based application built using PHP and MySQL, designed to streamline pharmacy operations. It features medication tracking, prescription management, inventory control, and billing.",
      tags: [
        {
          name: "Js",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "MySql",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      live: "https://pharmacy.rajibhossain.online/",
      image: website1,
      source_code_link: "https://github.com/rajibhossainimran/pharmanest-project",
    },
    {
      name: "Recipe Calories",
      description:
        "Recipe Calories is an application designed to calculate and display the nutritional information. Users can input ingredients and their quantities, and the app calculates the total calories, as well as other key nutritional data such as fats, proteins.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      live: "https://roaring-sorbet-0a7885.netlify.app/",
      image: website2,
      source_code_link: "https://github.com/rajibhossainimran/react-recipe-calories",
    },
    {
      name: "SHEBA.XYZ",
      description:
        "Sheba.xyz is a platform that connects users with service providers for various needs, such as home repairs and tutoring.It's simplify the process of finding reliable service providers, offering a seamless experience for both users and service providers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Laravel",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      live: "",
      image: website3,
      source_code_link: "https://github.com/rajibhossainimran/",
    },
  ];
  
  export {navLinks, services, technologies, experiences, testimonials, projects };