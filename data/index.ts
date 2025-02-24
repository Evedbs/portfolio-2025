import react from "../assets/react.svg";
import mui from "../assets/mui.svg";
import next from "../assets/next.svg";
import node from "../assets/node.svg";
import postgresql from "../assets/postgresql.svg";
import tailwind from "../assets/tailwind.svg";
import typescript from "../assets/typescript.svg";
import vue from "../assets/vue.svg";
import idea from "../assets/idea.png";
import phase2 from "../assets/phase2.jpg";
import rocket from "../assets/rocket.jpg";

export const englishForm = {
  title: "Send me a message",
  subtitle:
    "Let’s turn your ideas into reality, reach out and let’s build something great together!",
  content: {
    firstContainer: {
      label: "First name",
      placeholer: "John",
    },
    secondContainer: {
      label: "Last name",
      placeholer: "Doe",
    },
    thirdContainer: {
      label: "Email address",
      placeholder: "johndoe@gmail.com",
    },
    fourthContainer: {
      label: "Message",
      placeholer:
        "Hello Eve ! I'm looking for a developer to help build a web application in Javascript.",
    },
  },
  button: "Submit",
};

export const frenchForm = {
  title: "Envoyez-moi un message",
  subtitle:
    "Faisons de vos idées une réalité, communiquons et construisons ensemble quelque chose de grand!",
  content: {
    firstContainer: {
      label: "Prénom",
      placeholer: "John",
    },
    secondContainer: {
      label: "Nom",
      placeholer: "Doe",
    },
    thirdContainer: {
      label: "Adresse email",
      placeholder: "johndoe@gmail.com",
    },
    fourthContainer: {
      label: "Message",
      placeholer:
        "Bonjour Eve ! Je cherche un développeur pour m'aider à construire une application web en Javascript.",
    },
  },
  button: "Envoyer",
};

export const englishPhases = [
  {
    title: "Phase 1",
    subtitle: "Planning & Strategy",
    description: `We'll work together to define your website's objectives, identify your target audience, and determine essential features. Our discussions will cover aspects such as site layout, navigation, and content needs.`,
    imageUrl: idea.src,
  },
  {
    title: "Phase 2",
    subtitle: "Development & Progress Update",
    description: `After we finalize the plan, I put on my lofi playlist and start coding. From rough sketches to refined code, I keep you informed throughout the entire process.`,
    imageUrl: phase2.src,
  },
  {
    title: "Phase 3",
    subtitle: "Development & Launch",
    description: `This is where the real work begins! Using the approved design, I'll transform everything into functional code, developing your website from the ground up.`,
    imageUrl: rocket.src,
  },
];

export const frenchPhases = [
  {
    title: "Phase 1",
    subtitle: "Planification & stratégie",
    description: `Nous travaillerons ensemble pour définir les objectifs de votre site web, identifier votre public cible et déterminer les caractéristiques essentielles. Nos discussions porteront sur des aspects tels que la mise en page du site, la navigation et les besoins de contenu.`,
    imageUrl: idea.src,
  },
  {
    title: "Phase 2",
    subtitle: "Développement & bilan des avancements",
    description: `Une fois le plan finalisé, je me lance dans le développement. Des esquisses au code abouti, je vous tiens informé à chaque étape.`,
    imageUrl: phase2.src,
  },
  {
    title: "Phase 3",
    subtitle: "Development & lancement",
    description: `C’est là que le vrai travail commence! En utilisant le design approuvé, je transforme tout en code fonctionnel, et développe votre site web à partir de zéro.`,
    imageUrl: rocket.src,
  },
];

export const slideData = [
  {
    title: "Sweet Recipes",
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

export const englishContent = {
  hero: {
    foreword: "Dynamic Portfolio with Next.js",
    words: "Transforming Concepts into Seamless User Experiences",
    subtitle: "Hi! I'm Eve, fullstack Developer and designer based in France.",
    button: "Download my resume",
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
    fourthGrid: {
      button: "Copy my email address",
      done: "Email is copied!",
    },
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
      secondSpan: "experiences where usability",
      thirdSpan: "meets discoverability?",
    },
    description:
      "Reach out to me today and let's discuss how I can help you achieve your goals.",
    or: "OR",
  },
};

export const frenchContent = {
  hero: {
    foreword: "Portfolio dynamique avec Next.js",
    words: "Transformer les idées en expériences utilisateur fluides",
    subtitle:
      "Bonjour, je suis Eve, développeuse fullstack et designer basée en France.",
    button: "Télécharger mon CV",
  },
  tailwindGrid: {
    firstGrid:
      "Je mise sur la collaboration avec le client et une communication transparente.",
    secondGrid: {
      firstSpan: "J’essaie constamment d'élargir",
      secondSpan: "Ma stack technologique",
    },
    thirdGrid:
      "Je m'adapte facilement aux différents fuseaux horaires pour communiquer.",
    fourthGrid: {
      button: "Copier mon adresse email",
      done: "Adresse email copiée!",
    },
  },
  approach: {
    title: "Mon Approche",
  },
  projects: {
    title: "Une petite sélection de projets récents",
  },
  footer: {
    title: {
      firstSpan: "Prêt à concevoir",
      secondSpan: "des expériences digitales",
      thirdSpan: "alliant usabilité et innovation?",
    },
    description:
      "Contactez-moi dès aujourd’hui pour discuter de la meilleure façon de vous aider à atteindre vos objectifs.",
    or: "OU",
  },
};
