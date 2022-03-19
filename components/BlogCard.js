import Link from "next/link";
export default function BlogCard() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              CATEGORY
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              Data
            </h2>
            <p className="leading-relaxed mb-8">
              The indicators used for flood susceptibility, hazard, exposure,
              and vulnerability modeling are taken from various sources.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <Link href="/data">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              CATEGORY
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              Flood Inventory Mapping
            </h2>
            <p className="leading-relaxed mb-8" align='justify'>
              The flood inundation areas of historical flood events are
              typically used as a dependent variable for modeling flood
              susceptibility. Inundation data, of three different periods (July
              12-21, July 23-27, and July 29-August 02) in the monsoon season of
              2020, were collected from the United Nations Institute for
              Training and Research (UNITAR). The UNITAR used Sentinel-1
              satellite data to detect inundated areas (UNITAR 2020).
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <Link href="/flood-inventory-mapping">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
