import AnchorLink from "react-anchor-link-smooth-scroll";
import Typewriter from "typewriter-effect";
import Img1 from "../../assets/hero1.jpg";
import Img2 from "../../assets/hero2.jpg";
import { color } from "@chakra-ui/react";

const Hero = () => {
  return (
    <div className="w-full mt-28 md:mt-5">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1024px] mx-auto min-h-[650px]">


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


        <div className="relative w-full min-h-[300px] md:w-1/2 mt-3 md:mt-0">
          <div className="h-[300px] absolute -left-8 top-0 w-[400px] rounded-lg md:rotate-[30deg] scale-[.7] shadow-2xl md:-top-10 md:w-[400px] md:scale-[0.8] rotate-0">
            <img
              src={Img1}
              alt="shopping"
              className="max-h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="h-[350px] w-[400px] absolute -right-8 top-10 rounded-lg scale-[0.65] md:-rotate-[20deg] shadow-2xl md:left-48 md:-top-32 md:scale-[0.65] rotate-0">
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
