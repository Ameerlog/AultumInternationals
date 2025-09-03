// import personImage from "../assets/pic2.jpg";
// import img1 from "../assets/pic3.jpg";
// import img2 from "../assets/pic4.jpg";
// import img3 from "../assets/pic5.jpg";

import personImage from "../assets/pic6.png";
import img1 from "../assets/pic7.png";
import img2 from "../assets/pic8.png";
import img3 from "../assets/pic9.png";

import brand1 from "../assets/graymaterial2.png";
import brand2 from "../assets/cobrother.png";
import brand3 from "../assets/batteryfy.png";
import brand4 from "../assets/Picture1.png";
import brand5 from "../assets/drychilli.png";
import brand6 from "../assets/drygrains.png";

//  Extracted data arrays
const quotes = [
  {
    img: img1,
    text: "Efficiency is doing things right; execution is doing the right things.",
  },
  {
    img: img2,
    text: "Execution turns strategies into results with clarity and precision.",
  },
  {
    img: img3,
    text: "Great companies are built on flawless execution and vision.",
  },
];

const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

const QuoteCard = ({ img, text }) => (
  <div className="relative rounded-2xl overflow-hidden shadow-lg">
    <img
      src={img}
      alt="Execution showcase"
      className="w-full h-72 object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
      <p className="text-white text-lg italic text-center">{text}</p>
    </div>
  </div>
);

const BrandLogo = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-44 aspect-video object-contain flex-shrink-0"
  />
);

const ExecutionSection = () => {
  return (
    <section className="bg-gray-300 py-16 px-6 md:px-12" id="next-section">
      <div className="max-w-6xl mx-auto">
        {/* First Section - Text + Image */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Turning Strategy into Seamless Execution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our execution strategy focuses on precision, innovation, and
              agility. We believe in breaking down complex challenges into
              clear, actionable steps that deliver measurable results. Through
              collaboration, technology, and expertise, we execute projects that
              exceed client expectations and set new benchmarks for efficiency
              and effectiveness.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={personImage}
              alt="Professional executing strategy"
              className="rounded-2xl shadow-lg w-full h-96 max-w-md object-cover"
            />
          </div>
        </div>

        {/* Second Section - Quotes */}
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, index) => (
            <QuoteCard key={index} img={q.img} text={q.text} />
          ))}
        </div>

        {/* Brands Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Work in Action
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll justify-center items-center">
              {[...brands, ...brands].map((brand, index) => (
                <BrandLogo
                  key={index}
                  src={brand}
                  alt={`Brand logo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionSection;
