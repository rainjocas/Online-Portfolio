import React from "react";
import {PageWrapper} from "../pageSections/PageWrapper";
import Button from "../components/Button";
import WriteUp from "../assets/ClusteringComparisons.pdf";
import Clustering from "../assets/Clustering.zip";
import textGeneration from "../assets/Clustering.zip";
import coinGame from "../assets/CoinGame.zip"
import { LeftUpBubble, RightUpBubble } from "../components/SideBubble";

const aiProjectDescription = (
  <>
  <p className="px-5 py-4 text-blueBlack text-lg">
    Clustering is a form of classification which groups items into clusters of other similar 
    items. Unlike classic classification models, clustering does not require that you already 
    know what the classes are. Some forms of clustering require that you know the number of classes, 
    while some do not.  K-Means is a unique case where it can be implemented in such a way where you 
    must already know the number of classes, or where you do not. Because Clustering does not 
    require knowledge of the specific classes, it opens up more possibilities for classification.
  </p>
  <p className="px-5 text-blueBlack text-lg">
    For this problem, I compared the results of the k-Means and DBSCAN algorithms, based on measures 
    of correctness and efficiency. I hypothesized that DBSCAN would be more efficient than k-means 
    as it is non-iterative. I believed K-Means would be more accurate if K is equal or close to the 
    true number of classes. However, in cases where k is significantly smaller or larger than the 
    number of classes, I hypothesized that DBSCAN would be more accurate.
  </p>
  </>
);

const wordGenDescription = (
  <p className="pt-4 pb-5 px-5 text-blueBlack text-lg">This project reads an input text, builds a SequenceTable,
    and generates and prints a randomly-generated string based on the probabilities of the input text, 
    and on K. K is the number of characters surrounding each character that the program looks at when 
    solving for the probability of how likely each character is to follow after each other character
  </p>
);

const coinGameDescription = (
  <p className="pt-4 pb-5 px-5 text-blueBlack text-lg">
    This is a small terminal-based two player game based on a coin strip. Each player inputs their 
    move when prompted. Each move consists of the coin being moved, and the number of spaces it is
    moving. For example "0 3" moves coin 0 to 3 spaces to the left. Coins cannot jump over other
    coins, and if there is not enough space for it to move the specified number of spaces, it won't
    move at all. The goal of the game is to get all the coins as far left as possible. The first
    player to do so wins.
  </p>
);

const Projects: React.FC = () => {
    return (
      <PageWrapper>
        <main>
          <div className="pt-20 pr-12">
            <LeftUpBubble>
            <h2 className="text-2xl text-paleBlue">Unsupervised Machine Learning   RJ</h2>
            <h3 className="text-lg text-paleBlue">A comparative analysis of K-Means and DBSCAN clustering algorithms</h3>
            </LeftUpBubble>
          </div>
            {aiProjectDescription}
          <div className="flex flex-row justify-center space-x-10 py-5">
            <Button src={Clustering} target={"_blank"}>Code Deliverables</Button>
            <Button src={WriteUp} target={"_blank"}>Project Write Up</Button>
          </div>
          <div className="pt-10 pl-12">
            <RightUpBubble>
              <h2 className="text-2xl text-paleBlue">Text Generator</h2>
              <h3 className="text-lg text-paleBlue">Probability Based Character Generation</h3>
            </RightUpBubble>
          </div>
          {wordGenDescription}
          <Button src={textGeneration} target={"_blank"}>Code Deliverables</Button>
          <div className="pt-10 pr-12">
            <LeftUpBubble>
              <h2 className="text-2xl text-paleBlue h-16 content-center">Coinstrip Game</h2>
            </LeftUpBubble>
          </div>
          {coinGameDescription}
          <Button src={coinGame} target={"_blank"}>Code Deliverables</Button>
          <div className="pt-20"></div>
        </main>
      </PageWrapper>
    );
  };
  
  export default Projects;