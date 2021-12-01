import React from "react";

const WhyChooseUs = (props) => {
  const { image, name, description } = props.choose;
  return (
    <div className="col-md-4 d-flex justify-content-center mt-5  ">
      <div style={{marginLeft:"50px"}}>
        <img className="icon" style={{color: 'green', height: '100px'}} src={image} alt={image} />
        <h5 className="m-2">{name}</h5>
        <p style={{fontSize: '14px'}}>{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
