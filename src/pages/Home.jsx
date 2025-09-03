import React, { useCallback, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
// import bgImage from "../assets/pic1.jpg";
import bgImage from "../assets/pic2.png";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  // Memoized handler to scroll smoothly
  const handleScrollDown = useCallback(() => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
      aria-label="Hero Section"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl md:max-w-full px-6">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
          Transforming complexity into simplicity
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-gray-100">
          Eliminate inefficiencies and accelerate growth with streamlined,
          agile, and future-ready supply chains.
        </p>
        <button
          type="button"
          className="bg-white text-black px-6 py-3 font-semibold shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition rounded-full"
        >
          Learn More
        </button>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-24 flex justify-center w-full">
        <button
          onClick={handleScrollDown}
          aria-label="Scroll to next section"
          className="p-2 rounded-full focus:outline-none "
        >
          <FaChevronDown className="text-white text-2xl animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default React.memo(Home);
