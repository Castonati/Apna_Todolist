
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-violet-900 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>ApnaTask</span>
        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'><a href="https://todoist.com/">Home</a></li>
        <li className='cursor-pointer hover:font-bold transition-all'><a href="https://netflix.com/"></a>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
