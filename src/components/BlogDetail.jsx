import React, { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../data/blogs.js";

const BlogHero = ({ title, image }) => (
  <header className="relative w-full h-[450px] overflow-hidden">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center px-4">
        {title}
      </h1>
    </div>
  </header>
);

const OutlineSection = ({ outline }) =>
  outline?.map((item, index) => (
    <section key={index} className="mb-10">
      <h2 className="font-semibold text-2xl mb-3 text-gray-900">
        {item.subHeading}
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
      <p className="text-gray-700 leading-relaxed">{item.subDescription}</p>
    </section>
  ));

const SectionBlock = ({ sections }) =>
  sections?.map((item, index) => (
    <section key={index} className="mb-10">
      {item.Heading && (
        <>
          <hr className="my-6 border-gray-300" />
          <h3 className="font-semibold text-2xl mb-3 text-gray-900">
            {item.Heading}
          </h3>
        </>
      )}
      <h4 className="font-semibold text-xl text-gray-800 mb-2">
        {item.subHeading}
      </h4>
      <p className="text-gray-700 leading-relaxed">{item.description}</p>
    </section>
  ));

const ConclusionBlock = ({ conclusion }) => (
  <>
    <hr className="my-8 border-gray-300" />
    <h5 className="font-semibold text-2xl mb-4">Conclusion</h5>
    {conclusion?.map((item, index) => (
      <div key={index} className="mb-6">
        {item.one && <p className="text-gray-700 mb-2">{item.one}</p>}
        {item.two && <p className="text-gray-700 mb-2">{item.two}</p>}
        <div className="flex items-center gap-2">
          <p className="text-gray-700">{item.three}</p>
          {item.url && (
            <a
              href={item.url}
              className="text-green-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          )}
        </div>
      </div>
    ))}
  </>
);

const FAQAccordion = ({ faqs }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 transition"
            aria-expanded={openFAQ === index}
            aria-controls={`faq-content-${index}`}
          >
            {index + 1}. {faq.question}
            <span className="ml-2 text-green-600">
              {openFAQ === index ? "−" : "+"}
            </span>
          </button>
          {openFAQ === index && (
            <div
              id={`faq-content-${index}`}
              className="p-4 pt-0 text-gray-700 leading-relaxed"
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const BlogDetail = () => {
  const { id } = useParams();

  //  useMemo to avoid recalculation
  const blog = useMemo(() => blogs.find((b) => b.id === Number(id)), [id]);

  if (!blog) {
    return <div className="text-center mt-10 text-red-500">Blog not found</div>;
  }

  return (
    <article className="w-full flex flex-col">
      {blog.image && <BlogHero title={blog.title} image={blog.image} />}

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Meta Description */}
        {blog.metaDescription && (
          <p className="text-lg text-gray-600 italic mb-8 border-l-4 border-green-600 pl-4">
            {blog.metaDescription}
          </p>
        )}

        {/* Outline */}
        <OutlineSection outline={blog.outline} />

        {/* Sections */}
        <SectionBlock sections={blog.sections} />

        {/* Conclusion */}
        <ConclusionBlock conclusion={blog.conclusion} />

        {/* FAQs */}
        {blog.faqs?.length > 0 && (
          <>
            <hr className="my-8 border-gray-300" />
            <h5 className="font-semibold text-2xl mb-6">FAQs</h5>
            <FAQAccordion faqs={blog.faqs} />
          </>
        )}

        {/* Back Button */}
        <div className="mt-12">
          <Link
            to="/what-we-think"
            className="text-green-600 hover:text-green-800 font-medium"
          >
            ← Go Back
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
