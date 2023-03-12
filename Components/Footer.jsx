import React from 'react'

function Footer() {
  return (
    <div className="footer js-footer">
      <div className="footer__center center">
        <div className="footer__row">
          <div className="footer__col"><a className="footer__logo" href="#"><img className="footer__pic" src="logo.png" alt="" /></a></div>
          <div className="footer__col js-footer-col">
            {/* <div className="footer__category js-footer-category">
              Company
            </div> */}
            <div className="footer__menu js-footer-menu">
              <a className="footer__link foot__link link link--metis" href="#">Projects </a>
              <a className="footer__link foot__link link link--metis" href="#">About</a>
              <a className="footer__link foot__link link link--metis" href="#">Contact</a>
              </div>
          </div>
          <div className="footer__col js-footer-col">
            {/* <div className="footer__category js-footer-category">
              Inquiries
            </div> */}
            <div className="footer__menu js-footer-menu">
              <a className="footer__link foot__link link link--metis" href="#">Inquiries </a>
              <a className="footer__link foot__link link link--metis" href="#">Careers</a>
              <a className="footer__link foot__link link link--metis" href="#">News</a>
              </div>          
            </div>
          <div className="footer__col js-footer-col">

          {/* <a className="header__btn btn btn_white foot__hide" href="login.html">QUOTES</a> */}
              <a href="" className='footer__career'>
                <span className='footer__link foot__link link link--metis foot__1'>work with</span>
                <span className='footer__link foot__link link link--metis foot__2'>dovetail</span>
                <span className='footer__link foot__link link link--metis foot__3'>renovations</span>
              </a>

            </div>
        </div>
        <div className="footer__bottom">
          {/* <a className="footer__company" href="https://ui8.net/" target="_blank">
            <img className="footer__pic" src="/logo.png" alt="" />
            </a> */}
          <div className="footer__copyright">© 2023 Dovetail Construction</div>
          <a className="footer__scroll js-link-scroll" href="#header">
            <span className="footer__text foot__link link link--metis">Terms and Conditions</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer