import React from "react";
import GalleryCard from "./GalleryCard";
// import CardData from './CardData'
import { Typography } from "@material-tailwind/react";
const CardData = [
  {
    title: "Event Name 1",
    year: 2020,
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    imgSrc: "/assets/images/google.png",
    href: "/gallery/event-name1",
  },
  {
    title: "Event Name 2",
    year: 2020,
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    imgSrc: "/assets/images/google.png",
    href: "/gallery/event-name1",
  },
  {
    title: "Event Name 3",
    year: 2021,
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    imgSrc: "/assets/images/google.png",
    href: "/gallery/event-name1",
  },
  {
    title: "Event Name 4",
    year: 2021,
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    imgSrc: "/assets/images/google.png",
    href: "/gallery/event-name1",
  },
  {
    title: "Event Name 5",
    year: 2022,
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    imgSrc: "/assets/images/google.png",
    href: "/gallery/event-name1",
  },
  {
    title: "Event Name 6",
    year: 2022,
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    imgSrc: "/assets/images/google.png",
    href: "/gallery/event-name1",
  },
];
const CardLister = (year) => {
  return CardData.map((card, index) => {
    if (card.year === year) {
      return (
        <GalleryCard
          key={index}
          title={card.title}
          description={card.description}
          imgSrc={card.imgSrc}
          href={card.href}
        />
      );
    }
  });
};

const Landing = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-4 px-3">
      <div className="bg-slate-800 p-4 shadow-lg rounded-lg overflow-hidden" id="2020">
        <Typography variant="h4" color="grey" className="m-2">
          Events-2020
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CardLister(2020)}
        </div>
      </div>
      <div className="bg-slate-800 p-4 shadow-lg rounded-lg overflow-hidden" id="2021">
        <Typography variant="h4" color="grey" className="m-2">
          Events-2021
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CardLister(2021)}
        </div>
      </div>
      <div className="bg-slate-800 p-4 shadow-lg rounded-lg overflow-hidden" id="2022">
        <Typography variant="h4" color="grey" className="m-2">
          Events-2022
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CardLister(2022)}
        </div>
      </div>
    </div>
  );
};

export default Landing;
