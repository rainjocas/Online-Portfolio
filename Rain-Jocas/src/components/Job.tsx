import * as React from "react";
import { LeftBubble, RightBubble } from "./SideBubble";

/**
 * Job Component Props
 * @param children, the children of the component
 */
type JobProps = {
    title: string
    company: string
    startDate: string
    endDate: string
    description: any;
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
        <div className="pt-20">
            <div className="flex flex-row justify-between">
                <LeftBubble>
                    <text className="font-bold text-lightBlue">{title},</text>
                    <div className = "px-1"></div>
                    <text className="text-lightBlue content-center">{company}</text>
                </LeftBubble>
                <div className = "px-3"></div>
                <RightBubble>
                    <text className="text-lightBlue">{startDate} - {endDate}</text>
                </RightBubble>
            </div>
            <div className="px-10 pt-5">
                {description}
            </div>
        </div>
    );
}

export default Job;