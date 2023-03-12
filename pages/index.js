import Nav from '../Components/Nav'
import OurStory from '../Components/Home/OurStory';
import { useEffect, useRef } from 'react'
import gsap from "gsap";
import Head from 'next/head'
import Footer from '../Components/Footer';
import RecentWork from '../Components/Home/RecentWork';
import News from '../Components/Home/News';
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import { BsArrowDownRight } from 'react-icons/bs';
import Careers from '../Components/Home/Careers';





export default function Home() {



  useEffect(() => {

    let ok = document.getElementsByClassName('hero__titles')[0]
    let ok2 = document.getElementsByClassName('reveal-box')[0]
    let ok3 = document.getElementsByClassName('hero__ctas')[0]

    ok.style.width = ok2.clientWidth + "px"
    ok3.style.width = ok2.clientWidth + "px"

    gsap.registerPlugin(CSSRulePlugin);

    gsap.to('.one', {
      duration: 1.75,
      ease: 'Power3.easeOut',
      startAt: { x: '-30%', opacity: 0 },
      x: 0,
      opacity: 1,
      delay: 1,
    });

    gsap.to('.two', {
      duration: 1.75,
      ease: 'Expo.easeOut',
      startAt: { x: '30%', opacity: 0 },
      x: 0,
      opacity: 1,
      delay: 1.25,

      // delay: pos => pos*0.06
    });


    gsap.to('.three', {
      duration: 1.75,
      ease: 'Power3.easeOut',
      startAt: { x: '-30%', opacity: 0 },
      x: 0,
      opacity: 1,
      delay: 1.5,
    });

    gsap.to('.cta__top', {
      duration: 1.75,
      ease: 'Expo.easeOut',
      startAt: { x: '25%', opacity: 0 },
      x: 0,
      opacity: 1,
      delay: 1.75,

      // delay: pos => pos*0.06
    });

    gsap.to('.cta__bottom', {
      duration: 1.75,
      ease: 'Expo.easeOut',
      startAt: { x: '-25%', opacity: 0 },
      x: 0,
      opacity: 1,
      delay: 1.75,

      // delay: pos => pos*0.06
    });


  }, [])


  return (

    <div className='centerr'>

      <Head>
        <title>Dovetail Renovations</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <script src='https://www.kee.photography/js/lib/SplitText.min.js'></script> */}
      </Head>

      <Nav />


      <div className='hero'>
        <div className='hero__inner'>
          <div className='hero__titles'>
            <h1 className='one'>BUILDING</h1>
            <h1 className='two'>WITH</h1>
            <h1 className='three'>VISION</h1>
          </div>
          <div className="reveal-box enter animate">
            <div className="reveal-box__inner">
              <img className="reveal-box__image" src="https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            </div>
          </div>
        </div>
            {/* <div className='sing'>
            <a className='hero__sa'>
            <span className='link link--metis cta__top'>OUR</span>
            <span className='cta__bottom'>
              <span className='link link--metis'>STORY</span>
              <BsArrowDownRight className='grow' />
            </span>
          </a>
            </div> */}
        <div className='hero__ctas'>
          <a className='hero__a'>
            <span className='link link--metis cta__top'>DOVETAIL</span>
            <span className='cta__bottom'>
              <span className='link link--metis'>RENOVATIONS</span>
              {/* <BsArrowDownRight className='grow' /> */}
            </span>
          </a>
          <a>
            <span className='link link--metis cta__top'>EST.</span>
            <span className='cta__bottom'>
              <span className='link link--metis'>2019</span>
              {/* <BsArrowDownRight className='grow' /> */}
            </span>
          </a>
        </div>

      </div>


      {/* <div className="wrapper">

  <div className="arrow">
    <div className="arrow_line">
    </div>
    <div className="arrow_tip-wrapper">
      <div className="arrow_tip left">
      </div>
      <div className="arrow_tip right">
      </div>
    </div>
  </div>
</div> */}


      <OurStory />
      <RecentWork />
      {/* <News />   */}
      <Careers />
      <Footer />
    </div>


  )
}

