import React from "react";
import Landing from "./Gallery/Landing";
import { Typography } from "@material-tailwind/react";

const Gallery = () => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto px-3 items-center justify-center flex flex-col">
        <div className="pt-24 items-center justify-center flex flex-col">
          <div className="text-center">
            <Typography variant="h1" color="blue-grey">
              Gallery
            </Typography>
          </div>
          <div className="text-center w-2/3">
            <Typography variant="lead" color="blue-grey">
              Material Tailwind is an easy to use components library for
              Tailwind CSS and Material Design.
            </Typography>
          </div>
        </div>
      </div>
      <Landing />
    </div>
  );
};

export default Gallery;
