import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center" style={{ backgroundColor: "#f2f2f2" }}>
      <div className="container">
        <div className="section-title">
          <h2>Galerija</h2>
          <p>
            Pred vama su svi završni projekti naših polaznika, uživajte!
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-4 col-md-6 col-lg-4 col-xl-3"
                    
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
