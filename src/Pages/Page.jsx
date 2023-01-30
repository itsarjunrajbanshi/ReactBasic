import React from 'react'
import './Page.scss'
import { Routes, Route, Link } from 'react-router-dom'
import About from '../Components/About/About'
import Home from '../Components/Home/Home'

// npm i react-router-dom
// Import What You Use and where you need
// Import BrowseRouter in the index.js page and wrap your App component using it
// Next is to define your routes in the App component, but can be done anywhere you want.
// import Routes Route And link
// Final step is navigation. Use 'Link' and 'to' instead of 'anchor tag' and 'src' to handle navigation.

function Page() {
    return (
        <>
            <div className="navbar">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>


        </>
    )
}

export default Page