import React from "react";

interface SkipLinkProps {
    skipTo: string;
  }
  
  /**
   * Allows users to skip to a part of the page, for accessibility purposes
   */
  const SkipLink: React.FC<SkipLinkProps> = (props) => {
    return (
      <a
        href={props.skipTo}
        aria-label="skip-to-main-content-link"
        className=""
        style={{
          position: "absolute",
          left: "-999px",
          width: "1px",
          height: "1px",
          top: "auto"
        }}
      ></a>
    );
  }
  
  export default SkipLink;