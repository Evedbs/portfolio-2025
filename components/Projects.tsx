"use client";

import { Carousel } from "./ui/Carousel";
export function Projects() {
  const slideData = [
    {
      title: "Sweet Recipes",
      button: "Explore Project",
      src: "https://i.pinimg.com/736x/25/d1/d5/25d1d5ab917a69a3cfd659e5ebb1de20.jpg",
      href: "https://sweetrecipes.vercel.app/",
    },
    {
      title: "Felinae Quiz",
      button: "Explore Project",
      src: "https://images.unsplash.com/photo-1510920018318-3b4dfe979e4d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "https://quiz.nybtech.fr/",
    },
    {
      title: "The Little Lemon",
      button: "Explore Project",
      src: "https://i.pinimg.com/736x/73/32/c9/7332c9a137a75e33dbbf0b75dc7434c7.jpg",
      href: "https://lillemonrestaurant.netlify.app/",
    },
  ];
  return (
    <div
      id="projects"
      className="py-8 w-screen flex flex-col justify-center items-center"
    >
      <h2 className="text-center uppercase text-lg tracking-widest text-blue-100 max-w-80">
        A small selection of recent projects
      </h2>
      <div className="relative overflow-hidden w-full h-full py-14">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
}
