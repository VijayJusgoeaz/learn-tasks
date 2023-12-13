import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const { username, job } = useParams();
  return (
    <div>
      About
      <div>
        Hai {username} and your job is {job}
      </div>
    </div>
  );
};

export default About;
