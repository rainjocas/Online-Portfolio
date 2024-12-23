import React from "react";
import NavigationBar from "../components/Navigation/NavigationBar";
import useScreenType from "../utils/UseScreenType";
import { Menu } from "../components/Navigation/NavigationBar";
import Linkedin from "../assets/LinkedIn";
import Github from "../assets/Github";
import l from "../assets/LinkedInLogo.svg"

/**
 * Wrapper Component Props
 * @param children, the children of the component
 */
type WrapperProps = {
    children: React.ReactNode[] | React.ReactNode;
};

export const Footer = (
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
            <nav className="flex justify-center items-center">
                <a href = "https://www.linkedin.com/in/rain-jocas-34866a262/" target= "_blank"><Linkedin/></a>
                <div className="px-2"></div>
                <a href="https://github.com/rainjocas" target= "_blank"><Github/></a>
            </nav>
        </div>
    </div>
);