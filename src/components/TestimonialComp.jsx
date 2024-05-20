const TestimonialComp = ({imgUrl,name,post,children}) => {
  return (
    <div className="test_col">
            <div className="test_img">
              <img src={imgUrl} alt="Testimonial-img-1" />
            </div>
            <div className="test_text">
              <h4>{name}</h4>
              <ul>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star-half"></i>
                </li>
              </ul>
              <p>{post}</p>
              <p>{children}</p>
            </div>
          </div>
  )
}

export default TestimonialComp