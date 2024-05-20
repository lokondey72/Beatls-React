import { PortfolioComp } from "./PortfolioComp";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="common_heading">
          <h2>
            Our Portfolio
            <img src="shape-1.png" alt="shape-1" />
          </h2>
        </div>
        <div className="items port">
          <div className="port_col">
            <PortfolioComp imgUrl="portfolio-small-img-1.webp"/>
            <PortfolioComp imgUrl="portfolio-big-img-1.webp"/>
          </div>
          <div className="port_col">
            <PortfolioComp imgUrl="portfolio-big-img-2.webp"/>
            <PortfolioComp imgUrl="portfolio-small-img-2.webp"/>
          </div>
          <div className="port_col">
            <PortfolioComp imgUrl="portfolio-small-img-3.webp"/>
            <PortfolioComp imgUrl="portfolio-big-img-3.webp"/>
          </div>
          <div className="port_col">
            <PortfolioComp imgUrl="portfolio-big-img-4.webp"/>
            <PortfolioComp imgUrl="portfolio-small-img-4.webp"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
