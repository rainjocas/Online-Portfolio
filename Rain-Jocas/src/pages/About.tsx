import React from "react";
import {PageWrapper} from "../pageSections/PageWrapper";
//import {Section} from "../pageSections/Section";

const titleBubbleClass= "text-2xl px-4 text-lightBlue bg-theme_blue align-center w-full max-w-fit rounded-full"

const About: React.FC = () => {
    return (
      <PageWrapper>
        <main className="pt-20 flex flex-col place-items-center">
          <h1 className = "pb-10 text-richBl">Rain Jocas</h1>
          [INSERT PHOTO]
          <h2 className = {titleBubbleClass}>About</h2>
            <p className="py-4 px-5 text-blueBlack text-lg">
              I am a current Junior at Bowdoin College, majoring in Computer Science. I'm an aspiring
              software engineer with experience with UI/UX and design. I'm especially interested in the
              visualization through programming, and in digital accesibilty. I enjoy problem solving,
              and one of my favorite things to do is fix things, from code to clothes, to furniture. The
              ability to find better solutions is the reason I became interesting in Computer Science.
            </p>
          <h2 className = {titleBubbleClass}>Classes</h2>
            <p className="py-4 px-5 text-blueBlack text-lg">
              Algorithms, Data Structures, Computer Systems, Artificial Intelligence, Data Science,
              Theory of Computation, Technology and the Common Good, Computational Complexity,
              Human-Computer Interaction, Deep Learning
            </p>
          <h2 className = {titleBubbleClass}>Languages & Skills</h2>
            <p className="pt-4 pb-5 px-5 text-blueBlack text-lg">
              Python, C, Java, React, Git, HTML, Typescript, CSS, R
            </p>
        </main>
      </PageWrapper>
    );
  };
  
  export default About;