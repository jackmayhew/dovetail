import React from 'react'
import Nav from '../Components/Nav'
import OurStory from '../Components/Home/OurStory';
import Footer from '../Components/Footer';
import RecentWork from '../Components/Home/RecentWork';
import Careers from '../Components/Home/Careers';
import { useEffect, useRef } from 'react'
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";


function ok() {

    //     useEffect(() => {

    // gsap.registerPlugin(CSSRulePlugin);


    //         let main = document.querySelector(".main");
    //         let image = document.querySelector(".main .img-container img");
    //         let imageReveal = CSSRulePlugin.getRule(".main .img-container:after");

    //         let tl = new TimelineLite();

    //         tl.to(main, 0, { css: { visibility: "visible" } });
    //         tl.to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut });
    //         tl.from(image, 1.4, {
    //           scale: 1.6,
    //           ease: Power2.easeInOut,
    //           delay: -1.4 });

    //       }, [])


    useEffect(() => {
        gsap.to('.one', {
            duration: 1.25,
            ease: 'Expo.easeOut',
            startAt: { x: '-30%', opacity: 0 },
            x: 0,
            opacity: 1,
            delay: 2.25,
        });
        gsap.to('.two', {
            duration: 1.25,
            ease: 'Expo.easeOut',
            startAt: { x: '30%', opacity: 0 },
            x: 0,
            opacity: 1,
            delay: 2.5,

            // delay: pos => pos*0.06
        });


        gsap.to('.cta__top', {
            duration: 1.75,
            ease: 'Expo.easeOut',
            startAt: { x: '25%', opacity: 0 },
            x: 0,
            opacity: 1,
            delay: 2.9,

            // delay: pos => pos*0.06
        });

        gsap.to('.cta__bottom', {
            duration: 1.75,
            ease: 'Expo.easeOut',
            startAt: { x: '-25%', opacity: 0 },
            x: 0,
            opacity: 1,
            delay: 2.9,

            // delay: pos => pos*0.06
        });


          TweenMax.to(".wrapper__loader", 2, {
            right: "-100%",
            ease: Expo.easeInOut,
            delay: 1
        });

        // var tl = new TimelineMax();

        // tl.from(".loader", 1.6, {
        //     scaleY: "0%",
        //     y: 80,
        //     ease: Expo.easeInOut,
        //     delay: 1,
        //     transformOrigin:"50% 100%"
        // });

        // tl.to(".loader", 1.6, {
        //     height: "20vh",
        //     scaleY: "0%",
        //     ease: Expo.easeInOut,
        //     transformOrigin:"0% -100%"
        // });

    })


    return (
        <div>

            <div className="wrapper__loader">
                {/* <div className="loader"></div> */}
            </div>

            <Nav />
            <main>



                <section className="content-wrap">


                    <div className="content">


                        {/* <div className="content__row content__row--image">
                            <div className="image image--up" >
                                <div className="image__inner" style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1604769319166-010643ace337?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" + ")", transform: 'translate(0px, 0px)' }}></div>
                            </div>
                        </div> */}

                        <div className="reveal-box enter animate">
                            <div className="reveal-box__inner">
                                <img className="reveal-box__image" src="https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
                            </div>
                        </div>
                        <div className="content__row content__row--text">
                            <h2 className="content__title ">
                                <span className="oh "><span className='one'>building your vision.</span></span><br />
                                <span className="oh"><span className='two'>building with care. </span></span>
                            </h2>
                            {/* <span className="content__number"><span className="oh"><span>1</span></span></span> */}
                            {/* <button className="content__back unbutton">
                                <svg viewBox="0 0 50 9"><path d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path></svg>
                            </button> */}
                            <div className="content__meta">
                                <span className="content__meta-text">
                                    <span className="oh">
                                        <span className='FUCK link link--metis cta__top'>Dovetail</span> <br /> <span className='FUCK link link--metis second__span cta__bottom'>Renovations</span>
                                    </span>
                                </span>
                                <span className="content__meta-text num2">
                                    <span className="oh">
                                        <span className='FUCK link link--metis cta__top'>Montréal,</span> <br /> <span className='FUCK link link--metis cta__bottom'>Québec</span>
                                    </span>
                                </span>
                                <span className="content__meta-text num3">
                                    <span className="oh">
                                        <span className='FUCK link link--metis cta__top '>Est.</span> <br /> <span className='FUCK link link--metis second__span cta__bottom'>2019</span>
                                    </span>
                                </span>
                                {/*  <span className="content__meta-text"><span className="oh"><span>Est. <br /> 2019</span></span></span> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="content">
					<div className="content__row content__row--text">
						<h2 className="content__title">
							<span className="oh"><span>Quantum enhancement</span></span><br/>
							<span className="oh"><span>for the world</span></span>
						</h2>
						<span className="content__number"><span className="oh"><span>2</span></span></span>
						<button className="content__back unbutton">
							<svg viewBox="0 0 50 9"><path d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path></svg>
						</button>
						<div className="content__meta">
							<span className="content__meta-text"><span className="oh"><span>Novel World</span></span></span>
							<span className="content__meta-text content__meta-text--center"><span className="oh"><span>Souls</span></span> <br/><span className="oh"><span>for love</span></span></span>
							<span className="content__meta-text"><span className="oh"><span>Made by Humans</span></span> <br/><span className="oh"><span>in 2022</span></span></span>
						</div>
					</div>
					<div className="content__row content__row--image"></div>
				</div> */}
                </section>
            </main>

            <OurStory />
            <RecentWork />
            <Careers />
            <Footer />

        </div>

    )
}

export default ok