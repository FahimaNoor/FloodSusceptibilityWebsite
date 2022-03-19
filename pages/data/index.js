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
              Data
            </h1>
            <div className="border-gray-200 border-t mt-4 pt-4 text-center"></div>
            <div>
              <Image src="/Feature1.jpg" alt='Feature1.jpg' width={5100} height={8581} />
            </div>
            <div>
              <Image src="/Feature2.jpg" alt='Feature2.jpg' width={5100} height={8581} />
            </div>
            <figcaption align='center' >Figure- Thematic layers of various indicators for modeling flood risk </figcaption>
            <div className="border-gray-200 border-t mt-4 pt-10 text-center"></div>
            <div className="flex flex-col sm:flex-row mt-10">
              <table>
                <tbody>
                  <tr>
                    <th>No.</th>
                    <th>Factors</th>
                    <th>Spatial resolution</th>
                    <th>Variable type</th>
                    <th>Source</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Elevation</td>
                    <td>30 m</td>
                    <td>Numeric</td>
                    <td>(JAXA 2015)</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Slope</td>
                    <td>30 m</td>
                    <td>Numeric</td>
                    <td>Derived from DEM</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Aspect</td>
                    <td>30 m</td>
                    <td>Categorical</td>
                    <td>Derived from DEM</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Curvature</td>
                    <td>30 m</td>
                    <td>Categorical</td>
                    <td>Derived from DEM</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Flow Accumulation</td>
                    <td>30 m</td>
                    <td>Numeric</td>
                    <td>Derived from DEM</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>SPI</td>
                    <td>30 m</td>
                    <td>Numeric</td>
                    <td>Derived from DEM</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>TWI</td>
                    <td>30 m</td>
                    <td>Numeric</td>
                    <td>Derived from DEM</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Soil Permeability</td>
                    <td>30 m</td>
                    <td>Categorical</td>
                    <td>(BARC 2014)</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Soil Texture</td>
                    <td>30 m</td>
                    <td>Categorical</td>
                    <td>(BARC 2014)</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>LULC</td>
                    <td>10 m</td>
                    <td>Categorical</td>
                    <td>(Karra et al. 2021)</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Geology</td>
                    <td>30 m</td>
                    <td>Categorical</td>
                    <td>(Persists et al. 2001)</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Distance to River</td>
                    <td>30 m</td>
                    <td>Numeric</td>
                    <td>(WARPO 2018)</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Drainage Density</td>
                    <td>30 m</td>
                    <td>Numeric</td>
                    <td>Derived from DEM</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Flood Depth</td>
                    <td>30 m</td>
                    <td>Categorical</td>
                    <td>(BARC 2014)</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Rainfall</td>
                    <td>11.1 km</td>
                    <td>Categorical</td>
                    <td>(Huffman et al. 2019)</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Population Density (Population per Cell)</td>
                    <td>100 m</td>
                    <td>Numeric</td>
                    <td>(WorldPop 2020)</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Age (Less than 14 and Greater than 60)</td>
                    <td>100 m</td>
                    <td>Categorical</td>
                    <td>(Bondarenko et al. 2020)</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>Poverty (Wealth Index)</td>
                    <td>60 m – 5 km</td>
                    <td>Numeric</td>
                    <td>(Steele et al. 2017)</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>Road Density</td>
                    <td>30 m</td>
                    <td></td>
                    <td>(WARPO 2018)</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-10"></div>
      </section>
    </div>
  );
}
