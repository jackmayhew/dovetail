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
              <a className="footer__link" href="#">Projects </a>
              <a className="footer__link" href="#">About</a>
              <a className="footer__link" href="#">Contact</a>
              </div>
          </div>
          <div className="footer__col js-footer-col">
            {/* <div className="footer__category js-footer-category">
              Inquiries
            </div> */}
            <div className="footer__menu js-footer-menu">
              <a className="footer__link" href="#">Inquiries </a>
              <a className="footer__link" href="#">Careers</a>
              <a className="footer__link" href="#">News</a>
              </div>          
            </div>
          <div className="footer__col js-footer-col">

          <a className="header__btn btn btn_white foot__hide" href="login.html">QUOTES</a>

            </div>
        </div>
        <div className="footer__bottom">
          {/* <a className="footer__company" href="https://ui8.net/" target="_blank">
            <img className="footer__pic" src="/logo.png" alt="" />
            </a> */}
          <div className="footer__copyright">© 2023 Dovetail Construction</div>
          <a className="footer__scroll js-link-scroll" href="#header">
            <div className="footer__text">Terms and Conditions</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer