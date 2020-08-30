import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import martin from "../images/Martin_LinkedIn.png";
import dave from "../images/dave.png";
import jolly from "../images/jolly.jpeg";
function SocialMediaLink() {
  return (
    <div>
      <h1 className="smlink-header">Meet the Creators</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            David Oppong
            <div>
              <img src={dave} alt="David" width="200" />
              <p>CUNY - NYCCT: Recent Graduate</p>
              <p>Major: Computer Engnineer Technology</p>
              <p>
                Linkedin:{" "}
                <a href="https://www.linkedin.com/in/davidoppong">Click Me</a>
              </p>
            </div>
          </div>
          <div className="col">
            Martin Nnaji-Ifeakandu
            <div>
              <img src={martin} alt="Martin" width="200" />
              <p>CUNY - NYCCT: Recent Graduate</p>
              <p>Major: Computer Engnineer Technology</p>
              <p>
                Linkedin:
                <a href="https://www.linkedin.com/in/martin-nnajiofor-ifeakandu-4369a41b4/">
                  Click Me
                </a>
              </p>
            </div>
          </div>
          <div className="col">
            Jolly James Chidiadi
            <div>
              <img src={jolly} alt="Jolly" width="200" />
              <p>CUNY - NYCCT: Recent Graduate</p>
              <p>Major: Computer Engnineer Technology</p>
              <p>
                Linkedin:
                <a href="https://www.linkedin.com/in/jolly-chidiadi-james-572718158/">
                  Click Me
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaLink;
