import React from "react";
import Link from "next/link";

const reviewData = [
  {
    id: 1,
    reviewerName: "Admond Tamang",
    reviewDesc: "This is the best hostel in nepal",
    pics: "/images/hostel.jpg",
  },
  {
    id: 2,
    reviewerName: "Admond Tamang",
    reviewDesc: "This is the best hostel in nepal",
    pics: "/images/hostel.jpg",
  },
  {
    id: 3,
    reviewerName: "Admond Tamang",
    reviewDesc: "This is the best hostel in nepal",
    pics: "/images/hostel.jpg",
  },
  {
    id: 4,
    reviewerName: "Admond Tamang",
    reviewDesc: "This is the best hostel in nepal",
    pics: "/images/hostel.jpg",
  },
];
const BlogDetails = () => {
  return (
    <div>
      <div className="SectionBlogDetails px-8 py-4 mx-4 ">
        <div className="max-w-screen-lg mx-auto space-y-5">
          <Link
            className="transition-colors hover:text-white duration-300 Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-purple-800 bg-purple-100 hover:bg-purple-800"
            href="/blog-single##"
          >
            boys hostel
          </Link>

          <h1
            className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl "
            title="Quiet ingenuity: 120,000 lunches and counting"
          >
            What is Hostel?
          </h1>

          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
            A hostel is a lower-priced inn of sorts that offers basic, shared
            accommodations. Typically, a hostel features a large room with
            separate beds, a shared bathroom, and a communal kitchen. Some
            hostels have private rooms, but the lower-cost ones generally offer
            bunk beds. Hostels originated in Europe, but they’ve grown in
            popularity and you can find them all over the world.
          </span>

          <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
          <div className="flex items-baseline sm:flex-row sm:justify-between">
            <div className="lex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0 flex-row">
              <div className="ml-3">
                <div className="flex items-center">
                  <Link className="block font-semibold" href="/blog">
                    Admond tamang
                  </Link>
                </div>
                <div className="text-xs mt-[6px]">
                  <span className="text-neutral-700 dark:text-neutral-300">
                    May 20, 2021
                  </span>
                  <span className="mx-2 font-semibold">·</span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    6 min read
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container my-10 sm:my-12 " data-id="NcImage">
            <img
              src="/images/blogs/slider/1.jpeg"
              className="w-full rounded-xl"
              alt="imgs"
            />
          </div>

          <div className="SingleContent container space-y-10">
            <div
              id="single-entry-content"
              className="prose dark:prose-invert prose-sm !max-w-screen-lg sm:prose lg:prose-lg mx-auto dark:prose-dark"
            >
              <p className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
                Hostels work sort of like hotels, but with a few differences.
                Just like with a hotel, it’s best to make a reservation
                beforehand, though many hostels keep a few beds open each night
                for drop-ins. Unlike hotels, many hostels have curfews; if you
                arrive after curfew, you will be locked out for the night. This
                is done as a common courtesy to other guests and to the staff.
                Hostels keep prices low by using a shared room instead of
                individual, private ones, and only providing the most basic
                amenities.
              </p>
              <p className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
                Hostel vs hotel: The biggest difference between a hostel and a
                hotel is that in a hotel, you’re guaranteed a private room and
                your own bathroom. As mentioned above, a hostel differs here
                because spaces are shared. The communal bathroom has shower
                stalls, for example, and the kitchen is available for travelers
                to cook their own meals (rather than having the option of
                ordering meals like you’d find in a hotel). And hostels by
                nature are more social, while hotels offer more privacy.
              </p>

              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Hostel requirements:
              </h2>
              <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400 pb-4">
                <li>At least 10 characters (and up to 100 characters)</li>
                <li>At least one lowercase character</li>
                <li>Inclusion of at least one special character</li>
              </ul>

              <figure>
                <img
                  src="/images/blogs/slider/1a.jpeg"
                  className="rounded-2xl"
                />
                <div className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1 py-4">
                  Hostels are an excellent option for a number of reasons. Say
                  you’re volunteering abroad with a large group and want to hang
                  out together – you can opt for a large bunk room for an
                  extremely affordable price. Or, if you want to meet loads of
                  amazing new people, a hostel is a wonderful way to meet fellow
                  travelers. Here are a few more reasons to stay in a hostel:
                </div>
              </figure>
              <p className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1 py-4">
                Depending on where you go and the room type you choose, you can
                book a hostel for as little as $10 per night. Whether you’re
                volunteering abroad or aiming for budget travel, a hostel will
                give you a place to sleep for a fraction of the price of a
                hotel. By the way, if you’re researching hostels because you’re
                looking for an affordable way to travel, check out our travel
                guide on cheap volunteer programs, where you can food and
                accommodations for as low as $8 per day by volunteering
                overseas.
              </p>
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Price:
              </h2>
              <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400 pb-4">
                <li>At least 10 characters (and up to 100 characters)</li>
                <li>At least one lowercase character</li>
                <li>Inclusion of at least one special character</li>
              </ul>
              <p className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1 py-">
                If you love meeting new people, a hostel is right up your alley.
                Hostels are known for their social life, as the shared rooms
                naturally break down barriers. You can meet all kinds of
                interesting people, from backpackers to world travelers. People
                from all different countries stay in hostels – strike up a
                conversation and make new friends!
              </p>
            </div>

            <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
            <div className="max-w-screen-md mx-auto ">
              <div className="SingleAuthor flex">
                <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-11 h-11 md:w-24 md:h-24 ring-1 ring-white dark:ring-neutral-900">
                  <img
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                    src="/images/blogs/slider/1a.jpeg"
                    alt="John Doe"
                  />
                  <span className="wil-avatar__name">J</span>
                </div>
                <div className="flex flex-col ml-3 max-w-lg sm:ml-5 space-y-1">
                  <span className="text-xs text-neutral-400 uppercase tracking-wider">
                    WRITEN BY
                  </span>
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
                    <Link href="">Admond tamang</Link>
                  </h2>
                  <span className="text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
                    I am the writer of this blog
                  </span>
                </div>
              </div>
            </div>
            <div className="max-w-screen-md mx-auto pt-5">
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Responses (14)
              </h3>

              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="max-w-screen-md mx-auto">
              {reviewData.map((row, index) => (
                <ul key={index} className="comments space-y-5 py-2">
                  <li>
                    <div className="CommentCard flex ">
                      <div className="pt-1">
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-6 h-6 sm:h-8 sm:w-8  ring-1 ring-white dark:ring-neutral-900">
                          <img
                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                            src={row.pics}
                            alt="John Doe"
                          />
                          <span className="wil-avatar__name">J</span>
                        </div>
                      </div>
                      <div className="flex-grow flex flex-col p-4 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700">
                        <div className="relative flex items-center pr-6">
                          <Link
                            className="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
                            href="/ncmaz/author/the-demo-author-slug"
                          >
                            {row.reviewerName}
                          </Link>
                          <span className="mx-2">·</span>
                          <span className="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm">
                            May 20, 2021
                          </span>
                        </div>
                        <span className="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300">
                          {row.reviewDesc}
                        </span>
                        <div>
                          <button
                            className="inline-flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none "
                            title="Reply"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-[18px] w-[18px] mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                              ></path>
                            </svg>
                            <span className="text-xs leading-none text-neutral-900 dark:text-neutral-200">
                              Reply
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <ul className="pl-4 mt-5 space-y-5 md:pl-11">
                      <li>
                        <div className="CommentCard flex ">
                          <div className="pt-1">
                            <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-6 h-6  ring-1 ring-white dark:ring-neutral-900">
                              <img
                                className="absolute inset-0 w-full h-full object-cover rounded-full"
                                src={row.pics}
                                alt="John Doe"
                              />
                              <span className="wil-avatar__name">J</span>
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col p-4 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700">
                            <div className="relative flex items-center pr-6">
                              <Link
                                className="flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100"
                                href=""
                              >
                                {row.reviewerName}
                              </Link>
                              <span className="mx-2">·</span>
                              <span className="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm">
                                May 20, 2021
                              </span>
                            </div>
                            <span className="block text-neutral-700 mt-2 mb-3 sm:mt-3 sm:mb-4 dark:text-neutral-300">
                              {row.reviewDesc}
                            </span>
                            <div>
                              <button
                                className="inline-flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none "
                                title="Reply"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-[18px] w-[18px] mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>
                                <span className="text-xs leading-none text-neutral-900 dark:text-neutral-200">
                                  Reply
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
