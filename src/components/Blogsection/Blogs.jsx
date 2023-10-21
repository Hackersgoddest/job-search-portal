import React from 'react'
import { Link } from 'react-router-dom'
import SearchBlog from '../../components/BlogPage/SearchBlog'

const transition = "transition-all ease-in-out duration-500" 

const Blogs = () => {
  return (
    <section className='my-[100px] w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%]'>
      <div>
        <div className='flex gap-3'>
          <hr className='border border-blue w-[40px] mt-4'/>
          <h1 className='text-blue font-bold 2xl:text-4xl'>OUR BLOG</h1>
        </div>
        <article className='flex justify-between flex-col sm:flex-row gap-4 my-4'>
         <h1 className='text-4xl md:text-5xl 2xl:text-6xl font-semibold leading-16'>
          Browse our articles & resources
         </h1>
         <Link  to='/blogs' 
         className={`${transition} w-fit font-semibold text-white bg-blue py-2 px-3 rounded-3xl hover:bg-black`}>
            View All Blogs
        </Link>
        </article>
       </div>

       <div>
         <SearchBlog/>
       </div>
    </section>
  )
}

export default Blogs
