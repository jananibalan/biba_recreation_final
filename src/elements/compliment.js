import React from "react";

function Compliment() {
  return (
    <div className="mx-md-5 mx-lg-5 mx-2">
      <h4
        className="px-md-5 px-3 design-pick-font"
        style={{ fontWeight: "normal" }}
      >
        COMPLEMENT YOUR LOOKS
      </h4>
      <div className="row my-3">
        <a
          href="https://www.biba.in/All-Footwear"
          className=" px-0 col-6 col-md-6 col-lg-6"
        >
          <img
            src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-1-21/footwear.jpg"
            alt=".."
            className="col"
          />
        </a>
        <a
          href="https://www.biba.in/jewellery"
          className="px-0 col-6 col-md-6 col-lg-6"
        >
          <img
            src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-1-21/jewellery.jpg"
            alt="..."
            className="col"
          />
        </a>
      </div>
      <div className="row">
        <a href="https://www.biba.in/wedding-collection">
          <img
            src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/wedding.jpg"
            alt="..."
            className="col-12 col-md-12 col-lg-12"
          />
        </a>
      </div>
      <div className="row mt-3">
        <a href="https://www.biba.in/suit-sets/lehenga-set">
          <img
            src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/lehenga.jpg"
            alt="..."
            className="col-12 col-md-12 col-lg-12"
          />
        </a>
      </div>
    </div>
  );
}
export default Compliment;
