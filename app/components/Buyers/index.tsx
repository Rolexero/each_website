"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import animationData from "../../../public/assets/paintinganime.json";
import { whydata } from "../Why";

const ProductsData: whydata[] = [
  {
    heading: "Emulsion",
  },
  {
    heading: "Matte emulsion",
  },
  {
    heading: "Silk",
  },
  {
    heading: "Satin",
  },
  {
    heading: "Water Shield",
  },
  {
    heading: "Gloss paints",
  },
  {
    heading: "Marine paints",
  },
  {
    heading: "Texcoat",
  },
  {
    heading: "Stucco paints",
  },
];

const Buyers = () => {
  return (
    <div id="products">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMN-1 */}
          <div className="order-last md:order-first">
            <Lottie animationData={animationData} />

            {/* <Image
              src="/assets/why/iPad.png"
              alt="iPad-image"
              width={4000}
              height={900}
            /> */}
          </div>

          {/* COLUMN-2 */}
          <div>
            <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
              Our Products
            </h3>
            <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
              Dont waste time on search manual tasks. Let Automation do it for
              you. Simplify workflows, reduce errors, and save time.
            </h4>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 place-items-start">
              {ProductsData.map((items, i) => (
                <div className="flex mt-4 " key={i}>
                  <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                    <Image
                      src="/assets/why/check.svg"
                      alt="check-image"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="ml-5 ">
                    <h4 className="text-2xl font-semibold">{items.heading}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyers;
