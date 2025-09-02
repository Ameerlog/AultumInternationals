import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blogs.js";

function WhatWeThinkComponent() {
  // Memoize blogs to avoid recalculating on re-renders
  const blogList = useMemo(() => blogs, []);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          What We Think
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our perspectives on sustainability, innovation, and the
          evolving future of technology.
        </p>
      </div>

      {/* Blogs Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogList.map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Image with hover zoom */}
            <div className="overflow-hidden relative">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Optional category tag */}
              {item.category && (
                <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
                  {item.category}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-5 line-clamp-3 flex-grow">
                {item.metaDescription}
              </p>

              {/* Read More always at bottom */}
              <Link
                to={`/blog/${item.id}`}
                className="mt-auto inline-flex items-center text-green-600 font-medium hover:text-green-700 transition"
              >
                Read More
                <svg
                  className="ml-2 w-4 h-4 transform hover:translate-x-1 transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(WhatWeThinkComponent);