import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import Typography from "../common/typography";
import { container_stagger, content_variants } from "../common/animationData";

const swiperCarousel = [
  {
    id: 1,
    Feature: "Single Room - 3 beds",
    Name: "boys hostel",
    Location: "kathmandu",
    Price: "$26",
    Rating: 4.9,
  },
  {
    Feature: "Single Room - 3 beds",
    id: 1,
    Name: "girls hostel",
    Location: "New Baneshwor",
    Price: "$36",
    Rating: 4.9,
  },
  {
    Feature: "Single Room - 3 beds",
    id: 1,
    Name: "boys hostel",
    Location: "kathmandu",
    Price: "$26",
    Rating: 4.8,
  },
  {
    Feature: "Single Room - 3 beds",
    id: 1,
    Name: "boys hostel",
    Location: "kathmandu",
    Price: "$26",
    Rating: 4.8,
  },
  {
    Feature: "Single Room - 3 beds",
    id: 1,
    Name: "boys hostel",
    Location: "kathmandu",
    Price: "$26",
    Rating: 4.8,
  },
];

const HoselProductDisplay = (props) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const styleButton =
    "Button text-neutral-50 h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-2 py-2 sm:px-6 mr-8";

  const styleActive =
    "bg-[#4340CA]  disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0";
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className="SectionSliderNewCategories px-12 py-8 bg-[#F3F4F6] dark:bg-[#262626] rounded-[45px] mx-4"
    >
      <div className="SectionSliderNewCategories__PageHome_s1nc__rq_ flow-root glide--ltr glide--slider glide--swipeable">
        <div className="Section-Heading  flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50">
          <Typography
            title="Featured places to stay"
            description="Popular places to stay that Chisfis recommends for you"
          />

          <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
            <div
              className="NextPrev  flex items-center text-neutral-900 dark:text-neutral-300 "
              data-id="NextPrev"
              data-glide-el="controls"
            ></div>
          </div>
        </div>

        <div className="Tabs">
          <Tab.Group>
            <Tab.List className="mb-12">
              <Tab
                className={({ selected }) =>
                  classNames(
                    styleButton,
                    selected
                      ? styleActive
                      : "text-neutral-800 dark:text-white hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Top hostels
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    styleButton,
                    selected
                      ? styleActive
                      : "text-neutral-800 dark:text-white hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Maintain
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    styleButton,
                    selected
                      ? styleActive
                      : "text-neutral-800 dark:text-white hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                Further
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <motion.div
                  transition={{
                    delayChildren: 0.2,
                    staggerChildren: 0.1,
                  }}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {swiperCarousel.map((row, index) => (
                    <motion.div variants={content_variants} key={index}>
                      <Link href="/hostel/hostel-details">
                        <div className="cards rounded-[24px] shadow-sm bg-white dark:bg-black hover:shadow-xl hover:bg-[#F3F1F0]">
                          <Swiper
                            modules={[Pagination, EffectFade]}
                            pagination
                            effect
                            speed={800}
                            slidesPerView={1}
                            className="mycardsswiper"
                            loop
                          >
                            <SwiperSlide>
                              <img
                                className="rounded-t-[24px]"
                                src="/images/blogs/1.jpeg"
                              ></img>
                            </SwiperSlide>

                            <SwiperSlide>
                              <img
                                className="rounded-t-[24px]"
                                src="/images/blogs/2.png"
                              ></img>
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                className="rounded-t-[24px]"
                                src="/images/blogs/3.png"
                              ></img>
                            </SwiperSlide>
                          </Swiper>
                          <div className="lower-content">
                            <div className="p-4 space-y-4">
                              <div className="space-y-2">
                                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                                  {row.Feature}
                                </span>
                                <div className="flex items-center space-x-2">
                                  <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-green-800 bg-green-100">
                                    ADS
                                  </span>
                                  <h2 className=" font-medium capitalize text-lg">
                                    <span className="line-clamp-1">
                                      {row.Name}
                                    </span>
                                  </h2>
                                </div>
                                <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="1.5"
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    ></path>
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="1.5"
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                  </svg>
                                  <span className="">{row.Location}</span>
                                </div>
                              </div>
                              <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
                              <div className="flex justify-between items-center">
                                <span className="text-base font-semibold">
                                  {row.Price}
                                  <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                                    /night
                                  </span>
                                </span>
                                <div className="flex items-center space-x-1 text-sm">
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
                                  <span className="font-medium ">
                                    {row.Rating}
                                  </span>
                                  <span className="text-neutral-500 dark:text-neutral-400">
                                    (28)
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </Tab.Panel>

              <Tab.Panel>test</Tab.Panel>

              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="Button flex justify-center mt-4">
          <Link href="/hostel">
            <button
              type="button"
              className="text-white bg-[#4340CA] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[24px] text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              <svg
                role="status"
                className="inline mr-3 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Show More...
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HoselProductDisplay;
