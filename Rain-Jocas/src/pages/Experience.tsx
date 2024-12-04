import React from "react";
import {PageWrapper} from "../pageSections/PageWrapper";
import Job from "../components/Job";
//import {Section} from "../pageSections/Section";

const Experience: React.FC = () => {
  return (
    <PageWrapper>
       <Job title={"Technology Intern"} company = {"FLIP National"} startDate={"May 2024"} endDate={"August 2024"} description={"hello world"}></Job>
    </PageWrapper>
    );
  };
  
  export default Experience;