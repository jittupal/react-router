import React from 'react'
import { NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <ul className='flex justify-center items-center gap-4 font-bold'>
            <li>
                <NavLink to='/'>HOME</NavLink>
            </li>
            <li>
                <NavLink to='/about'>ABOUT</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>CONTACT</NavLink>
            </li>
            <li>
                <NavLink to='/linkdin'>LINKEDIN</NavLink>
            </li>
        </ul>
    </div>
  )
}
