import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ThanhDatVu111" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/thanhdatvu111" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaFacebook />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;