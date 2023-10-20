import React from 'react'
import { Link } from 'react-router-dom'
import { SiApplemusic } from 'react-icons/si'

const Logo = () => {
    return (
        <h1 className='header_logo'>
            <Link to='/'>
                <em><SiApplemusic /></em>
                <span><em>Youtube</em>MUSIC <br />YOUTUBE</span>
            </Link>
        </h1>
    )
}

export default Logo