import React from 'react'
import { styles } from '../style'
import { motion } from 'framer-motion';

// import { repeat } from 'maath/dist/declarations/src/misc'

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
                Hi, I'm <span className='text-[#915eff]'>Rajib Hossain</span>
              </h1>
              <p className='w-2/3'>
              <span className={`${styles.heroSubText} mt-2 text-white-100`}> Full-Stack Developer</span> <br />
              <span className='text-gray-300'>Expert in React.js & Laravel | Delivering Scalable and Dynamic Web Applications | Always Exploring New Technologies.</span>
              </p>
          </div>
          <div>
            this is my image
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