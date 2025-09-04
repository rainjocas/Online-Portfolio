import React from "react";
import { SVGProps } from "react";

/**
 * Linkedin Component:
 * React SVG of the linkedin logo
 */
const Home = (props: SVGProps<SVGSVGElement>) => (
    <svg
        aria-label="Home Button"
        xmlns = "http://www.w3.org/2000/svg"
        width = "40"
        height = "40"
        viewBox = "0 0 512 512"
        fill = "#F58549"
        >
        <polygon
            points="416 174.74 416 48 336 48 336 106.45 256 32 0 272 64 272 64 480 208 480 208 320 304 320 304 480 448 480 448 272 512 272 416 174.74"
        />
    </svg> 
);

export default Home;