import React from "react";
import {PageWrapper} from "../pageSections/PageWrapper";
import Button from "../components/Button";
import WriteUp from "../assets/ClusteringComparisons.pdf"
import Clustering from "../assets/Clustering.zip"
import { LeftUpBubble } from "../components/SideBubble";
//import {Section} from "../pageSections/Section";

const Projects: React.FC = () => {
    return (
      <PageWrapper>
          <div className="pt-20"></div>
          <LeftUpBubble>
            <h2 className="text-2xl text-lightBlue">Unsupervised Machine Learning</h2>
            <h3 className="text-lg text-lightBlue">A comparative analysis of K-Means and DBSCAN clustering algorithms</h3>
          </LeftUpBubble>
            <p className="px-5 py-4 text-blueBlack">Clustering is a form of classification which groups items into clusters of other similar items. Unlike classic classification models, clustering does not require that you already know what the classes are. Some forms of clustering require that you know the number of classes, while some do not.  K-Means is a unique case where it can be implemented in such a way where you must already know the number of classes, or where you do not. Because Clustering does not require knowledge of the specific classes, it opens up more possibilities for classification.
            </p>
            <p className="px-5 text-blueBlack">
            For this problem, I compared the results of the k-Means and DBSCAN algorithms, based on measures of correctness and efficiency. I hypothesized that DBSCAN would be more efficient than k-means as it is non-iterative. I believed K-Means would be more accurate if K is equal or close to the true number of classes. However, in cases where k is significantly smaller or larger than the number of classes, I hypothesized that DBSCAN would be more accurate.
            </p>
            <div className="flex flex-row justify-center space-x-10 py-5">
              <Button src={Clustering} target={"_blank"}>Code Deliverables</Button>
              <Button src={WriteUp} target={"_blank"}>Project Write Up</Button>
              </div>
      </PageWrapper>
    );
  };
  
  export default Projects;