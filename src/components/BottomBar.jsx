import { useState } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function BottomBar() {
  const navigate = useNavigate(); // ⭐ استخدمها بدل window.location

  const [options, setOptions] = useState([
    { label: "zcv ", value: "/cv" },
    { label: "zhome", value: "/" },
    { label: "zcert", value: "/certificats" },
  ]);

  const iconStyle = { color: "#354a5f", fontSize: "18px" };

  const [links, setLinks] = useState([
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
  ]);

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: "25px",
    padding: "10px 17px",
    color: "white",
    fontSize: "14px",
    height: "50px",
    borderBottom: "1px solid #ccc",
  };

  const iconsWraper = {
    display: "flex",
    alignItems: "center",
    gap: "25px",
  };

  const selectStyle = {
    padding: "5px",
    border: "1px solid #354a5f",
    fontSize: "14px",
    outline: "none",
    width: "180px",
  };

  const handleNavigate = (e) => {
    const value = e.target.value;
    if (value !== "") {
      navigate(value); // ⭐ تنقل React Router — بدون Reload
    }
  };

  return (
    <div style={style}>
      <select style={selectStyle} onChange={handleNavigate}>
        <option value=""></option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <div style={iconsWraper}>
        {links.map((link) => (
          <Link key={link.link} to={link.link} target="_blank">
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
