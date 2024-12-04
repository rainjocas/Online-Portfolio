import * as React from "react";

/**
 * Job Component Props
 * @param children, the children of the component
 */
type JobProps = {
    title: string
    company: string
    startDate: string
    endDate: string
    description: string
};

/**
 * Wrapper Component
 * Used for the elements that are displayed on all pages,
 * updating here updates all pages at once
 */
// export const Job: React.FC<JobProps> = (props) => {
//     return (
const Job: React.FC<JobProps> = ({ 
    title, company, startDate, endDate, description,
}) => {
    return (
        <div className="pt-5">
            <div className="flex flex-row justify-between px-5">
                <div className="">
                    <text style={{ fontWeight: 'bold' }}>{title}</text>
                    , {company}
                </div>
                <div>
                    {startDate} - {endDate}
                </div>
            </div>
            <div className="px-10 pt-5">
            {description}
            </div>
        </div>
    );
}

export default Job;