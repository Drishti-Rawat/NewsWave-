import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const navitems = ["Business","Entertainment","Health","Science","Sports","Technology"];
  return (
    <div className=' flex justify-between items-center bg-primary py-2.5 text-[#f8f9fa] text-lg font-semibold sticky top-0 z-10 '>
        <Link to ="/home"><h2 className=' px-4 text-3xl font-extrabold text-white' >NewsWave</h2></Link>

      <ul className='flex gap-7 items-center  px-4  '>
        
      <li className=' px-3 py-1.5  shadow-xl rounded-lg hover:bg-[#278cff] text-gray-200  hover:text-white cursor-pointer' ><Link to="/">Home</Link></li>
        {navitems.map(items=>(

              <li className=' px-3 py-1.5  shadow-xl rounded-lg hover:bg-[#278cff] text-gray-200  hover:text-white cursor-pointer' ><Link to={ `/${items.toLowerCase()}`}> {items}</Link></li>
        ))}

        
        
      </ul>
    </div>
  )
}

export default Navbar
