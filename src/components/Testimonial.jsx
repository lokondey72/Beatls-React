import TestimonialComp from "./TestimonialComp";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="container">
        <div className="common_heading">
          <h2>
            Testimonial
            <img src="shape-1.png" alt="shape-1" />
          </h2>
        </div>
        <div className="items">
          <TestimonialComp imgUrl="Testimonial-img-1.png" name="Shahin Alom" post="Chairman">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
          </TestimonialComp>
          <TestimonialComp imgUrl="Testimonial-img-2.png" name="MAhadi Tahsan" post="Exicutive Director">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
          </TestimonialComp>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;