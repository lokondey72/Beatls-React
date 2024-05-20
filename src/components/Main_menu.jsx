const Main_menu = () => {
  return (
    <nav id="mein_menu">
      <div className="container">
        <div className="items">
          <div className="mein_logo">
            <div className="logo">
              <a href="#">
                <img src="logo.png" alt="logo" />
              </a>
            </div>
          </div>
          <div className="menu_col">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Main_menu;
