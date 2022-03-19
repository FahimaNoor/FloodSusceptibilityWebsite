import React from "react";

export default function About() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About
          </h1>
          <p className="mb-8 leading-relaxed">
            This work is supported by the ICT Innovation Fund (2020-21) provided
            by the ICT Division, Ministry of Post, Telecommunication and
            Information Technology of the People’s Republic of Bangladesh.
          </p>
        </div>
      </div>
    </section>
  );
}
