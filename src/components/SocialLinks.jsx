import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLetterboxd } from "react-icons/fa6";
import { SiLeetcode, SiHandshake } from "react-icons/si";

const socials = [
  {
    href: "https://github.com/theabhiramr",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://instagram.com/theabhiramr",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://twitter.com/theabhiramr",
    icon: FaTwitter,
    label: "Twitter",
  },
  {
    href: "https://linkedin.com/in/theabhiramr/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://letterboxd.com/theabhiramr/",
    icon: FaLetterboxd,
    label: "Letterboxd",
  },
];

const variantClass = {
  icon: "text-muted/60 hover:text-content transform transition-all duration-300 hover:-translate-y-0.5",
  tile: "border-border/60 bg-surface text-content/70 hover:border-accent/40 hover:bg-accent/10 hover:text-accent flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-200 lg:h-12 lg:w-12",
};

export default function SocialLinks({
  className = "flex items-center space-x-5",
  iconSize = 18,
  variant = "icon",
}) {
  return (
    <div className={className}>
      {socials.map(({ href, icon: Icon, label }) => (
        <div key={label} className="group relative">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={variantClass[variant]}
          >
            <Icon size={iconSize} />
          </a>
          <span className="border-border bg-surface text-content font-geist-mono pointer-events-none absolute -top-2 left-1/2 z-20 -translate-x-1/2 -translate-y-full rounded-md border px-2 py-1 text-[10px] whitespace-nowrap opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
