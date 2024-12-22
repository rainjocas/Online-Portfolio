import * as React from "react";

/**
 * NavLink Props
 * @param src, where it is being linked to
 * @param children, the children of the component
 */
type NavLinkProps = {
    src: string,
    children: React.ReactNode[] | React.ReactNode;
};

/**
 * Navlink Component
 * A navigation link styled for this project
 */
const NavLink: React.FC<NavLinkProps> = ({ 
    src, children,
}) => {
    return (
        <a href = {src} className="no-underline text-offWhite font-bold h-10 pt-2 -py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-lightGreen hover:animate-pulse hover:text-darkPurple transition-colors">{children}</a>
    );
}

export const NavLinkMobile: React.FC<NavLinkProps> = ({ 
    src, children,
}) => {
    return (
        <a href = {src} className="no-underline text-darkGreen font-bold h-10 pt-2 -py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-pine hover:animate-pulse hover:text-offWhite transition-colors">{children}</a>
    );
}

export default NavLink;