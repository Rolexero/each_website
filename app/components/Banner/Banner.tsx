import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <main id="home">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-10 banner-image">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-6xl md:4px ">
              Elegance Allied Chemicals <br /> and Paints Limited
              {/* <br /> integrated agency. */}
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              We sell the best paints and paints chemicals at shipping prices.
              Our luxurious paints are exclusive. Our <br />
              luxurious paints are exclusive. We sell the best paints and paints
              chemicals at shipping prices. Our luxurious paints are exclusive.{" "}
            </p>
          </div>

          <div className="text-center mt-5">
            <button
              type="button"
              className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton"
            >
              Get a quote
            </button>
            <Link
              href={"#about"}
              type="button"
              className="text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton"
            >
              More info
            </Link>
          </div>

          <Image
            src={"/paint.jpg"}
            alt="banner-image"
            width={1200}
            height={598}
            className="mt-10"
          />
        </div>
      </div>
    </main>
  );
};

export default Banner;
