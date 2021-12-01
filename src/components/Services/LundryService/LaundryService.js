import React from "react";
import { Card} from "react-bootstrap";

const LaundryService = ({ laundry }) => {
  const { name, lowPrice, highPrice, image } = laundry;
  return (
    <div className="col-md-4 my-3">
      <Card>
        <Card.Img variant="top" src={image} style={{ height: "300px" }} />
        <Card.Body style={{ padding: "0px 0px 15px 0px", textAlign: "center" }}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            ৳{lowPrice} - ৳{highPrice}
          </Card.Text>
          <button className="btn-main px-5">Add To Cart</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LaundryService;
