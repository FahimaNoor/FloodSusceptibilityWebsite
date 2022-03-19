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
            <div className="border-gray-200 border-t mt-4 pt-4 text-center"></div>
            <h1
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
              align="center"
            >
              Study Area
            </h1>
            <div className="border-gray-200 border-t mt-4 pt-4 text-center"></div>
            <div className="mt-10 pt-4 text-center"></div>
            <div align="center">
              <Image
                src="/Study Area.jpg"
                alt="Study Area.jpg"
                width={650}
                height={650}
              />
              <figcaption className="mt-4 pt-4" >Figure- Study Area: Bangladesh</figcaption>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="border-gray-200 border-t mt-4 pt-4 text-center">
                <p className="leading-relaxed text-lg mb-4" align="justify">
                  The present study focused on Bangladesh. Geographically, the
                  country is located in South Asia, between the latitudes of
                  20°34′ and 26°38′ to the north and longitudes of 88°01′ and
                  92°41′ to the east. More than 162.7 million people inhabit the
                  country, with an annual population growth rate of 1.37%,
                  within an area of 1,47,570 km<sup>2</sup>. Thus, Bangladesh
                  has the highest population density in the world, with a
                  density of approximately 1,063 people per km<sup>2</sup>. The
                  country is characterized by five topographic regions —
                  Chittagong, Tippera-Comilla, north Bengal, northeastern, and
                  southwestern regions — comprising 64 districts, eight
                  divisions, and 492 subdistricts. It includes three major river
                  systems: the Ganges, Meghna, and Brahmaputra, with numerous
                  distributaries and tributaries. The geographical location,
                  flat topography, and tropical climatic conditions of
                  Bangladesh make it one of the world's most flood-prone areas.
                  The yearly average precipitation generally ranges between 2200
                  and 2500 mm. Annual mean temperature ranges between 25 °C and
                  35 °C. Almost 80% of the total landmass of Bangladesh is
                  fertile alluvial lowlands. The rest of the country slightly
                  elevated older plains and small hilly regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
