import React from 'react'
import Typed from 'react-typed';
import backgroundImage from '../img/back.jpg'
import cv from '../fakeCV.pdf'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='main-info'>
                <h1>Web development and services management</h1>

            <Typed
            className='typed-text'
                strings={[
                    'Chemical Engineering',
                    'Front end Developer',
                    'Back end Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                    
                </Typed>
                <a href={cv} className='downloadCV' download>CV-mi endir</a>

            </div>
            
        </div>
    )
}

export default Header
