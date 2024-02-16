import Image from "../../public/assets/avatar.svg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { GlobeAltIcon } from "@heroicons/react/24/outline";


export const Banner = () => {

  return (
    <>
      <section id="home" className="min-h-[70vh] lg:min-h-[78vh] flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
            <div className="flex-0-0-50 text-center font-primary lg:text-left">
              <motion.h1
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount:0.7}}
                className="text-[56px] font-extrabold sm:font-normal leading-[0.8] lg:text-[70px]"
                >
              SEBASTIAN VELEZ
              </motion.h1>

              <motion.div
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount:0.7}}
                className="text-[36px] font-primary lg:font-semibold uppercase leading-[1] us:text-[30px] lg:text-[60px] mt-8 lg:mt-0"
              >
                <span className="text-white mr-4">I am a</span>
                <TypeAnimation sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000
                ]}
                  speed={30}
                  className="custom-color"
                  wrapper="span"
                  repeat={Infinity}
                />
              </motion.div>

                <motion.p
                  variants={fadeIn('up', 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount:0.7}}
                  className="mb-3 hidden lg:flex font-secondary">SOFTWARE ENGINEER, FRONT END & APP DEVELOPER
                </motion.p>

                {/* <motion.div
                  variants={fadeIn('up', 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount:0.7}}
                  className="mt-8"
                >
                  <button className="btn btn-lg">Contact me</button>
                  <a href="#" className="hidden sm:inline-block text-gradient btn-link ml-4 ">My Projects</a>
                </motion.div> */}

                <motion.div className="flex justify-center items-center gap-2 mt-10 lg:mt-0 lg:justify-start">
                  <GlobeAltIcon
                    className=" h-10 w-10 custom-stroke duration-custom-spin" />
                    <span className="text-sm text-gray-400">Located in Ecuador</span>
                </motion.div>


            </div>

            <motion.div
                variants={fadeIn('down', 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount:0.7}}
                className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto"
              >
              <img className="scale-75" src={Image} alt="banner-image" />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

