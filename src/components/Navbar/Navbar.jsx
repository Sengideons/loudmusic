import React from 'react';
import './Navbar.css'



const Navbar = () => {
    return(
        <>

<nav class="navigation headroom headroom--not-top nav-up headroom--bottom" 
style={{backgroundColor: "rgb(25, 28, 31)"}}>
        <div class="hamburger">
            <span class="color-menu"></span>
            <span class="color-menu"></span>
            <span class="color-menu"></span>
        </div>
        <nav class="navigation_menu">
            
            <div class="sub-menu">
                <div><a href="http://bhimconcert.com" class="menu-active animate__delay-1s" >Home</a></div>
                <div><a href="#tickets" class="animate__delay-2s">About</a></div>
                <div><a href="#gallery" class="animate__delay-3s">Guest </a></div>
                <div><a href="http://bhimconcert.com/vendors" class="animate__delay-4s">Pricing</a></div>
                <div><a href="#contact" class="animate__delay-5s">Venue</a></div>
                <div><a href="#contact" class="animate__delay-5s reg-btn">Registration</a></div>

            </div>
            <div class="social-icon animate__delay-5s">
                <span class="social-icon-text text-white">Follow Me: </span>
                <div class="s-link">
                    <a href="loj#" class="wrap-link">
                        <div class="link-text">
                            <span class="text-white"><i class="bi bi-twitter"></i></span>
                            <span class="link-hover text-white"><i class="bi bi-twitter"></i></span>
                        </div>
                    </a>
                </div>
                <div class="s-link">
                    <a href="loj#" class="wrap-link">
                        <div class="link-text">
                            <span class="text-white"><i class="bi bi-instagram"></i></span>
                            <span class="link-hover text-white"><i class="bi bi-instagram"></i></span>
                        </div>
                    </a>
                </div>
                <div class="s-link">
                    <a href="loj#" class="wrap-link">
                        <div class="link-text">
                            <span class="text-white"><i class="bi bi-facebook"></i></span>
                            <span class="link-hover text-white"><i class="bi bi-facebook"></i></span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="mobile-menu-bg img-fluid"></div>
        </nav>
        <div class="home-menu-text">
            
            <a href="http://bhimconcert.com" class="menu-active">Home</a>
            <a href="#tickets">About</a>
            <a href="#gallery">Guest</a>
            <a href="http://bhimconcert.com/vendors">Pricing</a>
            <a href="#contact">Venue</a>
            <a href="#contact" className='reg-btn'> Registration </a>
        </div>
    </nav>

        </>
    )
}

export default Navbar;