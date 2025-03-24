"use client";

import { RiGithubFill, RiFacebookFill, RiInstagramFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://github.com/henwijames",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/hnryjmsrbn",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/ribanohenwi/?hl=en",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
