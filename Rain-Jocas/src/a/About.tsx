import React from "react";
import {PageWrapper} from "../pageSections/PageWrapper";
//import {Section} from "../pageSections/Section";

const About: React.FC = () => {
    return (
      <PageWrapper>
          <p className="text-xl font-bold underline">
            Congratulations, you've reached the About page
          </p>
      </PageWrapper>
    );
  };
  
  export default About;