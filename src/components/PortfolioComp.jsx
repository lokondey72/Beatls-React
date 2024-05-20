export const PortfolioComp = ({imgUrl}) => {
  return (
    <div className="port_img">
      <img src={imgUrl} alt="portfolio-small-img-1" />
      <div className="overly">
        <a href="#">
          <i className="fa-solid fa-link"></i>
        </a>
      </div>
    </div>
  );
};
