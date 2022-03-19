import React from "react";

export default function HomePage() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            align="justify"
          >
            National-Scale Flood Risk Assessment Using GIS and Remote
            Sensing-Based Hybridized Deep Neural Network and Fuzzy Analytic
            Hierarchy Process: A Case of Bangladesh
          </h1>
          <p className="mb-8 leading-relaxed" align="justify">
            Assessing flood risk is challenging due to complex interactions
            among flood susceptibility, hazard, exposure, and vulnerability
            parameters. This study presents a novel flood risk assessment
            framework by utilizing a hybridized deep neural network (DNN) and
            fuzzy analytic hierarchy process (AHP) models. Bangladesh was
            selected as a case study region, where limited literature examined
            flood risk at a national scale. The results showed that hybridized
            DNN and fuzzy AHP models can produce the most accurate flood risk
            map while comparing among 15 different models. About 20.45% of
            Bangladesh are at flood risk zones of moderate, high, and very high
            severity. The northeastern region, as well as areas adjacent to the
            Ganges–Brahmaputra–Meghna rivers, have high flood damage potential,
            where a significant number of people were affected during the 2020
            flood event. The risk assessment framework developed in this study
            would help policymakers formulate a comprehensive flood risk
            management system.
          </p>
        </div>
      </div>
    </section>
  );
}
