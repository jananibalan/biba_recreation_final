import React from "react";

function Banner() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      data-interval="2000"
      data-pause="false"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval="2000">
          <a href="https://www.biba.in/special-discount-upto-50p-off">
            <img
              src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1800,height=490,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/up502.jpg"
              alt="..."
              className="d-block w-100"
            />
          </a>
        </div>
        <div className="carousel-item" data-interval="2000">
          <a href="https://www.biba.in/summer-special">
            <img
              src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1800,height=490,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/summer.jpg"
              alt="..."
              className="d-block w-100"
            />
          </a>
        </div>
        <div className="carousel-item" data-interval="2000">
          <a href="https://www.biba.in/new-arrivals">
            <img
              src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1800,height=490,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/ss213.jpg"
              alt="..."
              className="d-block w-100"
            />
          </a>
        </div>
        <div className="carousel-item" data-interval="2000">
          <a href="https://www.biba.in/new-arrivals/girls">
            <img
              src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1800,height=490,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/girls2.jpg"
              alt="..."
              className="d-block w-100"
            />
          </a>
        </div>
      </div>
      <a
        className="carousel-control-prev my-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="material-icons my-left">keyboard_arrow_left</span>
      </a>
      <a
        className="carousel-control-next my-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="material-icons my-right">keyboard_arrow_left</span>
      </a>
    </div>
  );
}
export default Banner;
