import React from "react";

export const webDesignDeveloper = (
    <div>
        <p className="text-blueBlack text-lg">
            I spent the summer working on MaineTransNet's website. This included updating content, consolidating
            information, and improving the website's overall usability and accessibility. I also helped with
            updating the websited according to the new brand guidelines which were implemented that summer.
        </p>
    </div>
)

export const techFellow = (
    <div>
        <p className="text-blueBlack text-lg"> 
            I helped to build out a new website for FLIP National using React and Tailwind. This included
            building out reusable components, content, and pages. Meanwhile, I maintained the legacy site,
            updating content, fixing bugs, and improving website speed. I personally spearheaded our digital
            accessibility initiative, ensuring that the new website met the WGAC accessibility standards.
        </p> 
    </div>
)

export const aidOffice = (
    <p className="text-blueBlack text-lg">
        At the Bowdoin Student Aid office I help manage the administrative workload by 
        engaging directly with students and their families, answering their questions, and networking 
        within the SAO and other office to get student and prospective students the help they need. 
        I handle sensitive financial documents and help families make informed financial decisions 
        about attending Bowdoin.
    </p>
)

export const library = (
    <p className="text-blueBlack text-lg">
        In this position, I assisted with library operations and managed communication
        with library visitors. As a front facing customer service representitive, I answered
        questions, managed the front desk, and monitered the library.
    </p>
)

export const jobsList = [
    {
        title: "Web Design/Developer",
        company: "MaineTransNet",
        startDate: "May 2025",
        endDate: "August 2025",
        description: {webDesignDeveloper}
    },
    {
        title: "Technology Intern",
        company: "FLIP National",
        startDate: "May 2024",
        endDate: "January 2025",
        description: {techFellow}
    },
    {
        title: "Financial Aid Office Assistant",
        company: "Bowdoin College",
        startDate: "August 2023",
        endDate: "Current",
        description: {aidOffice}
    },
    {
        title: "Summer Library Assistant",
        company: "Bowdoin College",
        startDate: "May 2023",
        endDate: "August 2023",
        description: {library}
    },
]