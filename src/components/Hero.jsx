import React from 'react'
import { styles } from '../style'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
                {/* circle and line  */}
                <div className='w-5 h-5 rounded-full bg-violet-900'/>
                <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          </div>

          <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <br /><span className='text-[#915eff]'>RAJIB HOSSAIN</span>
              </h1>
              <div className=' py-1'>
              <p className={` text-4xl font-semibold  mt-1 text-white-100 flex-nowrap`}> Full-Stack Developer</p> <br />
              <p className=' text-2xl text-red-800'>Expert in React.js & Laravel</p>
              </div>
              <div className='mt-2 h-24 text-slate-300'>
                <TypeAnimation
                  sequence={[
                    `Delivering Scalable and Dynamic Web Applications . \nExploring New Technologies.`,
                    1000,
                    "",
                  ]}
                  speed={50}
                  style={{ whiteSpace: 'pre-line', fontSize: '1.5em' }}
                  repeat={Infinity}
                />
              </div>
              {/* socila media icons  */}
              <div className="flex gap-4 mt-5">
                <a
                  href="https://github.com/rajibhossainimran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-4 rounded-xl text-white hover:bg-gray-700 transition"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rajibhossainimran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-4 rounded-xl text-white hover:bg-gray-700 transition"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="mailto:rajibhossainimran@gmail.com"
                  target="_blank"
                  className="bg-gray-800 p-4 rounded-xl text-white hover:bg-gray-700 transition"
                >
                  <FaEnvelope size={30} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1OKUjjCwog7KYLqw22lJuYqaDKE4vqNHA/view?usp=sharing"
                  target="_blank"
                  className="bg-gray-800 p-4 rounded-xl text-white hover:bg-gray-700 transition flex items-center gap-2"
                >
                  <VscPreview size={30} />
                  <span>View CV</span>
                </a>
              </div>
          </div>
      </div>
 

      {/* mouse scroll icon and animation using motion */}
      <div className='absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center'>
  <a href="#about">
    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
      <motion.div
        animate={{
          y: [0, 24, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="w-3 h-3 rounded-full bg-secondary mb-1"
      />
    </div>
  </a>
</div>

      

    </section>
  )
}

export default Hero