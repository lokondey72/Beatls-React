import ServicesComp from "./ServicesComp";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="common_heading">
          <h2>
            Our Services
            <img src="shape-1.png" alt="shape-1" />
          </h2>
        </div>
        <div className="items">
          <ServicesComp imgUrl="service_icon-1.png" header="Graphic Design">
          Lorem ipsum dolor sit amet, consectetpisg elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
          </ServicesComp>
          <ServicesComp imgUrl="service_icon-2.png" header="Web Design">
          Lorem ipsum dolor sit amet, consectetpisg elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
          </ServicesComp>
          <ServicesComp imgUrl="service_icon-3.png" header="Marn Development">
          Lorem ipsum dolor sit amet, consectetpisg elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
          </ServicesComp>
        </div>
      </div>
    </section>
  );
};

export default Services;
