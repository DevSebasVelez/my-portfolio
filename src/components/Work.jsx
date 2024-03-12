import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

import Img1 from '../../public/assets/portafolio-img-1.jpg';
import Img2 from '../../public/assets/portafolio-img-2.jpg';
import Img3 from '../../public/assets/portafolio-img-3.jpg';


export const Work = () => {
  return (
    <section className="section" id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col mb-10 gap-y-12 lg:mb-0'>

            <div className="">
              <h2 className="pb-6 text-[56px] font-bold sm:font-normal leading-none lg:text-[70px]">Projects <br /> and Designs</h2>
              <motion.p
                className="max-w-sm mb-10"
                variants={fadeIn('', 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount:0.3}}
              >
                Here, you will find a collection of projects that I have both designed and developed
              </motion.p>
              <button className="btn btn-sm">Get a design</button>
            </div>

            <div className='group relative overflow-hidden border-2 border-gray-600 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute transition-all duration-300 z-20'></div>
              <img className='group-hover:scale-125 transition-all duration-300' src={Img1} alt="" />
              <div className='absolute -bottom-full left-8 sm:left-12 group-hover:bottom-16 sm:group-hover:bottom-24 transition-all duration-300 z-30'>
                <span className='text-[16px] sm:text-[20px]'>UI/UX Design</span>
              </div>
              <div className='absolute -bottom-full left-8 sm:left-12 group-hover:bottom-12 transition-all duration-300 z-40'>
                <span className='text-[16px] sm:text-[20px] text-gray-400'>MyxxFest</span>
              </div>
              <div className='absolute -bottom-full sm:right-12 sm:group-hover:bottom-16 right-8 group-hover:bottom-14 transition-all duration-300 z-30'>
                <a className='btn-2 text-sm' href='https://myxxfest.com' target="_blank" rel="noopener noreferrer">Visit Site</a>
              </div>
            </div>

          </div>

          <div className='flex-1 flex flex-col gap-y-[43px]'>
            <div className='group relative overflow-hidden border-2 border-gray-600 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute transition-all duration-300 z-20'></div>
              <img className='group-hover:scale-125 transition-all duration-300' src={Img2} alt="" />
              <div className='absolute -bottom-full left-8 sm:left-12 group-hover:bottom-16 sm:group-hover:bottom-24 transition-all duration-300 z-30'>
                <span className='text-[16px] sm:text-[20px]'>Developed</span>
              </div>
              <div className='absolute -bottom-full left-8 sm:left-12 group-hover:bottom-12 transition-all duration-300 z-40'>
                <span className='text-[16px] sm:text-[20px] text-gray-400'>Guillermo C.</span>
              </div>
              <div className='absolute -bottom-full sm:right-12 sm:group-hover:bottom-16 right-8 group-hover:bottom-14 transition-all duration-300 z-30'>
                <a className='btn-2 text-sm' href='https://myxxfest.com' target="_blank" rel="noopener noreferrer">Visit Site</a>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-gray-600 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute transition-all duration-300 z-20'></div>
              <img className='group-hover:scale-125 transition-all duration-300' src={Img3} alt="" />
              <div className='absolute -bottom-full left-8 sm:left-12 group-hover:bottom-16 sm:group-hover:bottom-24 transition-all duration-300 z-30'>
                <span className='text-[16px] sm:text-[20px]'>UI/UX Design</span>
              </div>
              <div className='absolute -bottom-full left-8 sm:left-12 group-hover:bottom-12 transition-all duration-300 z-40'>
                <span className='text-[16px] sm:text-[20px] text-gray-400'>Diana C.</span>
              </div>
              <div className='absolute -bottom-full sm:right-12 sm:group-hover:bottom-16 right-8 group-hover:bottom-14 transition-all duration-300 z-30'>
                <a className='btn-2 text-sm' href='https://myxxfest.com' target="_blank" rel="noopener noreferrer">Visit Site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


