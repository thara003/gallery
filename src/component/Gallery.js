import React from "react";

const Gallery = () => {
  return (
    <div
      className="gallery"
      style={{
        backgroundImage: `url("https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80")`,
      }}
    >
      <div className="gallery-overlay">
        <div className="gallery-overlay-content">
          <h1 style={{ fontSize: "3em" }}>Welcome !</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
