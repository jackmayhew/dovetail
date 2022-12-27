import Nav from '../Components/Nav'
import { useEffect } from 'react'
import gsap from "gsap";
import Head from 'next/head'



export default function Home() {



  return (
    <>
      <Head>
        <title>Dovetail Renovations</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src='https://www.kee.photography/js/lib/SplitText.min.js'></script>
      </Head>
      <Nav />

      <div className='hero'>
        <div className='hero__inner'>
          <div className='hero__text text1'>Dovetail</div>
          <div className="reveal-box enter animate">
            <div className="reveal-box__inner">
              <img className="reveal-box__image" src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
            </div>
          </div>
          <div className='hero__text text2'>Renovations</div>
        </div>
      </div>
      <div>
        What Defines Us
      </div>



    </>


  )
}
