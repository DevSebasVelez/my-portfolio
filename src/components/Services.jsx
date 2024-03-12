import {Swiper, SwiperSlide} from "swiper/react";
import { CgWebsite } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { SiBuildkite } from "react-icons/si";
import { GiProcessor } from "react-icons/gi";
import { IoStatsChart } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../index.css';

import {EffectCoverflow, Pagination} from 'swiper/modules';

export const Services = () => {
  return (
    <section id="services" className="my-28 sm:my-24 sm:pb-[200px]">
      <div className="flex justify-center pb-6 text-[56px] font-extrabold sm:font-normal leading-[0.8] lg:text-[70px]">
        <motion.h1
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount:0.7}}
        >
          Services
        </motion.h1>
      </div>

      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount:0.3}}
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={false}
          initialSlide={2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className=" bg-gradient-to-r from-red-700 to-pink-600 rounded-[.5rem] p-[0.1rem]">
            <div className="flex items-center flex-col container w-full h-full bg-black rounded-[.5rem]">
              <h1 className="mt-10">Product Design (UX/UI)</h1>
              <SiBuildkite className="mt-2 size-12 " style={{strokeWidth: 0.1}}/>
              <p className="text-[16px] text-center text-gray-400 mt-4">Expertise in designing user interfaces and experiences that prioritize user satisfaction, combining aesthetics with seamless functionality.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-gradient-to-r from-pink-700 to-green-600 rounded-[.5rem] p-[0.1rem]">
            <div className="flex items-center flex-col container w-full h-full bg-black rounded-[.5rem]">
              <h1 className="mt-10">eCommerce Solutions</h1>
              <TiShoppingCart className="mt-2 size-12" style={{strokeWidth: 0.1}}/>
              <p className="text-[16px] text-center text-gray-400 mt-4">Comprehensive solutions for developing and optimizing eCommerce platforms, enhancing online retail experiences and driving business growth.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-gradient-to-r from-purple-700 to-pink-600 rounded-[.5rem] p-[0.1rem]">
            <div className="flex items-center flex-col container w-full h-full bg-black rounded-[.5rem]">
              <h1 className="mt-10">Custom Web Applications</h1>
              <CgWebsite className="mt-2 size-12 " style={{strokeWidth: 0.1}}/>
              <p className="text-[16px] text-center text-gray-400 mt-4">Proficient in creating responsive and dynamic web applications, utilizing the latest technologies to deliver seamless and engaging online experiences.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-gradient-to-r from-pink-700 to-yellow-600 rounded-[.5rem] p-[0.1rem]">
            <div className="flex items-center flex-col container w-full h-full bg-black rounded-[.5rem]">
              <h1 className="mt-10">Business Process Automation</h1>
              <GiProcessor className="mt-2 size-12" style={{strokeWidth: 0.1}}/>
              <p className="text-[16px] text-center text-gray-400 mt-4">Development and implementation of automated systems to enhance efficiency and reduce errors in business processes.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-gradient-to-r from-gray-700 to-pink-600 rounded-[.5rem] p-[0.1rem]">
            <div className="flex items-center flex-col container w-full h-full bg-black rounded-[.5rem]">
              <h1 className="mt-10">Digital Marketing and SEO</h1>
              <IoStatsChart className="mt-2 size-12 " style={{strokeWidth: 0.1}}/>
              <p className="text-[16px] text-center text-gray-400 mt-4">Online strategies to boost visibility and attract audiences, including SEO, social media advertising, and email marketing.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </section>
  )
}

