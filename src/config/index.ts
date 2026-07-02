import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Md Masrul Khan — Mechatronics Engineer & Robotics Enthusiast",
  author: "Md Masrul Khan",
  description:
    "Mechatronics Engineer based in Khulna, Bangladesh. Passionate about robotics, automation, and embedded systems. Experienced in ROS, Python, C++, MATLAB, CAD design, and building autonomous robots.",
  lang: "en",
  siteLogo: "/md-masrul-khan.jpg",
  navLinks: [
    { text: "Home", href: "/#hero" },
    { text: "Experience", href: "/#experience" },
    { text: "Projects", href: "/#projects" },
    { text: "Research", href: "/#research" },
    { text: "Education", href: "/#education" },
    { text: "Skills", href: "/#skills" },
    { text: "Awards", href: "/#awards" },
    { text: "Gallery", href: "/#gallery" },
    { text: "Blog", href: "/#blog" },
    { text: "Resume", href: "/#resume" },
    { text: "About", href: "/#about" },
  ],
  socialLinks: [
    { text: "Email", href: "mailto:masrulkhan2020@gmail.com" },
    { text: "Github", href: "https://github.com/md-masrul-khan" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/md-masrul-k-50b9a91b6" },
    { text: "Youtube", href: "https://www.youtube.com/@mdmasrulkhan-jz4zv" },
    { text: "Facebook", href: "https://www.facebook.com/masrulkhan2018" },
    { text: "Instagram", href: "https://www.instagram.com/masrul__khan/" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://md-masrul-khan.framer.website",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Md Masrul Khan",
    specialty: "Mechatronics Engineer | Robotics Enthusiast",
    summary:
      "A highly motivated Mechatronics Engineering student passionate about robotics, automation, and embedded systems. Seeking opportunities to apply my technical skills in interdisciplinary projects and innovative problem-solving environments. Enthusiastic about working in teams and developing cutting-edge solutions for real-world challenges.",
    email: "masrulkhan2020@gmail.com",
  },
  researchInterest: [
    "Autonomous Robotics",
    "ROS 2",
    "Computer Vision",
    "Visual Servoing",
    "Underwater Robotics",
    "Soft Robotics",
    "Robotic Manipulation",
    "Embedded Systems",
    "Machine Learning for Robotics",
  ],
  experience: [
    {
      company: "KUET Robotics Lab",
      position: "Research Assistant",
      startDate: "PRESENT",
      endDate: "",
      summary: "Research on Advanced Robotics, focusing on hardware development, software integration of autonomous systems that can be applied to fields such as planetary missions, agriculture, biomedicals, and rehabilitation.",
    },
    {
      company: "Team BengalBoat",
      position: "Mentor",
      startDate: "PRESENT",
      endDate: "",
      summary: "Building Autonomous Surface Vehicle (ASV) and leading team participation at RoboBoat26 in Florida, USA.",
    },
    {
      company: "Team BengalSub",
      position: "Team Co-lead | Mechanical Lead",
      startDate: "PRESENT",
      endDate: "",
      summary: "Building Autonomous Underwater Vehicle (AUV) and participated at RoboSub25 in California, USA.",
    },
    {
      company: "Team DURBAR",
      position: "Mentor | Former Team Lead",
      startDate: "2022",
      endDate: "2025",
      summary: "Lead the design and development of Mars Rover, participated in IRC24, and achieved 2nd place in Autonomous Rover Rally by Texas A&M University.",
    },
    {
      company: "FabLab KUET",
      position: "Student Operator",
      startDate: "2024",
      endDate: "2025",
      summary: "Supported and trained operations on fabrication machines including 3D printers, CNC machines, and laser cutters.",
    },
    {
      company: "CADERS",
      position: "IT & Resource Officer",
      startDate: "2022",
      endDate: "2023",
      summary: "Mechanical CAD Club - Conducted workshops on computer-aided design tools and managed IT resources.",
    },
  ],
  projects: [
    {
      name: "KUET Mars Rover (Team Durbar)",
      summary:
        "Student-led Mars rover platform focusing on manipulation, autonomy, and sensor integration for planetary exploration competitions.",
      linkPreview: "/kuet_mars_rover",
      linkSource: "https://teamdurbarkuet.vercel.app/",
      image: "/project_images/kuet_mars_rover/DSC_6630.JPG",
    },
    {
      name: "Autonomous Underwater Vehicle (AUV) - BengalSub",
      summary: "Mechanical lead for the BengalSub autonomous underwater vehicle, focusing on waterproof design, thruster integration, and competition-ready autonomy.",
      linkPreview: "/bengalsub",
      linkSource: "https://github.com/md-masrul-khan",
      image: "/project_images/BengalSub/HAUV2_split.jpg",
    },
    {
      name: "Autonomous Surface Vehicle (ASV)",
      summary: "Designed and developed an autonomous surface vehicle for RoboBoat26 competition in Florida, USA. Features GPS navigation, obstacle avoidance, and autonomous mission planning.",
      linkPreview: "/bengalboat",
      linkSource: "https://github.com/md-masrul-khan",
      image: "/project_images/BengalBoat/tori3.jpg",
    },
    {
      name: "Spot Welding Robotic Arm",
      summary: "Designed a spot welding robotic arm with CAD-driven end-effector and welding electrode control for safer, repeatable manufacturing automation.",
      linkPreview: "/spotwelding_arm",
      linkSource: "https://md-masrul-khan.framer.website/spotwelding_arm",
      image: "/project_images/spot_welding_arm/final_build.jpg",
    },
    {
      name: "MFI Rover",
      summary: "Built an industrial inspection rover with rugged mobility, sensor integration, and field-ready autonomous navigation.",
      linkPreview: "/mfi_rover",
      linkSource: "https://md-masrul-khan.framer.website/mfi_rover",
      image: "/project_images/mfi_rover/1.jpg",
    },
    {
      name: "Steering Simulator",
      summary: "Created an ATmega32 steering simulator with SolidWorks design and embedded control for realistic steering system evaluation.",
      linkPreview: "/steering",
      linkSource: "https://md-masrul-khan.framer.website/steering",
      image: "/project_images/steering_simulator/1.jpg",
    },
    {
      name: "Biped Robot",
      summary: "Developed a biped robot with humanoid walking motion, balance control, and embedded actuation for mobility research.",
      linkPreview: "/biped_robot",
      linkSource: "https://md-masrul-khan.framer.website/bipad_robot",
      image: "/project_images/biped_robot/1.jpg",
    },
    {
      name: "Soccer Bot",
      summary: "Built an RC-controlled soccer robot with mechanical motion control, robust drive, and gameplay-ready design.",
      linkPreview: "/soccer_bot",
      linkSource: "https://md-masrul-khan.framer.website/soccer_bot",
      image: "/project_images/soccer_bot/5.jpeg",
    },
    {
      name: "Weather Station",
      summary: "IoT-based indoor air quality measurement and wind detection system with smartphone alerts and onboard display.",
      linkPreview: "/weather_station",
      linkSource: "https://md-masrul-khan.framer.website/weather_station",
      image: "/project_images/weather_station/1.jpg",
    },
  ],
  research: [
    {
      title: "Terrain Classification for Planetary Rovers",
      summary: "Terrain classification for planetary rovers using Wireless In-Wheel Sensor Modules and Machine Learning.",
      link: "https://doi.org/10.1002/rob.70124",
      venue: "Journal of Field Robotics",
      year: "2025",
    },
    {
      title: "Vision-Based Manipulator Control using ROS2 tools",
      summary: "Image-based visual servoing for robotic manipulators using ROS2 and OpenCV.",
      link: "",
      venue: "accepted at journal of robotics, wely",
      year: "",
    },
    {
      title: "Study asistant interaction humanoid robot NAO",
      summary: "Working on implementing LLM-based conversational AI for NAO humanoid robot to assist in educational settings.",
      link: "",
      venue: "In Progress",
      year: "",
    },
    {
      title: "Soft Robotic control using vision feedback",
      summary: "Working on implementing vision-based control algorithms for soft robotic grippers to enhance manipulation capabilities.",
      link: "",
      venue: "In Progress",
      year: "",
    },
  ],
  education: [
    {
      degree: "MSc. in Mechatronics Engineering",
      institution: "Khulna University of Engineering & Technology (KUET)",
      location: "Khulna, Bangladesh",
      session: "2026-2027",
      passingYear: "2027 (Expected)",
    },
    {
      degree: "BSc. in Mechatronics Engineering",
      institution: "Khulna University of Engineering & Technology (KUET)",
      location: "Khulna, Bangladesh",
      session: "2020-2023",
      passingYear: "2025",
      gpa: "3.48/4.00",
    },
    {
      degree: "Higher School Certificate (HSC)",
      institution: "Govt. Brojalal College",
      location: "Khulna, Bangladesh",
      passingYear: "2019",
      gpa: "5.00/5.00",
    },
  ],
  skills: [
    "Mechanical Design",
    "ROS 2",
    "Embedded Systems",
    "Machine Learning",
    "Robotics",
    "Automation",
    "C/C++",
    "Python",
    "MATLAB",
    "Arduino & ESP32",
    "3D Printing",
    "SolidWorks / AutoCAD / OnShape",
  ],
  awards: [
    {
      title: "2nd place - Autonomous Rover Rally",
      issuer: "Texas A&M University",
      year: "2024",
      description: "Achieved 2nd place in the Autonomous Rover Rally with Team DURBAR.",
    },
  ],
  gallery: [
    { image: "/spotifu.png", title: "ASV Prototype", caption: "Autonomous Surface Vehicle prototype", link: "/" },
    { image: "/project_images/BengalSub/hauv2_p3.jpg", caption: "Autonomous Underwater Vehicle", link: "/bengalsub" },
    { image: "/clone-ig.png", title: "Mars Rover", caption: "Mars Rover platform", link: "/kuet_mars_rover" },
  ],
  blogs: [
    {
      title: "Terrain Classification for Planetary Rovers",
      summary: "Overview of our approach using in-wheel sensors and ML.",
      link: "https://doi.org/10.1002/rob.70124",
      date: "2025",
    },
  ],
  resume: {
    link: "https://drive.google.com/",
  },
  about: {
    description: `
      I'm Md Masrul Khan, a Mechatronics Engineering student at KUET (Khulna University of Engineering & Technology) with a passion for robotics, automation, and embedded systems. I blend creativity with technical expertise to design and build innovative robotic solutions.

      My expertise spans across robotics and automation, with hands-on experience in embedded systems, robotic manipulation, mobile, surface and underwater robots, and control systems. I'm proficient in programming languages like C/C++, Python, MATLAB, and ROS 2, and have strong skills in CAD design tools including AutoCAD, Solidworks, and OnShape. I'm particularly interested in applying machine learning and artificial intelligence to solve real-world robotics challenges. My work focuses on developing cutting-edge solutions for autonomous systems and interdisciplinary projects.
    `,
    image: "/md-masrul-khan.jpg",
  },
};

// #5755ff
