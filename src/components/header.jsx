import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "0",
                paddingBottom: "56.25%", // 16:9 aspect ratio
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/fQ6mNUpjEo0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
