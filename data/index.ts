import react from "../assets/react.svg";
import mui from "../assets/mui.svg";
import next from "../assets/next.svg";
import node from "../assets/node.svg";
import postgresql from "../assets/postgresql.svg";
import tailwind from "../assets/tailwind.svg";
import typescript from "../assets/typescript.svg";
import vue from "../assets/vue.svg";

export const englishContent = {
  hero: {
    foreword: "Dynamic Portfolio with Next.js",
    // FIXME : dynamic title for the TextGrenerateEffect
    subtitle: "Hi! I'm Eve, a Javascript Developer based in France.",
  },
  tailwindGrid: {
    firstGrid:
      "I prioritize client collaboration, fostering open communication",
    secondGrid: {
      firstSpan: "I constantly try to improve",
      secondSpan: "My tech stack",
    },
    thirdGrid: "I'm very flexible with time zone communications",
    // FIXME : dynamic content for the fourth grid
  },
  approach: {
    title: "My Approach",
  },
  projects: {
    title: "A small selection of recent projects",
  },
  footer: {
    title: {
      firstSpan: "Ready to craft",
      // FIXME : dynamic content for the FlipWords component
      secondSpan: "experiences where usability",
      thirdSpan: "meets discoverability?",
    },
    description:
      "Reach out to me today and let&apos;s discuss how I can help you achieve your goals.",
    or: "OR",
  },
};

export const frenchContent = {
  hero: {
    foreword: "Portfolio dynamique avec Next.js",
    // FIXME : dynamic title for the TextGrenerateEffect
    subtitle:
      "Salut, je suis Eve, une développeuse javascript basée en France.",
  },
  tailwindGrid: {
    firstGrid:
      "Je privilégie la collaboration avec le client et favorise la communication ouverte",
    secondGrid: {
      firstSpan: "J’essaie constamment d'élargir",
      secondSpan: "Ma stack technologique",
    },
    thirdGrid:
      "Je suis très flexible avec les communications de fuseau horaire",
    // FIXME : dynamic content for the fourth grid
  },
  approach: {
    title: "Mon Approche",
  },
  projects: {
    title: "Une petite sélection de projets récents",
  },
  footer: {
    title: {
      firstSpan: "Prêt à construire",
      // FIXME : dynamic content for the FlipWords component
      secondSpan: "des expériences où l'utilisabilité",
      thirdSpan: "rejoint la découverte?",
    },
    description:
      "Communiquez avec moi dès aujourd’hui et discutons de la façon dont je peux vous aider à atteindre vos objectifs.",
    or: "OU",
  },
};

export const slideData = [
  {
    title: "Sweet Recipes",
    button: "Explore Project",
    src: "https://i.pinimg.com/736x/25/d1/d5/25d1d5ab917a69a3cfd659e5ebb1de20.jpg",
    href: "https://sweetrecipes.vercel.app/",
    icons: [
      { id: 1, src: next },
      { id: 2, src: mui },
      { id: 3, src: typescript },
      { id: 4, src: node },
      { id: 5, src: postgresql },
    ],
  },
  {
    title: "Felinae Quiz",
    button: "Explore Project",
    src: "https://images.unsplash.com/photo-1510920018318-3b4dfe979e4d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "https://quiz.nybtech.fr/",
    icons: [
      { id: 6, src: vue },
      { id: 7, src: typescript },
      { id: 8, src: tailwind },
    ],
  },
  {
    title: "The Little Lemon",
    button: "Explore Project",
    src: "https://i.pinimg.com/736x/73/32/c9/7332c9a137a75e33dbbf0b75dc7434c7.jpg",
    href: "https://lillemonrestaurant.netlify.app/",
    icons: [
      { id: 9, src: react },
      { id: 10, src: tailwind },
    ],
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
