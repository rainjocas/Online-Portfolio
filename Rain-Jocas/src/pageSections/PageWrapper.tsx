import React from "react";
import NavigationBar, { SideBar } from "../components/NavigationBar";

/**
 * Wrapper Component Props
 * @param children, the children of the component
 */
type WrapperProps = {
    children: React.ReactNode[] | React.ReactNode;
};

/**
 * Wrapper Component
 * Used for the elements that are displayed on all pages,
 * updating here updates all pages at once
 */
export const PageWrapper: React.FC<WrapperProps> = ({
    children,
    }) => {
    return (
        <div>
            <SideBar />
            <div id="page-content">
            {children}
            </div>
        </div>
    );
};
