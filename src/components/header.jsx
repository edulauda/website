import React from "react";

export const Header = (props) => {
  return (
    <header id="header" style={{ paddingTop: '6%' }}>
      <div className="intro">
        <div className="overlay">
          <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                  <span></span>
                </h1>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};
