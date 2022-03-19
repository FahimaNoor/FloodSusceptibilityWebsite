import React from "react";
import Image from 'next/image'
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
              Flood Inventory Mapping
            </h1>
            <div className="border-gray-200 border-t mt-4 pt-4 text-center"></div>
            <div>
              <Image src="/Flood Inventory.jpg" alt='Flood Inventory.jpg' width={800} height={500} />
            </div>
            <figcaption className="mt-4 pt-4" align='center'>Figure- Map of Bangladesh with sample flood locations</figcaption>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="border-gray-200 border-t mt-4 pt-4 text-center">
                <p className="leading-relaxed text-lg mb-4" align='justify'>
                  The flood inundation areas of historical flood events are
                  typically used as a dependent variable for modeling flood
                  susceptibility. Inundation data, of three different periods
                  (July 12-21, July 23-27, and July 29-August 02) in the monsoon
                  season of 2020, were collected from the United Nations
                  Institute for Training and Research (UNITAR). The UNITAR used
                  Sentinel-1 satellite data to detect inundated areas (UNITAR
                  2020). The obtained inundation vector files were then
                  converted to raster layers at 30 m resolution to ensure
                  agreement with the digital elevation model (DEM) used in this
                  study. The inundation raster layer was binarized — non-flood
                  and flood locations were labeled as 0 and 1, respectively. The
                  combined flood inundation map was utilized to produce sample
                  flood and non-flood points. A total of 2,766 sample points
                  (flood points – 1408 and non-flood points – 1358) were created
                  using the stratified random sampling technique. The stratified
                  random sampling technique divides a population into smaller
                  homogeneous subgroups known as strata. The strata are
                  constructed depending on the members' shared characteristics
                  or attributes. This technique has been widely used in flood
                  modeling due to its ability to reduce bias in the sample. The
                  sample points were split into two groups: 70% of the total
                  sample points (983 flood points, 953 non-flood points) was
                  considered to train the flood susceptibility model while the
                  other 30% sample (425 flood points, 405 non-flood points) was
                  employed to test the model. To reduce model overfitting, this
                  study applied a 10-fold cross-validation technique to further
                  divide the train set (70% sample points) into train and
                  validation sets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
