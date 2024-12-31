import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ahaseeb.com/", // replace this with your deployed domain
  author: "Abdul Haseeb",
  profile: "https://ahaseeb.com/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Abdul Haseeb",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/AbdulHaseebKashmirii/portfolio_website",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/AbdulHaseebKashmirii",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abdulhaseebkashmiri/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:abdulhaseeb5654@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
