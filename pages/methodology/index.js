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
              Methodology
            </h1>
            <div className="border-gray-200 border-t mt-4 pt-4 text-center"></div>
            <div className="mt-10 pt-4 text-center"></div>
            <div align="center">
              <Image
                src="/Methodology.jpg"
                alt="Methodology.jpg"
                width={1000}
                height={600}
              />
              <figcaption className="mt-4 pt-4" >Figure- Flowchart of this study</figcaption>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="border-gray-200 border-t mt-4 pt-4 text-center">
                <p className="leading-relaxed text-lg mb-4" align="justify">
                  This study aimed to present a flood risk assessment framework
                  using hybridized DNN and fuzzy AHP models, hypothesizing that
                  the use of hybridized models would improve the accuracy of
                  flood risk models. Hence, we developed and evaluated the
                  performance of fifteen models including twelve standalone and
                  hybridized ML models and three conventional ML models. The
                  results exhibit the efficacy of the hybridized DNN
                  architectures over all other models. This is a first attempt
                  to combine hybridized DNN architectures with fuzzy AHP models
                  to assess flood risk in a complex flood regime like deltaic
                  Bangladesh. The study was conducted in five steps:
                </p>
                <div className="flex flex-col sm:flex-row mt-10"></div>
                <h1
                  className="title-font font-medium text-lg mb-2 text-gray-900"
                  align="justify"
                >
                  Firstly, various flood conditioning factors were identified
                  for developing a flood susceptibility model.
                </h1>
                <p className="leading-relaxed text-lg mb-4" align="justify">
                  In this study, initially, thirteen flood causative factors
                  were chosen based on the topographical, hydrological,
                  locational, geological, and anthropogenic characteristics of
                  the study area. Selected factors include slope, aspect,
                  curvature, elevation, Stream Power Index (SPI), flow
                  accumulation, Topographic Wetness Index (TWI), soil
                  permeability, soil texture, land use/land cover (LULC),
                  geology, distance to rivers, and drainage density. The
                  thematic maps for all thirteen flood causative factors were
                  developed at a spatial resolution of 30 m.
                </p>

                <div className="flex flex-col sm:flex-row mt-10"></div>
                <h1
                  className="title-font font-medium text-lg mb-2 text-gray-900"
                  align="justify"
                >
                  Secondly, flood susceptibility models were developed based on
                  different standalone and hybridized DNN and SVR models, as
                  well as other conventional ML models (e.g., conditional
                  inference tree, KNN, and MLP).
                </h1>
              </div>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row mb-4 "></div>
              <div className="leading-relaxed text-lg mb-4">
                <dl>
                  <dt>The deep neural network models used are:</dt>
                  <dd> 1. ADAM-ReLU-Sigmoid-DNN</dd>
                  <dd> 2. ADAM-ReLU-Softmax-DNN</dd>
                  <dd> 3. L2-ADAM-ReLU-Sigmoid-DNN</dd>
                  <dd> 4. L2-ADAM-ReLU-Softmax-DNN</dd>
                  <dd> 5. Dropout-ADAM-ReLU-Sigmoid-DNN</dd>
                  <dd> 6. Dropout-ADAM-ReLU-Softmax-DNN</dd>
                  <div className="flex flex-col sm:flex-row mb-4"></div>

                  <dt>Support Vector Regression Models used are:</dt>
                  <dd> 1. SVR</dd>
                  <dd> 2. Gaussain RBF-SVR</dd>
                  <dd> 3. GA-Gaussian RBF-SVR</dd>
                  <dd> 4. GA-Laplacian RBF-SVR</dd>
                  <dd> 5. GA-MLP-SVR</dd>
                  <dd> 6. GA-Linear-SVR</dd>

                  <div className="flex flex-col sm:flex-row mb-4"></div>
                  <dt>Conventional Machine Learning Models are:</dt>
                  <dd> 1. Conditional Inference Tree</dd>
                  <dd> 2. k-Nearest Neighbours (KNN)</dd>
                  <dd> 3. Multilayer Perceptron (MLP)</dd>
                </dl>
              </div>
              <div
                className="flex flex-col sm:flex-row mb-4 "
                align="justify"
              ></div>
              <h1
                className="title-font font-medium text-lg mb-2 text-gray-900"
                align="justify"
              >
                Thirdly, based on several evaluation metrics, the
                best-performing method was chosen for mapping the flood
                susceptibility.
              </h1>
              <div className="flex flex-col sm:flex-row mb-4">
                <p className="leading-relaxed text-lg mb-4" align="justify">
                  For identifying the best performing flood susceptibility
                  model, this study estimated values of various cutoff-dependent
                  and cutoff-independent validation indicators. The indices
                  include receiver operating characteristic (ROC) and area under
                  the receiver operating characteristic (AUROC) curves, kappa
                  statistic, overall accuracy (OA), positive predictive value
                  (PPV), negative predictive value (NPV), sensitivity,
                  specificity, and MSE. We used Youden’s index for estimating
                  the optimal cutoff point and binarized the predicted flood
                  susceptibility scores by the models. We also estimated the
                  seed cell area index (SCAI) values for validation and
                  comparison of flood susceptibility, hazard, exposure,
                  vulnerability, and risk models.
                </p>
              </div>
              <h1
                className="title-font font-medium text-lg mb-2 text-gray-900"
                align="justify"
              >
                Fourthly, flood hazard, exposure, and vulnerability maps were
                developed using the fuzzy AHP method, where the best-performing
                flood susceptibility map was used to model flood hazards
              </h1>
              <div className="flex flex-col sm:flex-row mb-4">
                <p className="leading-relaxed text-lg mb-4" align="justify">
                  Comparing the model performance using different statistical
                  indices, the best-performing flood susceptibility map turns
                  out to be the{" "}
                  <strong>
                    hybridized L2 – ADAM – ReLU – Sigmoid – DNN model{" "}
                  </strong>{" "}
                  for mapping flood susceptibility in Bangladesh.
                </p>
              </div>
              <h1
                className="title-font font-medium text-lg mb-2 text-gray-900"
                align="justify"
              >
                Finally, a flood risk map was developed by integrating flood
                hazard, exposure, and vulnerability maps.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
