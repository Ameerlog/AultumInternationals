import React from "react";
import { FaChevronDown } from "react-icons/fa";
import bgImage from "../assets/pic1.jpg";

const Home = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl md:max-w-full px-6">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Transforming complexity into simplicity
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Eliminate inefficiencies and accelerate growth with streamlined,
          agile, and future-ready supply chains.
        </p>
        <button className="bg-white text-black px-6 py-3 font-semibold shadow-md hover:bg-gray-200 transition rounded-full">
          Learn More
        </button>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-24 flex justify-center w-full">
        <FaChevronDown
          className="text-white text-2xl animate-bounce"
          style={{ background: "transparent" }}
        />
      </div>
    </section>
  );
};

export default Home;
