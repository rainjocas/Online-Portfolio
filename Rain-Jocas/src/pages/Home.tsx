import React from "react";
import {PageWrapper} from "../pageSections/PageWrapper";
//import {Section} from "../pageSections/Section";

const Home: React.FC = () => {
    return (
      <PageWrapper>
          <p className="text-xl font-bold underline">
            Congratulations, you've reached the home page
          </p>
      </PageWrapper>
    );
  };
  
  export default Home;