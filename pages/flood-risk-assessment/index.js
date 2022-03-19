import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";

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
              Flood Risk Assessment
            </h1>
            <div className="border-gray-200 border-t mt-4 pt-4 text-center"></div>
            <div className="mt-10 pt-4 text-center"></div>
            <div align="center">
              <Image
                src="/FloodRisk.jpg"
                alt="FloodRisk.jpg"
                width={650}
                height={650}
              />
              <figcaption className="mt-4 pt-4" >Figure- Flood risk map of Bangladesh</figcaption>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="border-gray-200 border-t mt-4 pt-4 text-center">
                <p className="leading-relaxed text-lg mb-4">
                  <em>
                    Flood Risk=Flood Hazard×Flood Exposure×Flood Vulnerability
                  </em>
                </p>
                <p className="leading-relaxed text-lg mb-4" align="justify">
                  We estimated flood risk to be the product of flood hazard,
                  exposure, and vulnerability. From the generated flood risk
                  map, about 20.45% of the area is categorized as flood risk
                  zones, where the percentages of moderate, high, and very high
                  flood risk-prone zones are 13.37%, 5.44%, and 1.64%,
                  respectively. The northeastern region of Bangladesh, as well
                  as areas near the GBM rivers, have high flood damage
                  potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
