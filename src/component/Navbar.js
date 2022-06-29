import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <ul>
                <li className='nav-item'>
                    <a href="#">Home</a>
                </li>
                <li className='nav-item'>
                    <a href="#">About</a>
                </li>
                <li className='nav-item'>
                    <a href="#">Contact</a>
                </li>
                <form>
                    <input type="text" placeholder="Search" />
                    <button type="submit">Search</button>
                </form>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar