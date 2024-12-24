import React, { ReactElement } from "react";

/**
 * Bubble props:
 */
type bubbleProps = {
    children:  React.ReactNode[] | React.ReactNode;
  };

  /**
   * LeftBubble component:
   * Displays a colored ovular that juts off to the left side, and contains information inside
   * @param children
   */
  export const LeftBubble: React.FC<bubbleProps> = ({
    children }) => {
    return (
        <div className="py-2 flex flex-row left-0 px-2 max-w-2/3 rounded-r-full transform -translate-x-0.5 bg-theme_blue"
          style={{
            backgroundSize: "contain",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}>
            {children}
        </div> 
    );
  }


  /**
   * rightBubble component:
   * Displays a colored ovular that juts off to the left side, and contains information inside
   * @param children
   */
  export var RightBubble: React.FC<bubbleProps> = ({
    children }) => {
    return (
        <div className="py-2 flex flex-row right-0 px-2 rounded-l-full max-w-1/3 transform translate-x-0.5 bg-theme_blue"
          style={{
            backgroundSize: "contain",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}>
            {children}
        </div> 
    );
  }

  /**
   * LeftUpBubble component:
   * Displays a colored ovular that juts off to the left side, and contains information inside,
   * text is arranged flex-col rather than flex-row
   * @param children
   */
  export const LeftUpBubble: React.FC<bubbleProps> = ({
    children }) => {
    return (
        <div className="py-2 left-0 px-2 h-25 rounded-r-full transform -translate-x-0.5 bg-theme_blue"
          style={{
            backgroundSize: "contain",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}>
            {children}
        </div> 
    );
  }

    /**
   * RightUpBubble component:
   * Displays a colored ovular that juts off to the right side, and contains information inside,
   * text is arranged flex-col rather than flex-row
   * @param children
   */
    export const RightUpBubble: React.FC<bubbleProps> = ({
      children }) => {
      return (
          <div className="py-2 left-0 px-2 h-25 rounded-l-full transform translate-x-0.5 bg-theme_blue"
            style={{
              backgroundSize: "contain",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}>
              {children}
          </div> 
      );
    }