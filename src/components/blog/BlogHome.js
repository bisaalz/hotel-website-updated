import React from "react";
import Link from "next/link";
import Layouts from "../../layout/Layouts";
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
    blogPicz: "images/hostel2.jpg",
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

const tagsData = [
  {
    id: 1,
    TagName: "Outdoor",
    TagNum: 12,
  },
  {
    id: 2,
    TagName: "Health",
    TagNum: 12,
  },
  {
    id: 3,
    TagName: "Electronics",
    TagNum: 12,
  },
  {
    id: 4,
    TagName: "Industrial",
    TagNum: 12,
  },
  {
    id: 5,
    TagName: "Toys",
    TagNum: 12,
  },
  {
    id: 6,
    TagName: "Sports",
    TagNum: 12,
  },
  {
    id: 7,
    TagName: "Automotive",
    TagNum: 12,
  },
  {
    id: 8,
    TagName: "Computers",
    TagNum: 12,
  },
  {
    id: 9,
    TagName: "Design",
    TagNum: 12,
  },
];

const recentblogData = [
  {
    id: 1,
    PublisherName: "Admond Tamang",
    blogDesc: "This is the best hostel in nepal",
    pics: "images/hostel.jpg",
  },
  {
    id: 2,
    PublisherName: "Admond Tamang",
    blogDesc: "This is the best hostel in nepal",
    pics: "images/hostel.jpg",
  },
  {
    id: 3,
    PublisherName: "Admond Tamang",
    blogDesc: "This is the best hostel in nepal",
    pics: "images/hostel.jpg",
  },
  {
    id: 4,
    PublisherName: "Admond Tamang",
    blogDesc: "This is the best hostel in nepal",
    pics: "images/hostel.jpg",
  },
  {
    id: 5,
    blogName: "Kathmandu Hostel",
    blogDesc: "This is the best hostel in nepal",
    pics: "images/hostel.jpg",
  },
];

const BlogHome = () => {
  return (
    <Layouts>
      <div className="pt-16">
        <div className="SectionBlog px-12 py-4 mx-4 my-12">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
              <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-semibold">
                    Latest Articles
                  </h2>
                  <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
                    Popular hostel to we have recommends for you
                  </span>
                </div>
              </div>
              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-8">
                {/* card */}
                {blogData.map((row, index) => (
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

            <div className="w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 ">
              {/* tags */}
              <div className="rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <div className="flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 ">
                  <h2 className="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">
                    Discover hostel by Tags
                  </h2>
                  <Link
                    href="/"
                    className="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
                  >
                    View all
                  </Link>
                </div>
                <div className="flex flex-wrap p-4 xl:p-5">
                  {tagsData.map((row, index) => (
                    <Link
                      key={index}
                      href="/"
                      className="inline-block bg-white text-sm text-neutral-6000 dark:text-neutral-300 py-2 px-3 rounded-lg border border-neutral-100 md:py-2.5 md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
                    >
                      {row.TagName}
                      <span className="text-xs font-normal"> {row.TagNum}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* recent posts */}
              <div className="rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <div className="flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 ">
                  <h2 className="text-lg text-neutral-900 dark:text-neutral-100 font-semibold flex-grow">
                    Popular Posts
                  </h2>
                  <Link
                    className="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
                    href="/"
                  >
                    View all
                  </Link>
                </div>
                {recentblogData.map((row, index) => (
                  <div
                    key={index}
                    className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700"
                  >
                    <div className="elative flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700">
                      <div className="relative space-y-2">
                        <div className="inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm leading-none">
                          <Link
                            className="flex-shrink-0 relative flex items-center space-x-2"
                            href="/"
                          >
                            <div className="relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
                              <img
                                className="absolute inset-0 w-full h-full object-cover rounded-full"
                                src={row.pics}
                                alt="Tousy Vita"
                              />
                              <span className="wil-avatar__name">T</span>
                            </div>
                            <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
                              {row.PublisherName}
                            </span>
                          </Link>
                          <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                            ·
                          </span>
                          <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
                            May 20, 2021
                          </span>
                        </div>
                        <h2 className="block text-base font-semibold text-neutral-900 dark:text-neutral-100">
                          <Link
                            className=" line-clamp-2"
                            title="New tools for Black pregnant and postpartum mothers to save lives"
                            href="#"
                          >
                            {row.blogDesc}
                          </Link>
                        </h2>
                      </div>
                      <Link
                        title="New tools for Black pregnant and postpartum mothers to save lives"
                        className="block sm:w-20 flex-shrink-0 relative rounded-lg overflow-hidden mb-5 sm:ml-4 sm:mb-0 group"
                        href="#"
                      ></Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default BlogHome;
