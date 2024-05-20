const Heading = () => {
  return (
    <header id="heading">
      <div className="container">
        <div className="items">
          <div className="heading_text">
            <p>Welcome to Beatles</p>
          </div>
          <div className="heading_icon">
            <ul>
              <li>
                <a href="#">
                  <i classNameName="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i classNameName="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i classNameName="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i classNameName="fa-brands fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i classNameName="fa-brands fa-behance"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Heading;
