import React from 'react'
import { FiPhone, FiMail, FiChevronDown } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {IoCallOutline, IoMailOutline} from 'react-icons/io5';
import Link from 'next/link'

function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const showAnim = gsap.from('.header', {
      yPercent: -100,
      paused: true,
      duration: 0.3
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });




//     let hamburger = document.querySelector('.hamburger');

// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('active');
//   if (hamburger.classList.contains('active')) {
//     hamburger.classList.toggle('active');
//   } else {
//     hamburger.classList.add('active');
//   }
//   console.log(hamburger.classList);
// });

  }, [])
  return (
    <div className="header js-header" id="header">
      <div className="header__center centerr">
        {/* <button className="header__burger js-header-burger"><span></span></button> */}
        <div className={
            mobileMenu
              ? "hamburger active"
              : "hamburger"
          }
        
        onClick={() => handleMobileMenu()}>
  <div className="hamburger-container">
    <div className="hamburger-line"></div>
    <div className="hamburger-line"></div>
  </div>
</div>

        <Link className="header__logo" href="/"><img className="header__pic" src="/logo.png" alt="" /></Link>
        {/* <div className="header__wrap js-header-wrap"> */}
        <div className={mobileMenu ? "header__wrap js-header-wrap visible" : "header__wrap js-header-wrap"}>
          <nav className="header__nav">
            <a className="header__item link link--metis" href="#">Projects</a>
            <a className="header__item link link--metis" href="#">About</a>
            <a className="header__item link link--metis" href="#">Contact</a>

            {/* <a className="header__item link link--metis" href="#">Inquiries</a> */}
            {/* <div className="header__item js-header-item">
              <a className="header__head js-header-head" href="#">Inquiries <FiChevronDown size={16} className="icon icon-arrow-down" /></a>
              <div className="header__body js-header-body">
                <div className="header__center centerr ok">
                  <div className="header__row">
                    <div className="header__col">
                      <div className="header__category">Features</div>
                      <div className="header__menu"><a className="header__box" href="#">
                        <div className="header__preview"><img className="header__pic" src="img/cup.png" alt="" /></div>
                        <div className="header__deetails">
                          <div className="header__info">Collab Assistant</div>
                          <div className="header__text">Smart automation system</div>
                        </div>
                      </a><a className="header__box" href="#">
                          <div className="header__preview"><img className="header__pic" src="img/camera.png" alt="" /></div>
                          <div className="header__deetails">
                            <div className="header__info">Advanced Importer</div>
                            <div className="header__text">Work with various media formats</div>
                          </div>
                        </a><a className="header__box" href="#">
                          <div className="header__preview"><img className="header__pic" src="img/calendar.png" alt="" /></div>
                          <div className="header__deetails">
                            <div className="header__info">Product Management</div>
                            <div className="header__text">Workspace reimagined</div>
                          </div>
                        </a></div>
                    </div>
                    <div className="header__col">
                      <div className="header__category">Features</div>
                      <div className="header__menu"><a className="header__box" href="#">
                        <div className="header__preview"><img className="header__pic" src="img/chatbox.png" alt="" /></div>
                        <div className="header__deetails">
                          <div className="header__info">Support</div>
                          <div className="header__text">24/7 Live Support</div>
                        </div>
                      </a><a className="header__box" href="#">
                          <div className="header__preview"><img className="header__pic" src="img/fill.png" alt="" /></div>
                          <div className="header__deetails">
                            <div className="header__info">Color Picker</div>
                            <div className="header__text">Advanced color picker</div>
                          </div>
                        </a></div>
                    </div>
                    <div className="header__col">
                      <div className="header__category">Company</div>
                      <div className="header__menu"><a className="header__box" href="#">
                        <div className="header__preview"><img className="header__pic" src="img/clock.png" alt="" /></div>
                        <div className="header__deetails">
                          <div className="header__info">Collab Team</div>
                          <div className="header__text">See who’s behind the magic</div>
                        </div>
                      </a><a className="header__box" href="#">
                          <div className="header__preview"><img className="header__pic" src="img/bell-flat.png" alt="" /></div>
                          <div className="header__deetails">
                            <div className="header__info">Collab Design</div>
                            <div className="header__text">What we’re working on</div>
                          </div>
                        </a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </nav>

          <nav className="header__nav__mobile">

            <Link className="header__item link link--metis" href="#">Projects</Link>
            <a className="header__item link link--metis" href="#">About</a>
            <a className="header__item link link--metis" href="#">Contact</a>
          </nav>
          <div className="header__photo"><img className="header__pic" src="logos.png" alt="" /></div>
        </div>


        <div className='nav__ctas'>
          <a href="" className='nav__icon'><IoCallOutline size={22}  /></a>
          <a href="" className='nav__icon'><IoMailOutline size={22}  /></a>
          {/* <a className="header__btn btn btn_pink" href="login.html">QUOTES</a> */}
          <a href="" className='link link--metis'>Fr</a>
        </div>


      </div>
      <div className="header__bg js-header-bg"></div>
    </div>
  )
}

export default Nav