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
export const Job: React.FC<JobProps> = (props) => {
    return (
        <div className="flex-wrap">
            <div className="left">
                <text style={{ fontWeight: 'bold' }}>{props.title}</text>
                , {props.company}
            </div>
            <div className="float-right">
                {props.startDate} - {props.endDate}
            </div>
            hello world
            <div className="flex flex-row">
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </div>
        </div>
    );
}

export default Job;