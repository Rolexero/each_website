"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import animationData from "../../../public/assets/paintinganime.json";

export interface whydata {
  heading: string;
  subheading?: string;
}

const whydata: whydata[] = [
  {
    heading: "Quality",
    subheading:
      "Follow a hashtag growth total posts, videos and images.more revitions",
  },
  {
    heading: "Communication",
    subheading:
      "Follow a hashtag growth total posts, videos and images.more revitions",
  },
  {
    heading: "Reliability",
    subheading:
      "Follow a hashtag growth total posts, videos and images.more revitions",
  },
];

const Why = () => {
  return (
    <motion.div id="about">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMN-1 */}
          <motion.div
            className="order-last md:order-first"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Lottie animationData={animationData} />

            {/* <Image
              src="/assets/why/iPad.png"
              alt="iPad-image"
              width={4000}
              height={900}
            /> */}
          </motion.div>

          {/* COLUMN-2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
              About Us
            </h3>
            <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
              Dont waste time on search manual tasks. Let Automation do it for
              you. Simplify workflows, reduce errors, and save time.
            </h4>

            <div className="mt-10">
              {whydata.map((items, i) => (
                <div className="flex mt-4" key={i}>
                  <div className="rounded-full h-10 w-20 md:w-12 flex items-center justify-center bg-circlebg">
                    <Image
                      src="/assets/why/check.svg"
                      alt="check-image"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-2xl font-semibold">{items.heading}</h4>
                    <h5 className="text-lg text-beach font-normal mt-2">
                      {items.subheading}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Why;
