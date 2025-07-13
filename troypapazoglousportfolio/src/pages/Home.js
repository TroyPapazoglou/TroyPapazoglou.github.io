
// React stuff
import React, { useEffect } from 'react';

// Home stuff
import '../components/Home.css';
import { removeOffscreenClass } from '../components/Home.js' //imports external function
import AnimatedBackground from "../components/AnimatedBackground";
import SocialIcons from "../components/SocialIcons";

// Major projects stuff
import '../components/MajorProjects.css';
import JawbreakerGameplayVid from '../videos/JawbreakerGameplay.mp4'; 
import JawBreakerSectionPopup from '../images/jawbreakerSectionPopupTransparent.png';
import JawBreakerLogo from '../images/JawbreakerLogo.png';

import HelevatorGif from '../gifs/pupperWalking.gif';
import HelevatorSectionPopup from '../images/h.elevator-SectionPopupTransparent.png';
import HelevatorLogo from '../images/Helevatorlogo.png';

import PurrfectCatchGameplayVid from '../videos/PurrfectCatachTrailerV1.mp4';
import PurrfectCatchSectionPopup from '../images/purfect-catchSectionPopupTransparent.png';
import PurrfectCatchLogo from '../images/Purrfectcatchlogo.png';
import JawbreakerSection from './JawbreakerSection.js';

import UnderConstruction from '../images/underconstructiontape.png';

export default function()
{
    useEffect(() => {
        removeOffscreenClass(); //calls offscreen function 
    }, []);
    return(        
        <>
            <section className="home" id="home">
                
                <AnimatedBackground />

                <div id="home-title" className="home-title">

                    {/* about me text */}
                    <div className="home-sub-container-one">
                        <span id="title-one" className="offscreen">ABOUT ME</span>
                    </div>

                    {/* my name text */}
                    <div className="home-sub-container-two">
                        <span id="title-two" className="offscreen">Troy Papazoglou</span>
                    </div>

                    {/* content list  */}
                    <div id="content" className="content offscreen">
                        <div className="content__container">
                            <p id="content_container_text" className="content__container__text">
                                I am a game programmer! I specialise in
                            </p>
                            <ul id="content_container_list" className="content__container__list">
                                <li className="content__container__list__item">Unity !</li>
                                <li className="content__container__list__item">C# !</li>
                                <li className="content__container__list__item">C++ !</li>
                                <li className="content__container__list__item">HTML !</li>
                                <li className="content__container__list__item">CSS !</li>
                                <li className="content__container__list__item">JS !</li>
                            </ul>
                        </div>
                    </div>
                    
                    <SocialIcons/>

                    <span id="UnderConstruction" className="underconstruction offscreen">Note: this website is still under construction!</span>
                </div>
        
            </section>

            {/* Major Projects Section */}
            {/* <section className="major-projects" id="major-projects">
                <div className="dimmed-background"></div>
                <div className="major-projects-title hidden" id="majorprojectstitle"> MAJOR PROJECTS</div>
                
                <JawbreakerSection/>

                <div className="project-sections">
                    <div className="project-section hidden" id="project-one">
                        <div className="background-wrapper" id="backgroundone">
                            <video autoPlay muted loop className="background-video" id="jawbreakervideo">
                                <source src={JawbreakerGameplayVid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="gradient-overlay"></div>
                        </div>
                        <div className="content-wrapper">
                            <img src={JawBreakerSectionPopup} alt="JawBreaker Character" className="character hidden" />
                            <img src={JawBreakerLogo} alt="JawBreakerLogo" className="logo hidden" />
                            <div className="overlay-content"></div>
                        </div>
                    </div>

                    <div className="project-section hidden" id="project-two">
                        <div className="background-wrapper" id="backgroundtwo">
                            <img src={HelevatorGif} alt="Project Two Animation" className="background-gif" id="helevatorgif" />
                            <div className="gradient-overlay"></div>
                        </div>
                        <div className="content-wrapper">
                            <img src={HelevatorSectionPopup} alt="H.Elevator Character" className="character hidden" />
                            <img src={HelevatorLogo} alt="HelevatorLogo" className="logo hidden" />
                            <div className="overlay-content"></div>
                        </div>
                    </div>

                    <div className="project-section hidden" id="project-three">
                        <div className="background-wrapper" id="backgroundthree">
                            <video autoPlay muted loop className="background-video" id="purrfectcatchvideo">
                                <source src={PurrfectCatchGameplayVid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="gradient-overlay"></div>
                        </div>
                        <div className="content-wrapper">                       
                            <img src={PurrfectCatchSectionPopup} alt="Purfect-Catch Character" className="character hidden" />
                            <img src={PurrfectCatchLogo} alt="PurrfectCatchLogo" className="logo hidden" />
                            <div className="overlay-content"></div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
        
        
    )
}