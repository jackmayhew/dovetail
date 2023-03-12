import React from 'react'
import { useEffect } from 'react'
import '../../utils/tween'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function RecentWork() {

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);


        // animate content in //
        gsap.to(".rec", {
            scrollTrigger: ".rec",
            duration: .5,
            ease: 'Power3.easeOut',
            startAt: { y: '50%', opacity: 0 },
            y: 0,
            opacity: 1,
            delay: .25
        });

        gsap.to(".menu__item-textinner", {
            scrollTrigger: ".rec",
            duration: .5,
            ease: 'Power3.easeOut',
            startAt: { y: '50%', opacity: 0 },
            y: 0,
            opacity: 1,
            delay: .5,
            stagger: .25
       
        });
 


        {
            const getMousePos = (e) => {
                let posx = 0;
                let posy = 0;
                if (!e) e = window.event;
                if (e.pageX || e.pageY) {
                    posx = e.pageX;
                    posy = e.pageY;
                }
                else if (e.clientX || e.clientY) {
                    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                }
                return { x: posx, y: posy }
            }
            // Effect 4
            class HoverImgFx4 {
                constructor(el) {
                    this.DOM = { el: el };
                    this.DOM.reveal = document.createElement('div');
                    this.DOM.reveal.className = 'hover-reveal';
                    this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
                    this.DOM.el.appendChild(this.DOM.reveal);
                    this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
                    this.DOM.revealInner.style.overflow = 'hidden';
                    this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
                    // charming(this.DOM.el);
                    this.DOM.letters = [...this.DOM.el.querySelectorAll('span')];
                    this.initEvents();
                }
                initEvents() {
                    this.positionElement = (ev) => {
                        const mousePos = getMousePos(ev);
                        const docScrolls = {
                            left: document.body.scrollLeft + document.documentElement.scrollLeft,
                            top: document.body.scrollTop + document.documentElement.scrollTop
                        };
                        this.DOM.reveal.style.top = `${mousePos.y + 20 - docScrolls.top}px`;
                        this.DOM.reveal.style.left = `${mousePos.x + 20 - docScrolls.left}px`;
                    };
                    this.mouseenterFn = (ev) => {
                        this.positionElement(ev);
                        this.showImage();
                        this.animateLetters();
                    };
                    this.mousemoveFn = ev => requestAnimationFrame(() => {
                        this.positionElement(ev);
                    });
                    this.mouseleaveFn = () => {
                        this.hideImage();
                    };

                    this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
                    this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
                    this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
                }
                showImage() {
                    TweenMax.killTweensOf(this.DOM.revealInner);
                    TweenMax.killTweensOf(this.DOM.revealImg);

                    this.tl = new TimelineMax({
                        onStart: () => {
                            this.DOM.reveal.style.opacity = 1;
                            TweenMax.set(this.DOM.el, { zIndex: 1000 });
                        }
                    })
                        .add('begin')
                        .add(new TweenMax(this.DOM.revealInner, 0.8, {
                            ease: Expo.easeOut,
                            startAt: { opacity: 0, y: '50%', rotation: -15, scale: 0 },
                            y: '0%',
                            rotation: 0,
                            opacity: 1,
                            scale: 1
                        }), 'begin')
                        .add(new TweenMax(this.DOM.revealImg, 0.8, {
                            ease: Expo.easeOut,
                            startAt: { rotation: 15, scale: 2 },
                            rotation: 0,
                            scale: 1
                        }), 'begin');
                }
                hideImage() {
                    TweenMax.killTweensOf(this.DOM.revealInner);
                    TweenMax.killTweensOf(this.DOM.revealImg);

                    this.tl = new TimelineMax({
                        onStart: () => {
                            TweenMax.set(this.DOM.el, { zIndex: 999 });
                        },
                        onComplete: () => {
                            TweenMax.set(this.DOM.el, { zIndex: '' });
                            TweenMax.set(this.DOM.reveal, { opacity: 0 });
                        }
                    })
                        .add('begin')
                        .add(new TweenMax(this.DOM.revealInner, 0.15, {
                            ease: Sine.easeOut,
                            y: '-40%',
                            rotation: 10,
                            scale: 0.9,
                            opacity: 0
                        }), 'begin')
                        .add(new TweenMax(this.DOM.revealImg, 0.15, {
                            ease: Sine.easeOut,
                            rotation: -10,
                            scale: 1.5
                        }), 'begin')
                }
                animateLetters() {
                    TweenMax.killTweensOf(this.DOM.letters);
                    TweenMax.set(this.DOM.letters, { opacity: 0 });
                    TweenMax.staggerTo(this.DOM.letters, 0.8, {
                        ease: Expo.easeOut,
                        startAt: { y: '50%' },
                        y: '0%',
                        opacity: 1
                    }, 0.03);
                }
            }
            [...document.querySelectorAll('[data-fx="4"] > a, a[data-fx="4"]')].forEach(link => new HoverImgFx4(link));
        }



    }, [])

    return (
        <div className='width homework'>
            <h2 className="item__caption-title rec"><span className="oh__insner">RECENT PROJECTS</span></h2>
            <nav className="menu" data-fx="4">

                <a href='/project' className="menu__item" data-img="https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80">
                    {/* <span className="menu__item-text"><span className="menu__item-textinner">Brian <i>Just</i></span></span> */}
                    <span className="menu__item-text"><span className="menu__item-textinner">Church St</span></span>
                    <span className="menu__item-sub">View</span>
                </a>

                <a href='/project' className="menu__item" data-img="https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80">
                    <span className="menu__item-text"><span className="menu__item-textinner">Glengarry</span></span>
                    <span className="menu__item-sub">View</span>
                </a>
                <a href='/project' className="menu__item" data-img="https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80">
                    <span className="menu__item-text"><span className="menu__item-textinner">Drayton</span></span>
                    <span className="menu__item-sub">View</span>
                </a>
                <a href='/project' className="menu__item" data-img="https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80">
                    <span className="menu__item-text"><span className="menu__item-textinner">TMR Reno</span></span>
                    <span className="menu__item-sub">View</span>
                </a>

            </nav>
        </div>





    )
}

export default RecentWork