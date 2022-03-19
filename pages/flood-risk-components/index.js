import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function index() {
  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="border-gray-200 border-t mt-4 pt-4 text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Flood Risk Components
              </h1>
              <div className="border-gray-200 border-t mt-4 pt-4 text-center"></div>
              <div className="flex flex-col sm:flex-row mt-10"></div>
              <h2
                className="text-gray-900 text-lg title-font font-medium mb-2"
                align="left"
              >
                <em>Flood Susceptibility Mapping</em>
              </h2>
              <p className="leading-relaxed text-lg mb-4" align="justify">
                An extremely useful way of predicting future floods is Flood
                Susceptibility Mapping (FSM). For the study, the flood
                susceptibility map is produced using the{" "}
                <strong>
                  hybridized L2 – ADAM – ReLU – Sigmoid – DNN model
                </strong>{" "}
                as it yielded the highest prediction accuracy, resulting in a
                good agreement with the flood inundation map of Bangladesh in
                2020.
              </p>
              <div className="flex flex-col sm:flex-row mt-10"></div>
              <h2
                className="text-gray-900 text-lg title-font font-medium mb-2"
                align="left"
              >
                <em>Flood Hazard</em>
              </h2>
              <p className="leading-relaxed text-lg mb-4" align="justify">
                Flood hazard typically involves flooding factors that can be
                hazardous to the environment. This study considered flood
                susceptibility, flood depth, and rainfall to develop a flood
                hazard map of Bangladesh. Rainfall is a crucial hydrological
                factor for flood hazard mapping. In Bangladesh, both short-term
                heavy rainfall and long-term low to moderate rainfall are
                accountable for flooding. Rainfall can cause hydrostatic
                pressure, promoting a higher water level in the major rivers.
                Flood hazard score was estimated using the following equation:
              </p>
              <p className="leading-relaxed text-lg mb-4">
                <em>
                  Flood Hazard Score= A<sub>1</sub>×Flood Susceptibility Score+
                  B<sub>1</sub>×Flood Depth+C<sub>1</sub> ×Rainfall,
                </em>
              </p>
              <p className="leading-relaxed text-lg mb-4" align="justify">
                where A<sub>1</sub>, B<sub>1</sub>, and C<sub>1</sub> are the
                weights of flood susceptibility, flood depth, and rainfall,
                respectively. In this study, a fuzzy AHP model was utilized due
                to its higher prediction accuracy. First, fuzzy pairwise
                comparison matrices of the criteria and sub-criteria were
                developed using the triangular fuzzy numbers (TFN) of the scale
                of Saaty on relative importance. Then weights of different
                criteria and the local weights of their sub-criteria were
                generated. We also conducted a pairwise comparison of each
                alternative against every sub-criterion. Global weights of all
                sub-criterion were estimated by multiplying the weight of each
                criterion by their local weights. The flood susceptibility
                parameter was given the most importance, followed by rainfall
                and flood depth. From the flood hazard map, it could be seen
                that Southwestern and northeastern Bangladesh, as well as areas
                adjacent to major rivers, are high hazard zones.
              </p>
              <div className="flex flex-col sm:flex-row mt-10"></div>
              <h2
                className="text-gray-900 text-lg title-font font-medium mb-2"
                align="left"
              >
                <em>Flood Exposure</em>
              </h2>
              <p className="leading-relaxed text-lg mb-4" align="justify">
                Flood exposure generally refers to the spatial elements that are
                at risk due to flooding. This study considered the distance to
                river, LULC, and population density to develop a flood exposure
                map of Bangladesh. Flood-prone areas with a high population
                density are more vulnerable to flooding than areas with a low
                density. LULC and distance to the river are important factors in
                determining flood exposure. The flood exposure score was
                estimated using the following equation:
              </p>
              <p className="leading-relaxed text-lg mb-4">
                <em>
                  Flood Exposure Score= A<sub>2</sub>×Distance to River + B
                  <sub>2</sub>×LULC + C<sub>2</sub>×Population Density,
                </em>
              </p>
              <p className="leading-relaxed text-lg mb-4" align="justify">
                where A<sub>2</sub>, B<sub>2</sub>, and C<sub>2</sub> are the
                weights of distance to river, LULC, and population,
                respectively. For designing fuzzy pairwise comparison matrices
                of criteria and sub-criteria for flood exposure modeling, the
                population density parameter was prioritized for its positive
                association with exposure, followed by LULC and distance to
                river. In flood exposure maps, about 40% of the country is
                categorized as moderate to very high magnitudes.
              </p>
              <div className="flex flex-col sm:flex-row mt-10"></div>
              <h2
                className="text-gray-900 text-lg title-font font-medium mb-2"
                align="left"
              >
                <em>Flood Vulnerability</em>
              </h2>
              <p className="leading-relaxed text-lg mb-4" align="justify">
                Flood vulnerability is typically correlated with the type of
                infrastructures as well as characteristics of the communities in
                flood-prone areas. This study considered road density, age, and
                poverty to develop a flood vulnerability map of Bangladesh.
                Generally, flood-prone areas with a high road density are
                vulnerable to flooding. The population age structure is also a
                useful flood vulnerability indicator. A high percentage of
                children and older people increase the flood vulnerability of an
                area. Also, an area with a high poverty ratio becomes vulnerable
                to flooding. Flood vulnerability score was estimated using:
              </p>
              <p className="leading-relaxed text-lg mb-4">
                <em>
                  Flood Vulnerability Score= A<sub>3</sub>×Road Density + B
                  <sub>3</sub>×Age+ C<sub>3</sub>×Poverty (Wealth Index),
                </em>
              </p>
              <p className="leading-relaxed text-lg mb-4" align="justify">
                where A<sub>3</sub>, B<sub>3</sub>, and C<sub>3</sub> are the
                generated weights of road density, age, and poverty respectively
                utilizing the fuzzy AHP model. Here, poverty (wealth index) was
                given the highest preference (Pham et al. 2021a), followed by
                age and road density. The generated flood vulnerability map
                shows that about 69% of Bangladesh is vulnerable (moderate to
                very high) to flooding. The highest weight for the parameter
                wealth index (WI) indicates that the economic status of the
                people is one of the major determining flood vulnerability
                factors. Areas characterized by a low wealth index are highly
                vulnerable to flooding.
              </p>
            </div>
          </div>
        </div>
        <div align="center">
          <Image
            src="/FloodMaps.jpg"
            alt="FloodMaps.jpg"
            width={800}
            height={800}
          />
          <figcaption className="mt-4 pt-4">
            Figure- (a) Flood susceptibility, (b) flood hazard, (c) flood
            exposure and
          </figcaption>
          <figcaption>(d) flood vulnerability maps of Bangladesh</figcaption>
          <div className="flex flex-col sm:flex-row mt-10"></div>
        </div>
      </section>
    </div>
  );
}
