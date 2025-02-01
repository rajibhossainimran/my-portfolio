import React from 'react'
import { styles } from '../style'
import { motion } from 'framer-motion';
import {fadeIn,textVariant} from '../utils/motion';
import {services} from '../constants/constant';
import { p } from 'framer-motion/client';
import { Tilt } from 'react-tilt';
import { SectionWraper } from '../hoc';
import image from '../assets/development.png';

const ServiceCard =({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right","spring",0.5 * index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div option={{
          max:45,
          scale:1,
          speed:450

        }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt="icon" className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='w-full md:w-1/2'>
          <motion.dev variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.dev>

          <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            I am a React and Laravel Developer with 6 months of hands-on experience, dedicated to delivering high-quality web solutions. With a strong foundation in front-end and back-end development, I am comfortable working with both React.js for dynamic, responsive user interfaces and Laravel for robust, scalable back-end solutions.

            I have worked on various projects that showcase my expertise in building seamless web applications. My skill set includes HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js, Laravel, and database management using MySQL and SQLite. I'm passionate about learning new technologies and continuously improving my development skills to create efficient and maintainable code.

            If you're looking for a web developer who can bring creativity, technical expertise, and problem-solving skills to your projects, I am here to help you achieve your goals.
          </motion.p>
        </div>
        {/* image my profile container  */}
        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <img src={image} alt="" />
        </div>
      </div>
    <div className='mt-20 flex justify-center items-center flex-wrap gap-10'>
      {
        services.map((service,index)=>(<ServiceCard  key={service.title} index={index} {...service}/>))
      }
    </div>
    </>
  )
}

export default SectionWraper (About,'about')