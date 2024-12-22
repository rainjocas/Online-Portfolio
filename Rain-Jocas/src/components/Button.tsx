import * as React from "react";

/**
 * NavLink Props
 * @param src, where it is being linked to
 * @param children, the children of the component
 */
type ButtonProps = {
    src: string,
    target: string
    children: React.ReactNode[] | React.ReactNode;

};

/**
 * Navlink Component
 * A navigation link styled for this project
 */
const Button: React.FC<ButtonProps> = ({ 
    src, target, children
}) => {
    return (
        <a href = {src}
        className="no-underline bg-violet text-palePurple font-bold py-2 px-2 rounded-lg transition duration-300 ease-in-out hover:bg-theme_pink hover:text-darkPurple transition-colors"
        target = {target}>{children}</a>
    );
}

export default Button;