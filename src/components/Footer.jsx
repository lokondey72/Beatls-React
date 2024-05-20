const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="items">
          <div className="footer_col">
            <div className="footer_logo">
              <img src="footer-logo.png" alt="footer-logo" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, conser adipisicing elit, sed do eiumod
              apor incididunt ut labore et dolore magna aliqua.
              <span>Lorem ipsum dolor sit amet, conser adipisicing elit.</span>
            </p>
          </div>
          <div className="contact_col">
            <h4>Contact us</h4>
            <div className="contact_item">
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <ul>
                <li>
                  <a href="tel:+(334) 1234 5987">+(334) 1234 5987</a>
                </li>
                <li>
                  <a href="tel:+(334) 9876 2354">+(334) 9876 2354</a>
                </li>
              </ul>
            </div>
            <div className="contact_item">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <ul>
                <li>
                  <a href="mailto:beatlsinfo@gmail.com">beatlsinfo@gmail.com</a>
                </li>
                <li>
                  <a href="mailto:informationbeatls@mail.com">
                    informationbeatls@mail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact_item">
              <span>
                <i className="fa-solid fa-earth-americas"></i>
              </span>
              <ul>
                <li>
                  <a href="#">www.beatlsinformation.com</a>
                </li>
                <li>
                  <a href="#">www.informationbeatls.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="important_links">
            <h4>Important Links</h4>
            <div className="important_item">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">portfolio</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flickr_photos">
            <h4>Flickr Photos</h4>
            <div className="photos">
              <img src="flickr-photos-1.jpg" alt="flickr-photos-1" />
              <img src="flickr-photos-2.jpg" alt="flickr-photos-2" />
              <img src="flickr-photos-3.jpg" alt="flickr-photos-3" />
              <img src="flickr-photos-4.jpg" alt="flickr-photos-4" />
              <img src="flickr-photos-5.jpg" alt="flickr-photos-5" />
              <img src="flickr-photos-6.jpg" alt="flickr-photos-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="copiright">
        <p>
          Copyright{" "}
          <a href="#">
            <i className="fa-regular fa-copyright"></i>
          </a>{" "}
          2017. All rights reserved by <a href="#">BEATLS</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
