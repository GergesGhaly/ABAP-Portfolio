import { useState } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import SES from "../data/cert/SES.PNG";
import sql from "../data/cert/sql.png";

// Add CV pdf file in public folder

// To add more icons viste https://react-icons.github.io/react-icons/

// How to Add a New Project

// Create Text Files for Your Code
// - Put each code file as a .txt file inside the code folder data => code
// - Go to: data/projects.jsx
// Add a New Object to projectsList Array
// Follow the existing structure

const iconStyle = { color: "#354a5f", fontSize: "18px" };

export const links = [
  {
    name: "facebook",
    link: "https://www.facebook.com/gerges.ghaly.35",
    icon: <AiOutlineFacebook style={iconStyle} />,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/gerges-ghaly-9455b3224/",
    icon: <CiLinkedin style={iconStyle} />,
  },
  {
    name: "github",
    link: "https://github.com/GergesGhaly?tab=repositories",
    icon: <FaGithub style={iconStyle} />,
  },
  //  {
  //   name: "",
  //   link: "",
  //   icon: <FaGithub style={iconStyle} />,
  // },
];

export const certificatsData = [
  {
    id: 1,
    title: "SES Training Center",
    description: "ABAP (Advanced Business Application Programming)",
    date: "December 2025",
    img: SES,
  },
  {
    id: 2,
    title: "Hackerrank",
    description: "Certification for SQL fundamentals",
    date: "april 2025",
    img: sql,
  },
  // {
  //   id: 3,
  //   title: " ",
  //   description: "   ",
  //   date: "2025-10-05",
  //   img: "",
  // },
];
