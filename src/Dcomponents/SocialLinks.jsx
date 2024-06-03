import React from "react";


const socialLinks = [
  {
    platform: "Facebook",
    url: "https://www.facebook.com/caitlyn.kerluke",
    icon: "fab fa-facebook", // Using Font Awesome icons for simplicity
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/caitlyn.kerluke",
    icon: "fab fa-instagram",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/caitlyn.kerluke",
    icon: "fab fa-linkedin",
  },
  {
    platform: "Twitter",
    url: "https://www.twitter.com/caitlyn.kerluke",
    icon: "fab fa-twitter",
  },
];

const SocialLinks = () => {
  return (
    <div className="p-4 max-w-sm mx-auto  bg-white rounded-xl shadow-md space-y-5 ml-32">
      <div className="text-xl font-medium text-black">Social</div>
      <ul className="space-y-4">
        {socialLinks.map((link, index) => (
          <li key={index} className="flex items-center space-x-2">
            <i className={link.icon}></i>
            <a href={link.url} className="text-blue-500 hover:underline">
              {link.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;