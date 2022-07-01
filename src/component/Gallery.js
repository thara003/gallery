import React from "react";
import Navbar from "./Navbar";
import Header from "./Gallery/Header";
import Carousel from "./Gallery/Carousel";

const Gallery = () => {
  return (
    <div >
            {/* <div className="absolute w-full z-20">
                <Navbar />
            </div>
            <main>
                <Header />
                <WorkingSection />
                <TeamSection />
                <ContactSection />
            </main>
            <DefaultFooter />
        </div> */}
        <Navbar />
        <Header />
        {/* <Carousel /> */}
    </div>
  );
};

export default Gallery;
