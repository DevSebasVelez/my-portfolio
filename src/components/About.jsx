import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";



export const About = () => {

  const [ref, inView ] = useInView({
    threshold:0.6,
  })

  return (
    <motion.section
      id="about"
      className="section mt-0"
      ref={ref}
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true, amount:0.2}}
      >
      <div className="container mx-auto">
        <div className="sm:items-center">
          {/* img */}
          {/* <div className="flex-1 sm:bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div> */}

          {/* text */}
          <div className="flex-1">
            <h4 className="font-primary text-[48px] mb-4">Your <span className="custom-color">ideas</span> just a click away</h4>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h5 className="h5 mb-4">I'm a Freelance Front-end Developer with over 3 years of experience in React.js, Vue.js, NextJS applications.</h5>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-sm text-gray-400">Hello! I'm Sebastian, a passionate frontend developer with over three years of experience crafting captivating web experiences. Throughout my career, I have worked with industry-leading technologies such as React, Vue, and Next, constantly challenging myself to undertake innovative and functional projects. My focus lies in achieving the perfect balance between design and functionality, creating user interfaces that are not only aesthetically pleasing but also highly intuitive. I am excited to continue exploring new technologies and contribute to the thrilling realm of frontend development.</p>

            {/* stats */}
            <div className="flex sm:w-1/3 sm:gap-x-10 mb-12 mt-5">
              <div className="w-1/3">
                <div className="custom-color text-[40px] font-bold">
                  {
                    inView
                      ? <CountUp start={0} end={3} duration={4}/>
                      : null
                  }
                  +
                </div>

                <div className="font-secondary text-sm mt-2">
                  Years of
                  Experience
                </div>
              </div>

              <div className="w-1/3">
                <div className="custom-color text-[40px] font-bold">
                  {
                    inView
                      ? <CountUp start={0} end={50} duration={3}/>
                      : null
                  }
                  +
                </div>

                <div className="font-secondary text-sm mt-2">
                  Satisfied <br />
                  Clients
                </div>
              </div>

              <div className="w-1/3">
                <div className="custom-color text-[40px] font-bold">
                  {
                    inView
                      ? <CountUp start={0} end={20} duration={3}/>
                      : null
                  }
                  +
                </div>

                <div className="font-secondary text-sm mt-2">
                  Finished <br />
                  Projects
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  )
}

