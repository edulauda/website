import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4 style={{ fontSize: "20px", lineHeight: "1.2" }}>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};

