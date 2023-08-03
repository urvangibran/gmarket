import AnchorLink from "react-anchor-link-smooth-scroll";
import Typewriter from "typewriter-effect";
import Img1 from "../../assets/hero1.jpg";
import Img2 from "../../assets/hero2.jpg";
import { color } from "@chakra-ui/react";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1024px] mx-auto min-h-[650px] flex items-center justify-between">


        <div className="text-center lucida ml-10 md:ml-0 md:text-start mt-[-5rem] ">
          <h1 className="text-gray-900 leading-[3rem] font-bold text-4xl">
            Discover the most <br /> exquisite <span> </span>
            <Typewriter
              options={{
                strings: ["Shoes", "Clothings", "Electronics", "Jewelleries", "Computer", "Laptop"],
                autoStart: true,
                loop: true,
              }}
            />
            <br /> options at prices <br /> that cannot be <br /> beaten  {" "}
          </h1>
          <p className="arial my-4 text-sm font-sans text-gray-700 max-w-sm">
            Upgrade your collections <span className="text-[#2c7da0]">with</span> the latest brand items, all at <span className="text-[#2c7da0]">unbeatable</span> prices.
            <span className="block mt-1 font-semibold text-[#2c7da0]">Start your rebranding journey now!</span>
          </p>

          <AnchorLink href="#products">
            <button
              className="text-white font-semibold border-2 border-[#2C7DA0] bg-[#2C7DA0] rounded-md py-1 px-3 hover:bg-white hover:text-[#2C7DA0] transition-colors duration-300"
            >
              Shop Now
            </button>
          </AnchorLink>
        </div>


        <div className="relative min-h-[600px] flex items-center ml-10">
          <div className="h-[300px] hidden md:block absolute  -left-[30rem] top-30 w-[400px] rounded-lg rotate-[30deg] scale-[.7] shadow-2xl">
            <img
              src={Img1}
              alt="shopping"
              className="max-h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="h-[350px] w-[400px] hidden md:block absolute -left-[18rem] top-10 rounded-lg scale-[0.65] -rotate-[20deg] shadow-2xl">
            <img
              src={Img2}
              alt="shopping"
              className="max-h-full min-w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
