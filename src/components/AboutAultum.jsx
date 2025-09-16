import { useMemo } from "react";
import bgImage from "../assets/hero-image.png";
import brand1 from "../assets/graymaterial2.png";
import brand2 from "../assets/cobrother.png";
import brand3 from "../assets/batteryfy.png";
import brand4 from "../assets/checkdam3.png";
import brand5 from "../assets/aultum-dc.png";
import brand6 from "../assets/aultum-dg.png";
import brand9 from "../assets/Aultum-cs.png";
import brand10 from "../assets/Aultum-pd.png";
const BrandCard = ({ img, name, description }) => (
  <div className="bg-gray-50 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
    <img
      src={img}
      alt={`${name} logo`}
      className="w-full h-40 object-contain"
      loading="lazy"
    />
    <div className="p-5">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  </div>
);

export default function AboutAultum() {
  const brands = useMemo(
    () => [
      {
        name: "Gray material",
        img: brand1,
        description:
          "Supplier of high-quality construction materials like M-Sand, cement, and more.",
      },
      {
        name: "Batteryfy",
        img: brand3,
        description: "Innovative energy storage and EV solutions.",
      },
      {
        name: "Cobrother",
        img: brand2,
        description: "Real estate and community solutions for all.",
      },
      {
        name: "Checkdam",
        img: brand4,
        description:
          "Smart irrigation and Agri solutions for farmers everywhere.",
      },

      {
        name: "Dry Chilli",
        img: brand5,
        description:
          "Storage and supply chain for dry chillies across regions.",
      },
      {
        name: "Dry Grains",
        img: brand6,
        description: "Efficient storage and distribution of dry grains.",
      },
      {
        name: "Co Sister",
        img: brand9,
        description: "Beauty and care products for every woman.",
      },
      {
        name: "Pregadays",
        img: brand10,
        description: "Pregnancy care essentials for every mom-to-be.",
      },
    ],
    []
  );

  return (
    <div className="bg-white text-gray-900">
      {/*  Hero Section */}

      <section
        className="relative h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-green-500">Aultum</span>
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Driving sustainable innovation across industries, building solutions
            that matter today and tomorrow.
          </p>
          <a
            href="#brands"
            aria-label="Explore our brands section"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Explore Our Brands
          </a>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Our Story
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Founded with the vision of creating a greener, smarter future, Aultum
          leads multiple ventures across energy, infrastructure, real estate,
          and agriculture. We believe in sustainable growth and innovative
          solutions that positively impact people and the planet.
        </p>
      </section>

      {/*  Vision Section */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Our Vision
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            To be a leader in sustainability-driven industries by providing
            innovative solutions across energy, construction, agriculture, and
            real estate. We aim to empower communities while fostering
            eco-friendly development.
          </p>
        </div>
      </section>

      {/*  Plan Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Our Plan
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We focus on building strong, scalable brands that address real-world
          challenges. From sustainable energy solutions with Batteryfy to
          efficient water conservation with Checkdam, Aultum ensures innovation
          meets impact.
        </p>
      </section>

      {/*  Motto Section */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Motto</h2>
          <p className="mt-4 text-lg text-gray-600 italic">
            "Innovating for a Sustainable Tomorrow."
          </p>
        </div>
      </section>

      {/*  Brands Section */}
      <section id="brands" className="py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Brands</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the diverse ventures under Aultum, each dedicated to
            sustainability and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {brands.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </div>
      </section>
    </div>
  );
}