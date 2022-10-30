import { Link, Outlet } from 'react-router-dom'
import React from 'react'
import './Layout.css'
function Layout() {
    return (
        <div className='layout'>
            <div className="navbar">

                <Link to="/home"><button>HOME</button></Link>
                <button>NEW RELEASE</button>
                <button>FAV</button>
            </div>
            <div className='main-area'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout