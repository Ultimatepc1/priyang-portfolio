import React from 'react';
import "../css/index.css";
import ContactsComponent from './ContactsComponent'

// import profile from "../images/ic_profile_img.jpeg";
import facebook from "../images/ic_facebook.png";
// import twitter from "../images/ic_twitter.png";
import hackerrank from "../images/ic_hackerrank.png";
import whatsapp from "../images/ic_whatsapp.png"
import github from "../images/ic_github.png";
import linkedin from "../images/ic_linkedin.png";
// import youtube from "../images/ic_youtube.png";

import { urlencoded } from 'body-parser';

function ProfileComponent(props) {

        return (
            <div className={'dashboard-header-container'}>
                <div className={'dashboard-banner-overlay'}></div>
                <div className={'dashboard-profile-div'}>
                    <div className={'dashboard-profile-img-container'}>
                        <img src={"https://media-exp1.licdn.com/dms/image/C5603AQHFeTEk5JG1wQ/profile-displayphoto-shrink_800_800/0/1611211669999?e=1624492800&v=beta&t=x9yKsJ5Nylw0eHzQ_XrH4vElgsK-O8tmmdNTMHK9u3s"} className={'dashboard-profile-img'} />
                        <div className={'social-profile-container'}>
                            <a href="https://github.com/Ultimatepc1/" target="_blank"><img src={github} className={'social-profile-icon'} /></a>
                            <a href="https://www.linkedin.com/in/priyang-chaurasia/" target="_blank"><img src={linkedin} className={'social-profile-icon'} /></a>
                            <a href="https://www.hackerrank.com/ultimatepc/" target="_blank"><img src={hackerrank} className={'social-profile-icon'} /></a>
                            <a href="https://api.whatsapp.com/send?phone=+919167042095" target="_blank"><img src={whatsapp} className={'social-profile-icon'} /></a>
                            <a href="https://www.facebook.com/profile.php?id=100012705542709" target="_blank"><img src={facebook} className={'social-profile-icon'} /></a>
                            {/* <a href="https://twitter.com/pc" target="_blank"><img src={twitter} className={'social-profile-icon'} /></a> */}
                            {/* <a href="https://www.youtube.com/pc" target="_blank"><img src={youtube} className={'social-profile-icon'} /></a> */}
                        </div>
                    </div>
                    <div className={'dashboard-profile-details-container'}>
                        <p className={'dashboard-profile-name-label'}>Hello, I'm <span className={'dashboard-profile-name'}>Priyang Chaurasia</span></p>
                        <p className={'dashboard-profile-deatils'}>
                            I'm a Software Engineer specialized in Android & Web application development, having fluent knowledge in the Android framework and developed few mobile applications from Android Studio using Native Android and have also done an internship on it. In terms of the Web framework having experience in both back-end and front-end development, developed full-stack based web application using Node.js, React.js & MongoDB and also developed some applications based on Flask and NodeJS.
                            </p>
                        <p className={'dashboard-profile-deatils'}>
                            To improve my skills in programming, I participate in Cometetive Programming Contest's and also solve problems on Platforms like HackerRank and CodeChef.
                            </p>
                        {/* <p className={'dashboard-profile-deatils'}>
                            As a hobby love to make games using Unity3d game engine and to share my work with developer communities I write <a href="https://hackbotone.com/" className={'profile-details-link'} target="_blank">blogs</a> and make tutorial videos on my <a href="https://www.youtube.com/pc" className={'profile-details-link'} target="_blank">Youtube channel.</a>
                        </p> */}
                    </div>
                </div>
                <img className={'dashboard-banner-img'} />
            </div>
        );
    }

// class ProfileComponent extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {

//     }

//     render() {
//         return (
//             <div className={'dashboard-header-container'}>
//                 <div className={'dashboard-banner-overlay'}></div>
//                 <div className={'dashboard-profile-div'}>
//                     <div className={'dashboard-profile-img-container'}>
//                         <img src={profile} className={'dashboard-profile-img'} />
//                         <div className={'social-profile-container'}>
//                             <a href="https://www.facebook.com/pc/" target="_blank"><img src={facebook} className={'social-profile-icon'} /></a>
//                             <a href="https://twitter.com/pc" target="_blank"><img src={twitter} className={'social-profile-icon'} /></a>
//                             <a href="https://www.linkedin.com/in/pc/" target="_blank"><img src={linkedin} className={'social-profile-icon'} /></a>
//                             <a href="https://github.com/pc" target="_blank"><img src={github} className={'social-profile-icon'} /></a>
//                             <a href="https://www.youtube.com/pc" target="_blank"><img src={youtube} className={'social-profile-icon'} /></a>
//                         </div>
//                     </div>
//                     <div className={'dashboard-profile-details-container'}>
//                         <p className={'dashboard-profile-name-label'}>Hello, I'm <span className={'dashboard-profile-name'}>Priyang Chaurasia</span></p>
//                         <p className={'dashboard-profile-deatils'}>
//                             I'm a Senior Software Engineer specialized in Android & Web application development, having fluent knowledge in the Android framework and developed many mobile applications from various domains such as (Payment, IoT, Graphics, Augmented Reality & Virtual Reality) and also developed cross-platform based mobile application using React-Native framework. In terms of the Web framework having experience in both back-end and front-end development, developed many full-stack based web application using Node.js, React.js & MongoDB.
//                             </p>
//                         <p className={'dashboard-profile-deatils'}>
//                             To improve my skill sets in security I like to participate in various Bug Bounty programs (Bugcrowd, HackerOne & many others) In Bug Bounty programs, I found many vulnerabilities that come under OWASP top 10.
//                             </p>
//                         <p className={'dashboard-profile-deatils'}>
//                             As a hobby love to make games using Unity3d game engine and to share my work with developer communities I write <a href="https://hackbotone.com/" className={'profile-details-link'} target="_blank">blogs</a> and make tutorial videos on my <a href="https://www.youtube.com/pc" className={'profile-details-link'} target="_blank">Youtube channel.</a>
//                         </p>
//                     </div>
//                 </div>
//                 <img className={'dashboard-banner-img'} />
//             </div>
//         );
//     }
// }

export default ProfileComponent;