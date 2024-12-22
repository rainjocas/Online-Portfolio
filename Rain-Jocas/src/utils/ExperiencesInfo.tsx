import React from "react";

export const techFellow = (
    <div>
        <p className="text-blueBlack">My internship with FLIP National was twofold. I worked on maintaining and updating the old website,
        as well as also building a new website from scratch using React. While my team and I built out the new
        website, I personally took on the responisbility of maintaining the old website as well. The old website
        hadn't been updated for 6 years, so maintenance was long overdue. While my team and I built out the new
        website, I personally took on the responisbility of maintaining the old website as well. I brought the
        content up to date, fixed up old code, and drastically improved the website speed. This work proved
        essential as the new website has not yet launched due to some content we are still waiting on.</p>
        <p className="text-blueBlack">For the new website, I led code development with an emphasis on digital accesibilty. I built out
        major components, such as the sidebar navigation on mobile, an interactive map, and search
        functionality within the website. I also built out important pages, such as the landing page, the
        FLIP National Chapters page, a page for the FLIP Side Podcast, and all of the pages for each FLIP
        National Chapter.</p>   
    </div>
)

export const aidOffice = (
    <p className="text-blueBlack">
        At the Bowdoin Student Aid office I help manage the administrative workload by 
        engaging directly with students and their families, answering their questions, and networking 
        within the SAO and other office to get student and prospective students the help they need. 
        I handle sensitive financial documents and help families make informed financial decisions 
        about attending Bowdoin.
    </p>
)

export const library = (
    <p className="text-blueBlack">
        In this position, I assisted with library operations and managed communication
        with library visitors. As a front facing customer service representitive, I answered
        questions, managed the front desk, and monitered the library.
    </p>
)

export const jobsList = [
    {
        title: "Technology Intern",
        company: "FLIP National",
        startDate: "May 2024",
        endDate: "August 2024",
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
        title: "Summer Library Circulation and Projects Assistant",
        company: "Bowdoin College",
        startDate: "May 2023",
        endDate: "August 2023",
        description: {library}
    },
]