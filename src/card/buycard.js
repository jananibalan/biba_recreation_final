import React from "react";

function BuyCard(props) {
  let discount = { display: "inline" };
  if (props.discount === "") {
    discount = { display: "none" };
  }
  return (
    <div
      className="card carder border-0"
      style={{
        width: "250px",
        height: "450px",
        overflow: "hidden",
        float: "left"
      }}
    >
      <img
        src={props.src}
        className="card-img-top"
        alt="..."
        style={{ width: "250px", height: "350px" }}
      />

      <div className="card-body text-center ">
        <p className="card-text text-dark" style={{ fontSize: "12px" }}>
          {props.caption}
        </p>
        <p className="card-text">
          <span className="price">&#8377;{props.price}&nbsp;</span>
          <span className="originalprice" style={discount}>
            &#8377;{props.originalprice}
          </span>
          <span>
            &nbsp;(
            <span className="discount text-secondary" style={discount}>
              {props.discount}
            </span>
            % OFF)
          </span>
        </p>
      </div>
    </div>
  );
}

export default BuyCard;
