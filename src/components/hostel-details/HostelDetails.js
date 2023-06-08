import React from "react";
import {
  FaWater,
  FaRegUser,
  FaSignal,
  FaBath,
  FaLaptopHouse,
} from "react-icons/fa";
import Lightbox from "../common/lightbox";
import Link from "next/link";

import { BsCalendarDate, BsCheck2Square } from "react-icons/bs";

const HostelDetails = () => {
  return (
    <div className="SliderSection px-4 py-4">
      <Lightbox />
      <div className="   md:flex md:gap-4">
        <div className="blog-details-left md:w-3/5 w-full mb-10 md:mb-0 ">
          <div className="information border-[1px] border-[#eaeaea] rounded-[24px] p-8">
            <h2 className="text-2xl font-semibold">Stay information</h2>
            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 pb-4"></div>
            <div className="text-neutral-6000 dark:text-neutral-300 pb-2 font-light tracking-wide pt-4">
              <span className="mt-4">
                Providing lake views, The Symphony 9 Tam Coc in Ninh Binh
                provides accommodation, an outdoor swimming pool, a bar, a
                shared lounge, a garden and barbecue facilities. Complimentary
                WiFi is provided.
              </span>
              <br />
              <br />
              <span>
                There is a private bathroom with bidet in all units, along with
                a hairdryer and free toiletries.
              </span>
              <br /> <br />
              <span>
                The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental
                service and a car rental service are available at the
                accommodation, while cycling can be enjoyed nearby.
              </span>
            </div>
          </div>

          <div className="information border-[1px] border-[#eaeaea] rounded-[24px] p-8 mt-8">
            <h2 className="text-2xl font-semibold">What this place offers</h2>
            <p className="font-light py-4">
              About the propertys amenities and services
            </p>
            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 pb-2"></div>
            <div className="text-neutral-6000 dark:text-neutral-300 pb-2 font-light tracking-wide">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 pt-4">
                <div className="flex items-center space-x-3">
                  <FaWater />
                  <span className=" ">Waterfront</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaLaptopHouse />
                  <span className=" ">Kitchen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaSignal />
                  <span className=" ">Wifi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaBath />
                  <span className=" ">bathtub</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaLaptopHouse />
                  <span className=" ">Balcony</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaLaptopHouse />
                  <span className=" ">Free Driveway</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaLaptopHouse />
                  <span className=" ">Free Washer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="information border-[1px] border-[#eaeaea] rounded-[24px] p-8 mt-8">
            <h2 className="text-2xl font-semibold">Room Rates</h2>
            <p className="font-light py-4">
              Prices may increase on weekends or holidays
            </p>
            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 pb-2"></div>

            <div className="overflow-x-auto relative sm:rounded-lg pt-4">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Days
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Monday - Thursday
                    </th>
                    <td className="py-4 px-6">$2999</td>
                  </tr>
                  <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Monday - Thursday
                    </th>
                    <td className="py-4 px-6">$1999</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Friday - Sunday
                    </th>
                    <td className="py-4 px-6">$99</td>
                  </tr>
                  <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Rent by month
                    </th>
                    <td className="py-4 px-6">$799</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="information border-[1px] border-[#eaeaea] rounded-[24px] p-8 mt-8">
            <h2 className="text-2xl font-semibold">Room Rates</h2>
            <p className="font-light py-4">Reviews (23 reviews)</p>
            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 pb-2"></div>

            <article>
              <div class="flex items-center mb-4 space-x-4">
                <img
                  class="w-10 h-10 rounded-full"
                  src="/images/blogs/slider/review.webp"
                  alt=""
                />
                <div class="space-y-1 font-medium dark:text-white">
                  <p>
                    Jese Leos{" "}
                    <time
                      datetime="2014-08-16 19:00"
                      class="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined on August 2014
                    </time>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-1">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Thinking to buy another one!
                </h3>
              </div>
              <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  Reviewed in the United Kingdom on{" "}
                  <time datetime="2017-03-03 19:00">March 3, 2017</time>
                </p>
              </footer>
              <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
                This is my third Invicta Pro Diver. They are just fantastic
                value for money. This one arrived yesterday and the first thing
                I did was set the time, popped on an identical strap from
                another Invicta and went in the shower with it to test the
                waterproofing.... No problems.
              </p>
              <p class="mb-3 font-light text-gray-500 dark:text-gray-400">
                It is obviously not the same build quality as those very
                expensive watches. But that is like comparing a Citroën to a
                Ferrari. This watch was well under £100! An absolute bargain.
              </p>
              <Link
                href="#"
                className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Read more
              </Link>
              <aside>
                <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  19 people found this helpful
                </p>
                <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                  <Link
                    href="#"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Helpful
                  </Link>
                  <Link
                    href="#"
                    class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Report abuse
                  </Link>
                </div>
              </aside>
            </article>
          </div>

          <div className="information border-[1px] border-[#eaeaea] rounded-[24px] p-8 mt-8">
            <h2 className="text-2xl font-semibold">Location</h2>
            <p className="font-light py-4">Here is our Location</p>
            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 pb-2"></div>

            <div className="overflow-x-auto relative sm:rounded-lg">
              <iframe
                className="w-[100%] rounded-md shadow-sm"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4183.381440641462!2d85.31237022654892!3d27.712973390528333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190243cc814f%3A0xd8e1e306ac0cac55!2sGlobal%20IME%20Bank!5e0!3m2!1sen!2snp!4v1669526147062!5m2!1sen!2snp"
                width="550"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="blog-details-right  md:w-2/5 w-full  ">
          <div className="information border-[1px] border-[#eaeaea] rounded-[24px] p-8 shadow-lg sticky">
            <div className="listing">
              <div className="flex justify-between">
                <span className="text-3xl font-semibold">
                  $119
                  <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
                    /night
                  </span>
                </span>
                <div className="flex items-center space-x-1 text-sm  ">
                  <div className="pb-[2px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-[18px] h-[18px] text-orange-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="font-medium ">4.5</span>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    (112)
                  </span>
                </div>
              </div>

              <form className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl my-4">
                <div className="flex flex-col space-y-4 p-8">
                  <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                    <span className="inline-flex items-center">
                      <BsCalendarDate />
                      <p className="pl-4">04 Dec</p>
                    </span>

                    <span className="inline-flex items-center">
                      <BsCheck2Square />
                      <p className="pl-4">Checkin</p>
                    </span>
                  </div>

                  <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                    <span className="pl-8">10th Dec</span>
                    <span className="pl-8">Add Date</span>
                  </div>
                  <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
                  <div className="flex flex-col text-neutral-6000 dark:text-neutral-300">
                    <span className="inline-flex items-center">
                      <FaRegUser />
                      <span className="pl-4">3 Guests</span>
                    </span>
                    <span className="pl-8">Guest</span>
                  </div>
                </div>
              </form>
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                  <span>$119 x 3 night</span>
                  <span>$357</span>
                </div>
                <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
                  <span>Service charge</span>
                  <span>$0</span>
                </div>
                <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$199</span>
                </div>
              </div>

              <div className="h-auto flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  bg-[#4340CA] my-4">
                Reserve
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelDetails;
