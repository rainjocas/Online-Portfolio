import React from "react";
import NavigationBar from "../components/Navigation/NavigationBar";
import useScreenType from "../utils/UseScreenType";
import { Menu } from "../components/Navigation/NavigationBar";

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
    const screenType = useScreenType();
    if (screenType === "mobile"){
        return (
            <div>
                <Menu />
                <div id="page-content">
                {children}
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <NavigationBar />
                <div id="page-content">
                {children}
                </div>
            </div>
        );
    }
};
