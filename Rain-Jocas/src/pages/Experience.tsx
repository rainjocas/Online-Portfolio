import React from "react";
import {PageWrapper} from "../pageSections/PageWrapper";
import Job from "../components/Job";
import {aidOffice, jobsList, library, techFellow, webDesignDeveloper} from "../utils/ExperiencesInfo"
import Button from "../components/Button";

//import {Section} from "../pageSections/Section";

const Experience: React.FC = () => {
  return (
    <PageWrapper>
      <main>
        <Job title={jobsList[0].title} company={jobsList[0].company} startDate={jobsList[0].startDate} endDate={jobsList[0].endDate} description={webDesignDeveloper}></Job>
          <div className="flex flex-row justify-center space-x-10 pt-4">
            <Button src={"https://www.mainetrans.net/"} target={"_blank"}>Vist MaineTransNet's website</Button>
          </div>
        <Job title={jobsList[1].title} company={jobsList[1].company} startDate={jobsList[1].startDate} endDate={jobsList[1].endDate} description={techFellow}></Job>
          <div className="flex flex-row justify-center space-x-10 pt-4">
            <Button src={"https://www.flipnational.org/"} target={"_blank"}>Visit FLIP National's Website</Button>
            <Button src={"https://flip-national-cloudflare-project.pages.dev/"} target={"_blank"}>View Website Demo</Button>
          </div>
        <Job title={jobsList[2].title} company={jobsList[2].company} startDate={jobsList[2].startDate} endDate={jobsList[2].endDate} description={aidOffice}></Job>
        <Job title={jobsList[3].title} company={jobsList[3].company} startDate={jobsList[3].startDate} endDate={jobsList[2].endDate} description={library}></Job>
        <div className="py-5"></div>
      </main>
    </PageWrapper>
    );
  };
  
  export default Experience;