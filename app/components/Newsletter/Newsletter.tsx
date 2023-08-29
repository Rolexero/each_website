"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="-mt-2 relative z-3">
      <div className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="hidden lg:block">
            <div className="float-right pt-20 relative">
              <Image
                src={"/assets/newsletter/bgImage.png"}
                alt="bgimg"
                width={588}
                height={334}
              />
              <div className="absolute bottom-8 left-2">
                <Image
                  src={"/assets/newsletter/circel.svg"}
                  alt="circleimg"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          {/* COLUMN-2 */}
          <motion.div
            className="p-10 flex flex-col justify-center"
            initial={{ opacity: 1 }}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}
            variants={{
              visible: { opacity: 1, y: -10 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white">
              {" "}
              Get in Touch !
            </h3>
            <h4 className="text-base font-normal mb-7 text-offwhite">
              Craven omni memoria patriae zombieland clairvius narcisse
              religionis sunt diri undead historiarum.
            </h4>
            <div className="flex gap-6 flex-col">
              <input
                type="text"
                name="full_name"
                className="py-4 text-sm w-full text-black bg-white rounded-lg pl-4"
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                className="py-4 text-sm w-full text-black bg-white rounded-lg pl-4"
                placeholder="abc@gmail.com"
              />{" "}
              <input
                type="text"
                name="subject"
                className="py-4 text-sm w-full text-black bg-white rounded-lg pl-4"
                placeholder="Subject"
              />{" "}
              <textarea
                name="message"
                className="py-4 text-sm w-full text-black bg-white rounded-lg pl-4"
                placeholder="Message"
              />
            </div>
            <button
              type="button"
              className="text-15px text-blue font-medium bg-white py-5 px-2 mt-8 hover:bg-lightblue leafbutton"
            >
              Send
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
