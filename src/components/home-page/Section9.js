import React from "react";
import Link from "next/link";

const blogData = [
  {
    id: 1,
    Desc: "This is the best Hostel ever made",
    CategoryName: "boys hostel",
    Location: "kathmandu",
    PublisherName: "Admond Tamang",
    blogPicz: "images/hostel.jpg",
  },
  {
    id: 2,
    Desc: "Best hostel in pokhara for students",
    CategoryName: "Annapurna Hostel",
    Location: "pokhara",
    PublisherName: "Admond Tamang",
    blogPicz: "images/hostel.jpg",
  },
  {
    id: 3,
    Desc: "This is the best Hostel ever made",
    CategoryName: "boys hostel",
    Location: "kathmandu",
    PublisherName: "Admond Tamang",
    blogPicz: "images/hostel.jpg",
  },
  {
    id: 4,
    Desc: "This is the best Hostel ever made",
    CategoryName: "boys hostel",
    Location: "kathmandu",
    PublisherName: "Admond Tamang",
    blogPicz: "images/hostel.jpg",
  },
  {
    id: 5,
    Desc: "This is the best Hostel ever made",
    CategoryName: "boys hostel",
    Location: "kathmandu",
    PublisherName: "Admond Tamang",
    blogPicz: "images/hostel.jpg",
  },
];

const Section9 = () => {
  return (
    <div className="SliderSection px-4 py-8 2xl:px-16">
      <div className="SectionSliderNewCategories flow-root">
        <div className="Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between text-neutral-900 dark:text-neutral-50">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold">Our Blogs</h2>
            <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
              Descriptions for blogs
            </span>
          </div>
          <Link href="/blog">
            <div className="pr-4 dark:text-white">View All</div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
          {/* top 4 card */}
          {blogData.slice(0, 4).map((row, index) => (
            <div
              key={index}
              class=" card relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group shadow-md dark:bg-[#262626]"
            >
              <Link href="/blog/blog-details">
                <div class="imgs">
                  <img
                    src={row.blogPicz}
                    class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    alt="img"
                  />
                </div>
              </Link>
              <div>
                <div class="absolute"></div>
              </div>
              <div class="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
                <span class="inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100">
                  {row.CategoryName}
                </span>
                <Link href="/blog/blog-details">
                  <h2 class="block text-lg font-semibold text-black dark:text-white">
                    <span class="line-clamp-2">{row.Desc}</span>
                  </h2>
                </Link>
                <div class="flex">
                  <span class="block text-black hover:text-black font-medium truncate dark:text-white">
                    {row.PublisherName}
                  </span>
                  <span class="mx-1.5 font-medium">·</span>
                  <span class="font-normal truncate">May 20, 2021</span>
                </div>
              </div>
              <a href="/chisfis/blog-single"></a>
            </div>
          ))}
          {/* card closes*/}
        </div>
      </div>
    </div>
  );
};

export default Section9;
