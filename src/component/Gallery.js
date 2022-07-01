import React from "react";
import Navbar from "./Navbar";
import Header from "./Gallery/Header";

const Gallery = () => {
  return (
    <div className="flex flex-col relative">
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
    </div>
  );
};

export default Gallery;
