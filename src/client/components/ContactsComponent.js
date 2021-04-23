import React from 'react';
import "../css/index.css";

import facebook from '../images/ic_black_facebook.png';
import twitter from '../images/ic_black_twitter.png';
import linkedin from '../images/ic_black_linkedin.png';
import github from '../images/ic_black_github.png';
import youtube from '../images/ic_black_youtube.png';
import gmail from "../images/ic_gmail_black2.png";
import whatsapp from "../images/ic_whatsapp_black.png"
import phone from "../images/ic_phone_black.png";
import { urlencoded } from 'body-parser';

function ContactsComponent(props){

        return (
            <div className={'contacts-contents-container'}>
                <div className={'contacts-social-container'}>
                    <a href="https://github.com/Ultimatepc1/" target="_blank"><img src={github} className={'contact-social-img'}/></a>
                    <a href="https://www.linkedin.com/in/priyang-chaurasia/" target="_blank"><img src={linkedin} className={'contact-social-img'}/></a>
                    <a href="https://api.whatsapp.com/send?phone=+919167042095" target="_blank"><img src={whatsapp} className={'contact-social-img'}/></a>
                    <a href="mailto: p.c90909@gmail.com" target="_blank"><img src={gmail} className={'contact-social-img'}/></a>
                    <a href="https://www.facebook.com/profile.php?id=100012705542709" target="_blank"><img src={facebook} className={'contact-social-img'}/></a>
                    <a href="tel:+919167042095" target="_blank"><img src={phone} className={'contact-social-img'}/></a>
                    {/* <a href="https://twitter.com/pc" target="_blank"><img src={twitter} className={'contact-social-img'}/></a> */}
                    {/* <a href="https://www.youtube.com/pc" target="_blank"><img src={youtube} className={'contact-social-img'}/></a> */}
                </div>
                <div className={'contacts-footer-div'}></div>
                <p className={'contacts-footer-text'}>© 2021 ULTIMATEPC. ALL RIGHTS RESERVED.</p>
            </div>
        );
}

export default ContactsComponent;