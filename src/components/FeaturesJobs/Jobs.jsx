import React from 'react'
import {JobCard} from '../../components/index'


const Jobs = () => {
  return (
    <div className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%]'>
       <div className='text-center'>
         <h4 className='text-blue font-bold'>FEATURED JOBS</h4>
         <h1 className='font-semibold text-4xl sm:text-5xl leading-16 tracking-wider text-black/80'>
            New & Random Jobs 900+ <br />Browse Jobs
          </h1>
       </div>
      <div className='mt-8'>
      <JobCard/>
      </div>

       <button className='font-semibold text-white bg-blue hover:bg-black rounded-3xl py-2 px-3 transition-all ease-in-out duration-500 w-fit'>Get Started</button>
    </div>
  )
}

export default Jobs
