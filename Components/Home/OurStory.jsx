import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react'
import React from 'react'


function OurStory() {

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);


        // ScrollTrigger animations for scrolling
        const animateOnScroll = () => {

                gsap.set('.item__image-inner', { transformOrigin: '50% 0%' });

                    // animate content in //
                    gsap.to(".item__caption-title", {
                    scrollTrigger: ".item", 
                    duration: .5,
                    ease: 'Power3.easeOut',
                    startAt: {y: '50%', opacity: 0},
                    y: 0,
                    opacity: 1,
                    delay: .25
                    });

                    gsap.to(".item__caption-description", {
                    scrollTrigger: ".item", 
                    duration: .5,
                    ease: 'Power3.easeOut',
                    startAt: {y: '50%', opacity: 0},
                    y: 0,
                    opacity: 1,
                    delay: .3
                    });

                    gsap.to(".item__caption-description2", {
                    scrollTrigger: ".item", 
                    duration: .5,
                    ease: 'Power3.easeOut',
                    startAt: {y: '50%', opacity: 0},
                    y: 0,
                    opacity: 1,
                    delay: .35
                    });

                    gsap.to(".story__cta", {
                      scrollTrigger: ".item", 
                      duration: .5,
                      ease: 'Power3.easeOut',
                      startAt: {y: '50%', opacity: 0},
                      y: 0,
                      opacity: 1,
                      delay: .4
                      });



                    gsap.timeline({
                    scrollTrigger: {
                        trigger: '.item',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                    })
                    .addLabel('start', 0)

                    .to('.item__image-inner', {
                        ease: 'none',
                        scaleY: 1.5,
                        scaleX: 1.5,
                    }, 'start')

        };

        animateOnScroll()
    }, [])

    return (
        <figure className="item">
        <figcaption className="item__caption">
          <span className="item__caption-number oh"><span className="oh__inner"></span></span>
          <h2 className="item__caption-title oh"><span className="oh__inner">WHAT DEFINES US</span></h2>
          <p className="item__caption-description">
            All natural and technological processes
            Proceed in such a way that the availability
            Of the remaining energy decreases.
            All natural and technological processes
            Proceed in such a way that the availability
            Of the remaining energy decreases. </p>

            <p className="item__caption-description2">
            All natural and technological processes
            Proceed in such a way that the availability
            Of the remaining energy decreases.
            All natural and technological processes
            Proceed in such a way that the availability
            Of the remaining energy decreases.</p>


          <p className="story__cta features__link">Our Story</p>



        </figcaption>
        <div className="item__image-wrap">
          <div className="item__image"><div className="item__image-inner" style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" + ")"}}></div></div>
        </div>
      </figure>
    )
}

export default OurStory