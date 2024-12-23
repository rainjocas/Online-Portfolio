import React from "react";
import NavigationBar from "../components/Navigation/NavigationBar";
import useScreenType from "../utils/UseScreenType";
import { Menu } from "../components/Navigation/NavigationBar";
import Linkedin from "../assets/LinkedIn";
import Github from "../assets/Github";

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
                <div className="bg-pine h-60 flex flex-col place-items-center">
                    <div className="flex flex-row ">
                        <p className="pt-4 text-offWhite text-xl font-bold">Email:</p>
                        <div className="px-2"></div>
                        <p className="pt-4 text-offWhite text-xl">rainjocas@gmail.com</p>
                    </div>
                    <div className="flex flex-row ">
                        <p className="pt-2 text-offWhite text-xl font-bold">Phone:</p>
                        <div className="px-2"></div>
                        <p className="pt- text-offWhite text-xl">(703) 999-7579</p>
                    </div>
                    <div className="flex flex-row">
                        <a href="linkedin.com/in/rain-jocas-34866a262"><Linkedin/></a>
                        <div className="px-2"></div>
                        <a href="linkedin.com/in/rain-jocas-34866a262"><Github/></a>
                    </div>
                </div>
            </div>
        );
    }
};
