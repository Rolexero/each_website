"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface datatype {
  imgSrc: string;
  country: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/assets/provide/marketing.svg",
    country: "Professional House Painting",
    paragraph: "Follow a hashtag total posts, videos",
  },
  {
    imgSrc: "/assets/provide/graphic.svg",
    country: "Sales of Paint Chemicals",
    paragraph: "Follow a hashtag total posts, videos",
  },
  {
    imgSrc: "/assets/provide/heaking.svg",
    country: "Production of paints",
    paragraph: "Follow a hashtag total posts, videos",
  },
  {
    imgSrc: "/assets/provide/heaking.svg",
    country: "Consultation",
    paragraph: "Follow a hashtag total posts, videos",
  },
  {
    imgSrc: "/assets/provide/heaking.svg",
    country: "Paint accessories",
    paragraph: "Follow a hashtag total posts, videos",
  },
];

const Provide = () => {
  return (
    <div id="services">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMN-1 */}
          <motion.div
            className="col-span-6 flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col align-middle justify-center p-2 md:p-4">
              <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81  text-center lg:text-start">
                We provide that service.
              </p>
              <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo
              </h4>
            </div>
          </motion.div>

          <div className="lg:col-span-1"></div>

          {/* COLUMN-2 */}
          <motion.div className="col-span-6 lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl">
              {Aboutdata.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl"
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    width={64}
                    height={64}
                    className="mb-5"
                  />
                  <h4 className="text-2xl font-semibold">{item.country}</h4>
                  <h4 className="text-lg font-normal text-bluegray my-2">
                    {item.paragraph}
                  </h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
