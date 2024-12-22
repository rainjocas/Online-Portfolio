import React from "react";
import {PageWrapper} from "../pageSections/PageWrapper";
import Button from "../components/Navigation/Button";
import WriteUp from "../assets/ClusteringComparisons.pdf"
import Clustering from "../assets/Clustering.zip"
//import {Section} from "../pageSections/Section";

const Projects: React.FC = () => {
    return (
      <PageWrapper>
          <p className="py-5">
            Congratulations, you've reached the Projects page
          </p>
          <h2 className="text-2xl">Unsupervised Machine Learning</h2>
          <h3 className="text-lg">A comparative analysis of K-Means and DBSCAN clustering algorithms</h3>
            <p className="px-5 py-4">Clustering is a form of classification which groups items into clusters of other similar items. Unlike classic classification models, clustering does not require that you already know what the classes are (Cluster Analysis). Some forms of clustering require that you know the number of classes, while some do not.  K-Means is a unique case where it can be implemented in such a way where you must already know the number of classes, or where you do not (K-Means Clustering). Because Clustering does not require knowledge of the specific classes, it opens up more possibilities for classification. Take for example our residential building scenario. What would you do if you did not know all of the residence types? In that scenario you could use clustering algorithms to classify our data.
            </p>
            <div className="flex flex-row justify-center space-x-10 py-5">
              <Button src={Clustering} target={"_blank"}>Code Deliverables</Button>
              <Button src={WriteUp} target={"_blank"}>Project Write Up</Button>
              </div>
      </PageWrapper>
    );
  };
  
  export default Projects;