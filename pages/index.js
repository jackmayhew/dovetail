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
    gsap.registerPlugin(CSSRulePlugin);

    gsap.to('.text1', {
      duration: 1.75,
      ease: 'Power3.easeOut',
      startAt: { x: '-30%', opacity: 0 },
      x: 0,
      opacity: 1,
      delay: 1,
    });

    gsap.to('.text2', {
      duration: 1.75,
      ease: 'Expo.easeOut',
      startAt: { x: '30%', opacity: 0 },
      x: 0,
      opacity: 1,
      delay: 1.25,

      // delay: pos => pos*0.06
    });

    gsap.to('.cta__top', {
      duration: 1.75,
      ease: 'Expo.easeOut',
      startAt: { x: '50%', opacity: 0 },
      x: 0,
      opacity: 1,
      delay: 1.75,

      // delay: pos => pos*0.06
    });

    gsap.to('.cta__bottom', {
      duration: 1.75,
      ease: 'Expo.easeOut',
      startAt: { x: '-50%', opacity: 0 },
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
          <div className='hero__text text1'><h1>DOVETAIL</h1></div>
          <div className="reveal-box enter animate">
            <div className="reveal-box__inner">
              <img className="reveal-box__image" src="https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            </div>
          </div>
          <div className='hero__text text2'><h1>RENOVATIONS</h1></div>

        </div>
        <div className='hero__ctas'>
          <a className='hero__a'>
            <span className='link link--metis cta__top'>our</span>
            <span className='cta__bottom'>
              <span className='link link--metis'>story</span>
              <BsArrowDownRight className='grow' />
            </span>
          </a>
          <a>
            <span className='link link--metis cta__top'>career</span>
            <span className='cta__bottom'>
              <span className='link link--metis'>opportunities</span>
              <BsArrowDownRight className='grow' />
            </span>
          </a>
        </div>

      </div>



      <OurStory />
      <RecentWork />
      <News />
      <Careers />
      <Footer />
    </div>


  )
}

