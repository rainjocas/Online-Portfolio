import React from "react";
import {PageWrapper} from "../pageSections/PageWrapper";
//import {Section} from "../pageSections/Section";

const titleBubbleClass= "text-2xl px-4 text-lightBlue bg-theme_blue align-center w-full max-w-fit rounded-full"

const About: React.FC = () => {
    return (
      <PageWrapper>
        <div className="pt-20 flex flex-col place-items-center">
          <h2 className = {titleBubbleClass}>About</h2>
            <p className="py-4 px-5 text-blueBlack text-lg">
              I am a current Junior at Bowdoin College, majoring in Computer Science. I have
              experience with a wide array of programming tools and methods, including Object
              Oriented Programming, UI/UX and design, and Machine Learning.
            </p>
          <h2 className = {titleBubbleClass}>Classes</h2>
            <p className="py-4 px-5 text-blueBlack text-lg">
              Algorithms, Data Structures, Computer Systems, Artificial Intelligence, Data Science, Theory of Computation, Technology, and the Common Good
            </p>
          <h2 className = {titleBubbleClass}>Languages & Skills</h2>
            <p className="py-4 px-5 text-blueBlack text-lg">
              Python, C, Java, React, Git, HTML, Typescript, CSS, R
            </p>
        </div>
      </PageWrapper>
    );
  };
  
  export default About;