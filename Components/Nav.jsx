import React from 'react'
import { FiPhone, FiMail, FiChevronDown } from 'react-icons/fi';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Nav() {

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
  }, [])
  return (
    <div className="header js-header" id="header">
      <div className="header__center center"><button className="header__burger js-header-burger"><span></span></button>
        <a className="header__logo" href="#"><img className="header__pic" src="/logo.png" alt="" /></a>
        <div className="header__wrap js-header-wrap">
          <nav className="header__nav">
            <a className="header__item link link--metis" href="#">Projects</a>
            <a className="header__item link link--metis" href="#">About</a>
            <a className="header__item link link--metis" href="#">Contact</a>
            <a className="header__item link link--metis" href="#">Inquiries</a>
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
          <div className="header__photo"><img className="header__pic" src="img/menu-pic.png" alt="" /></div>
        </div>


        <div className='nav__ctas'>
          <a href="" className='nav__icon'><FiPhone size={22} /></a>
          <a href="" className='nav__icon'><FiMail size={22} /></a>
          <a className="header__btn btn btn_pink" href="login.html">QUOTES</a>
          <a href="" className='link link--metis'>Fr</a>
        </div>


      </div>
      <div className="header__bg js-header-bg"></div>
    </div>
  )
}

export default Nav