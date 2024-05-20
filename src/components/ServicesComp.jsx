const ServicesComp = ({imgUrl,header,children}) => {
  return (
    <div className="ser_col">
      <div className="ser_item">
        <div className="ser_icon">
          <img src={imgUrl} alt="service_icon-1" />
        </div>
        <h3>{header}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ServicesComp;
