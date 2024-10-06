import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="section-title" style={{ textAlign: "center" }}>
          <h2>O radionici</h2>
        </div>
        <p style={{ textAlign: "justify" }}>{props.data ? props.data.paragraph : "loading..."}</p>
        <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
        <div className="row" >
          {props.data
            ? props.data.Items.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3" style={{textAlign: 'center'}}>
                {/* <img src={d.icon}></img> */}
                <i className={d.icon} style={{textAlign: 'center'}}></i>
                <h3 style={{textAlign: 'center'}}>
                  {d.title}
                </h3>
                <p style={{textAlign: 'center'}}>
                  {d.text}
                </p>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
