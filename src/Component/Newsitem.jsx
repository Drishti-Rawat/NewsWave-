import React from 'react'

const Newsitem = ({title,description,urltoimg,url,author,publishedAt,source}) => {
  return (
    <div className='bg-white flex flex-col justify-center items-center border px-3 gap-3 py-3 relative z-0'>
      <div className='absolute top-[-15px] right-[-10px]  bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full'>
        <span>{source}</span>
      </div>
      <div >
        <img src={urltoimg} alt="img" className='w-96 object-contain' />
      </div>
      <div className='flex flex-col content-center px-2 gap-2' >
        <h2 className='text-2xl font-semibold px'>{title}</h2>
        <h3>
          {description}
        </h3>
        <h3 className='text-xs text-gray-600 py-2 '>By {author?author:"unknown" } on {new Date(publishedAt).toGMTString()}</h3>
        <div className='py-3' ><a href={url} className='bg-accent px-7 py-1.5 items-center rounded-lg text-white'> link</a></div>

        
      </div>
      
      
    </div>
  )
}

export default Newsitem
