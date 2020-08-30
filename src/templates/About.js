import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function About() {
  return (
    <div>
      <h1 className="About-header">About Kebob</h1>
      <div>
        <p className="About-content">
          Kebob is a personal Kanban website for developers to plan their
          objectives for their personal projects in an organizable way. <br />
          It benefits them to create description cards for to complete certain
          tasks at different time frames. <br /> It helps them complete their
          objectives efficiently whether specifying what feature of a product is
          still <br />
          in progress towards getting it done.
        </p>
      </div>
    </div>
  );
}

export default About;
