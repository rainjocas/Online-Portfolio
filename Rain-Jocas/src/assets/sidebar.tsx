import React from 'react';

// Define props interface
interface MySVGProps {
    className: string;
    onClick?: () => void; // Optional onClick function
    onKeyDown?: () => void; // Optional onKeyDown function
}

/**
 * HamburgerSVG component:
 * This component is the mobile nav, where when clicked displays the mobile nav
 * @param className - Styling for HamburgerSVG
 * @param onClick - Optional parameter when clicked will set the value of what the function specifies in the call
 * @param onKeyDown - Optional parameter when key down set the value of what the function specifies in the call
 */

const HamburgerSVG: React.FC<MySVGProps> = ({ className, onClick, onKeyDown}) => (
    <svg 
        aria-label="Sidebar Button"
        xmlns="http://www.w3.org/2000/svg" 
        fill="1A7260" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="#2E6F40" 
        className={className}
        onClick={onClick} // Pass onClick handler to svg element
        onKeyDown={onKeyDown} // Pass onKeyDown handler to svg element
        tabIndex={0} // Ensure the svg is focusable for keyboard events
        role="button" // Describe the svg element as a button for accessibility
    >
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export default HamburgerSVG;