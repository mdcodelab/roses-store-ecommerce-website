import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { requirePropFactory } from '@mui/material';

function Footer() {
  return (
    <section className="footer-container">
        <div className="footer-left">
            <h1 className="logo">LoveRoses</h1>
            <p className="description">Roses have created a magic illusion for human eyes that connected them to the human heart. Roses are the masterpiece of all the flowers as it emits beautiful positive feelings. In the world full of different flowers, Rose is the symbol of love. They have established a strong 
            base in human thoughts and hearts. That’s how they mesmerized us with their beauty and appearance.</p>
            <div className="social-container">
            <div className="social-icon"> <FacebookIcon style={{fontSize: "25px"}}></FacebookIcon></div>
            <div className="social-icon"><TwitterIcon style={{fontSize: "25px"}}></TwitterIcon></div>
           <div className="social-icon"><InstagramIcon style={{fontSize: "25px"}}></InstagramIcon></div>         
           </div>
        </div>
        <div className="footer-center">
            <h3 className="title">Useful links</h3>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">Order tracking</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Terms</a></li>
            </ul>
        </div>

        <div className="footer-right">
                <h3 className="title">Contact</h3>
                <p><LocationOnIcon style={{fontSize: "28px"}}></LocationOnIcon> 1500 22th Street Sacramento CA 95888</p>
                <p><PhoneIcon style={{fontSize: "28px"}}></PhoneIcon> (916) 653 3555</p>
                <p><EmailIcon style={{fontSize: "28px"}}></EmailIcon> contact@loveroses.org</p>
                <div className="image-payments">
                <a href="" className="pay paypal"><img src={require("../images/payments/paypal.png")} alt="paypal"></img></a>
                <a href="#" className="pay visa"><img src={require("../images/payments/visa.png")} alt="visa"></img></a>
                <a href="#" className="pay visa"><img src={require("../images/payments/mastercard.png")} alt="mastercard"></img></a>
                </div>
        </div>

    </section>
  );
}

export default Footer;
