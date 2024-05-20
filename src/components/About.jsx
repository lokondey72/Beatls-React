const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="common_heading">
          <h2>
            About Us
            <img src="shape-1.png" alt="shape-1" />
          </h2>
        </div>
        <div className="items">
          <div className="about_img">
            <img src="about-img-1.png" alt="about-img-1" />
          </div>
          <div className="about_text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor ididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
              <span>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officiaeserunt mollit
                anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque laudantium.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
