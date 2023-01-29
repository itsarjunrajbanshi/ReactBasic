import React from 'react'
import './IconsFontsImg.scss'

// Importing Images From Src
// import girl from './Assets/ForestLake.jpg'

// Importing icons
import { GiBeech } from 'react-icons/gi'
import { WiAlien } from 'react-icons/wi'

// To Use React-icons Go To [https://react-icons.github.io/react-icons/] And Follow Steps

// To Use Google Fonts [https://fonts.google.com/] Select Font Then Either Link Or Import It


// Using Images In React In Many Ways [Locally: Public or src, url]


function IconsFontsImg() {
    return (
        <>
            <div className="container">
                <div className="img box">
                    <h1>How To Use Images In React</h1>
                    {/* From Public Folder */}
                    <h2>From Public Directory</h2>
                    <img src='Images/Instagram.svg' width='100px' alt='public' />

                    <h2>From Src Directory</h2>
                    {/* Without importing */}
                    {/* <img src={require('./Assets/Women.png')} /> */}

                    {/* <img src={girl} alt='src' /> */}

                    {/* From URL */}
                    <h2>From url</h2>
                    <img src='https://source.unsplash.com/100x100/?birds' id='url' />
                </div>

                <div className="icons box">
                    <h1>How To Use Icons In React</h1>
                    <div className="react-icons">
                        <h2>Using React Icons</h2>
                        <GiBeech className='r-icons' />
                        <WiAlien className='r-icons' id='alien' />
                    </div>
                </div>

                <div className="fonts box">
                    <h1>How To Use Fonts In React</h1>
                    <h2>Google Fonts</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi doloribus neque repellendus molestiae minus amet ullam possimus rerum eius soluta, dolores quaerat adipisci. Harum fugit reprehenderit architecto aut consequatur eveniet tempore distinctio nam laboriosam magni! Nemo dolores, aut temporibus itaque impedit ad obcaecati mollitia commodi animi eaque perspiciatis ea amet.</p>
                </div>
            </div>
        </>
    )
}

export default IconsFontsImg