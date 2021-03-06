import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="bg-white container mx-3" style={{ height: "15px" }}>
        <div className="row">
          <div
            className="col-5"
            style={{ fontSize: "10px", color: "#666666", fontWeight: "bolder" }}
          >
            <div className="row">
              <span className="material-icons ml-2 md-18 mt-1">store</span>
              <p className="col-3 mt-2 ml-n1 mt-1">OFFICIAL STORE</p>
              <span className="material-icons ml-n2 md-18 mt-1">https</span>
              <p className="col-3 mt-2 ml-n2 mt-1">SECURE PAYMENT</p>
              <span className="material-icons mt-1 ml-n2 md-18">
                local_shipping
              </span>
              <p className="col-3 mt-2 ml-n2">FREE SHIPPING</p>
            </div>
          </div>
          <div className="col-3 mt-1 mx-5">
            <a
              href="https://www.biba.in/Registration/UserRegistration.aspx?ReturnUrl=https://www.biba.in"
              style={{ color: "#B21F29", fontWeight: "bold" }}
              className=""
            >
              REGISTER AND GET RS.300 OFF
            </a>
          </div>
          <div
            className="col-3 mt-1"
            style={{
              color: "#666666",
              fontWeight: "bold",
              right: "0",
              position: "absolute",
              marginRight: "-50px"
            }}
          >
            <p style={{ fontSize: "13px", color: "#666666" }}>
              <a
                href="https://forms.gle/DPWrEoRA9dTwXj6j6"
                style={{ color: "#666666" }}
              >
                Francise
              </a>
              &nbsp;|&nbsp;&nbsp;
              <a
                href="https://www.biba.in/pages/Store-Locator/pgid-1138578.aspx"
                style={{ color: "#666666" }}
              >
                Store Locator
              </a>
              &nbsp;|&nbsp; IND
              <img
                src="https://storage.sg.content-cdn.io/in-resources/bd5c1517-8d80-48d7-8e8e-365433ad124f/Images/userimages/ind_flag_new.jpg"
                style={{ width: "15px" }}
                className="ml-1"
                alt="..."
              />
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default Header;
