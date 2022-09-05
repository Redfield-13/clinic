import React from 'react'
import {Link} from 'react-router-dom'

function sign() {
  return (
    <div className='sign'>
        <div className="logo">Care-Zone</div>
        <div className="wel">Welcome to Care-Zone health care center platform, please sign in or sign up to use the platform.</div>
        
        <Link className='link' to='/signin'>
          <button className='signin'>Sign In</button>
        </Link>
        <Link className='link'  to='/signup'>
          <button className='signin'>Sign Up</button>
        </Link>
        
    </div>
  )
}

export default sign