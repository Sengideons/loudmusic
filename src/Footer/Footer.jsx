import React from 'react';
//import { Link } from 'react-router-dom';
import './Footer.css'


const Footer = () => {
    return(
        <>


<div className="footer-section">

<div className='footer-layout'>

    <div className='loud-music'>
        <h1>Loud<span>Music</span></h1><br /><br />
        <p><span>New Town Tema 92028, Ghana</span> <br /> <span>dennisdorny@gmail.com</span> <br /> <span>+233 541057923</span></p>
        <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-instagram"></a>
        </div>
    </div>

    <div className='information'>
        <h1>Information</h1><br /><br />
        <a  href='/about' className="link">About Us</a>
        <a href="/pricing" className="link">Pricing Plans</a>
        <a href="/guest" className="link">Our Guest</a>
        <a href="/venue" className="link">Event Venue</a>
    </div>
    
    <div className='newsletter'>
        <h1>Newsletter</h1><br /><br />
        <input type="text" placeholder='Your Email'  />
    </div>
</div>

</div>





<div class="footer-height" style={{height: "545px"}}></div>
    <footer>
        <div class="container" id="contact">
            <div class="logo">
                <img src={"assets/img/logo/footerlogo.png"} alt="logo"/>
            </div>
            
            <div class="footer-cotact-info">
                <p><span>support: </span> LoudMusic Paypal 121672</p>
                <p><span>contact us: </span> +233 54 105 7923</p>
                <p><span>e-mail: </span> info@loudmusic.com</p>
            </div>
            <div class="w-line"></div>
        </div>
        <div class="copyright">
            <p>© Powered by <a href="https://youtube.com/c/SenGideons.com/" style={{textDecoration: "none", color:"#fff"}}>SEN GIDEONS</a></p>
        </div>
    </footer>


        </>
        
    )
}

export default Footer;