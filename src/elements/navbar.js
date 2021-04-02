import React from "react";

function Navbar() {
  return (
    <div className="sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-light mt-n3 mx-md-3"
        style={{ background: "white" }}
      >
        <a className="" href="https://www.biba.in/">
          <img
            src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/logo.png"
            alt="..."
            className="brand"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <form className="form-inline mt-2" id="navBarSearchForm">
            <div className="input-group mb-3">
              <input
                type="text"
                className="nav-search form-control"
                placeholder="What are you looking for?"
                aria-label="What are you looking for?"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="input-group-text bg-white" id="basic-addon2">
                  <span className="material-icons" style={{ fontSize: "12px" }}>
                    search
                  </span>
                </button>
              </div>
            </div>
          </form>
          <button
            className="btn btn-sm px-3 text-white navbar-mybutton"
            type="button"
            style={{ backgroundColor: "#B21F29", fontWeight: "bold" }}
          >
            LOGIN
          </button>
          <button
            className="btn btn-sm px-3 text-white mx-1 navbar-mybutton"
            type="button"
            style={{ backgroundColor: "#B21F29", fontWeight: "bold" }}
          >
            REGISTER
          </button>
          <ul className="nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href=" "
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="material-icons" style={{ color: "black" }}>
                  shopping_bag
                </span>
              </a>
              <div
                className="dropdown-menu"
                style={{ backgroundColor: "#F7F7F7" }}
              >
                <div></div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-lg navbar-light mt-n2 dressfont"
        style={{ background: "white" }}
      >
        <div
          className="navbar-collapse collapse justify-content-center"
          id="navbar2"
        >
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hider"
                href=" "
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontSize: "13px", fontWeight: "bold" }}
              >
                NEW ARRIVALS
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div
                  className="d-flex col-12 w-100"
                  style={{ fontSize: "12px" }}
                >
                  <ul className="navbar-list">
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Mix & Match
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/tops"
                      style={{ color: "#404040" }}
                    >
                      Topwear
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/tops/kurtas"
                      style={{ color: "#999999" }}
                    >
                      Kurtas
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/tops/kurtis"
                      style={{ color: "#999999" }}
                    >
                      Kurtis
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/tops/dresses"
                      style={{ color: "#999999" }}
                    >
                      Dresses
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/bottom"
                      style={{ color: "#404040" }}
                    >
                      Bottomwear
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/bottom/knitted-churidars"
                      style={{ color: "#999999" }}
                    >
                      Knitted Churidars
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/bottom/pants"
                      style={{ color: "#999999" }}
                    >
                      Pants
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/bottom/palazzos"
                      style={{ color: "#999999" }}
                    >
                      Pallazos
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/mix-and-match/bottom/leggings"
                      style={{ color: "#999999" }}
                    >
                      Leggings
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/bottom/skirts"
                      style={{ color: "#999999" }}
                    >
                      Skirts
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/bottom/athleisures"
                      style={{ color: "#999999" }}
                    >
                      Athleisure
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/dupatta"
                      style={{ color: "#404040" }}
                    >
                      Dupatta
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/dupatta/cotton-dupatta"
                      style={{ color: "#999999" }}
                    >
                      Dupatta
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/mask-scarf?PageNo=2"
                      style={{ color: "#404040" }}
                    >
                      Masks & Scarves
                    </a>

                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals-sleepwear"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Sleepwear
                    </a>
                    <br></br>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals-anju-modi-collection"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Biba by Anju Modi
                    </a>
                  </ul>
                  <ul className="navbar-list">
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Girls
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set"
                      style={{ color: "#404040" }}
                    >
                      Girl sets
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/a-line"
                      style={{ color: "#999999" }}
                    >
                      A-Line
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/anarkali"
                      style={{ color: "#999999" }}
                    >
                      Anarkali
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/asymmetic"
                      style={{ color: "#999999" }}
                    >
                      Asymmetic
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/girls/suit-sets/lehenga-set"
                      style={{ color: "#999999" }}
                    >
                      Girls Lehenga Set
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/straight"
                      style={{ color: "#999999" }}
                    >
                      Straight
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/flared"
                      style={{ color: "#999999" }}
                    >
                      Flared
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/girls/mix-and-match/dresses"
                      style={{ color: "#999999" }}
                    >
                      Dresses
                    </a>
                  </ul>
                  <ul className="navbar-list">
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Suit Sets
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/a-line"
                      style={{ color: "#999999" }}
                    >
                      A-Line
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/asymmetric"
                      style={{ color: "#999999" }}
                    >
                      Asymmetric
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/flared"
                      style={{ color: "#999999" }}
                    >
                      Flared
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/kalidar"
                      style={{ color: "#999999" }}
                    >
                      Kalidar
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/straight"
                      style={{ color: "#999999" }}
                    >
                      Straight
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/anarkali"
                      style={{ color: "#999999" }}
                    >
                      Anarkali Suit Set
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/lehenga-set"
                      style={{ color: "#999999" }}
                    >
                      Lehenga Set
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/fusion-wear"
                      style={{ color: "#999999" }}
                    >
                      Fusion Wear
                    </a>
                  </ul>
                  <ul>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/jewellery"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Jewellery
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/jewellery/earrings"
                      style={{ color: "#999999" }}
                    >
                      Earings
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/jewellery/rings"
                      style={{ color: "#999999" }}
                    >
                      Rings
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/jewellery/bracelets"
                      style={{ color: "#999999" }}
                    >
                      Bracelets
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/jewellery/bangles"
                      style={{ color: "#999999" }}
                    >
                      Bangles
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/jewellery/necklaces"
                      style={{ color: "#999999" }}
                    >
                      Necklaces
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals-easy-stitch"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Easy Stitch
                    </a>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hider"
                href=" "
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontSize: "13px", fontWeight: "bold" }}
              >
                SUIT SETS
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div style={{ fontSize: "12px" }}>
                  <ul className="navbar-list">
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Suit Sets
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/a-line"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      A-Line
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/asymmetric"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Asymmetric
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/flared"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Flared
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/kalidar"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Kalidar
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/straight"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Straight
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/anarkali"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Anarkali Suit Set
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/lehenga-set"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Lehenga Set
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/suit-sets/fusion-wear"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Fusion Wear
                    </a>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hider"
                href=" "
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontSize: "13px", fontWeight: "bold" }}
              >
                MIX AND MATCH
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div style={{ fontSize: "12px" }}>
                  <ul className="navbar-list">
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/tops"
                      style={{ color: "#404040" }}
                    >
                      Topwear
                    </a>

                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/tops/kurtas"
                      style={{ color: "#999999" }}
                    >
                      Kurtas
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/tops/kurtis"
                      style={{ color: "#999999" }}
                    >
                      Kurtis
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/tops/dresses"
                      style={{ color: "#999999" }}
                    >
                      Dresses
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/bottom"
                      style={{ color: "#404040" }}
                    >
                      Bottomwear
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/bottom/knitted-churidars"
                      style={{ color: "#999999" }}
                    >
                      Knitted Churidars
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/bottom/pants"
                      style={{ color: "#999999" }}
                    >
                      Pants
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/bottom/palazzos"
                      style={{ color: "#999999" }}
                    >
                      Pallazos
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/mix-and-match/bottom/leggings"
                      style={{ color: "#999999" }}
                    >
                      Leggings
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/bottom/skirts"
                      style={{ color: "#999999" }}
                    >
                      Skirts
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/bottom/athleisures"
                      style={{ color: "#999999" }}
                    >
                      Athleisure
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/dupatta"
                      style={{ color: "#404040" }}
                    >
                      Dupatta
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/dupatta/cotton-dupatta"
                      style={{ color: "#999999" }}
                    >
                      Dupatta
                    </a>
                  </ul>
                  <ul className="navbar-list">
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/mask-scarf?PageNo=2"
                      style={{ color: "#404040" }}
                    >
                      Masks & Scarves
                    </a>

                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals-sleepwear"
                      style={{ color: "#B21F29" }}
                    >
                      Sleepwear
                    </a>
                    <br></br>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals-anju-modi-collection"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Biba by Anju Modi
                    </a>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hider"
                href=" "
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontSize: "13px", fontWeight: "bold" }}
              >
                GIRLS
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div
                  className="d-flex col-12 w-100"
                  style={{ fontSize: "12px" }}
                >
                  <ul className="navbar-list">
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Girls
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set"
                      style={{ color: "#404040" }}
                    >
                      Girl sets
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/a-line"
                      style={{ color: "#999999" }}
                    >
                      A-Line
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/anarkali"
                      style={{ color: "#999999" }}
                    >
                      Anarkali
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/asymmetic"
                      style={{ color: "#999999" }}
                    >
                      Asymmetic
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/girls/suit-sets/lehenga-set"
                      style={{ color: "#999999" }}
                    >
                      Girls Lehenga Set
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/straight"
                      style={{ color: "#999999" }}
                    >
                      Straight
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/flared"
                      style={{ color: "#999999" }}
                    >
                      Flared
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/girls/mix-and-match/dresses"
                      style={{ color: "#999999" }}
                    >
                      Dresses
                    </a>
                  </ul>
                  <ul className="navbar-list">
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/tops"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Girl's Top Wear
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/tops/kurtas"
                      style={{ color: "#999999" }}
                    >
                      Kurtas
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/tops/kurtis"
                      style={{ color: "#999999" }}
                    >
                      Kurtis
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/mix-and-match/tops/dresses"
                      style={{ color: "#999999" }}
                    >
                      Dresses
                    </a>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <a
            style={{ fontSize: "13px", fontWeight: "bold" }}
            className="hider ml-3"
            href="https://www.biba.in/anju-modi-collection"
          >
            BIBA BY ANJU MODI
          </a>
          <a
            style={{ fontSize: "12px", fontWeight: "bold" }}
            className="hider px-3"
            href="https://www.biba.in/all-sleepwear"
          >
            SLEEPWEAR
          </a>
          <a
            style={{ fontSize: "12px", fontWeight: "bold" }}
            className="hider"
            href="https://www.biba.in/easy-stitch"
          >
            EASY STICH
          </a>
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hider"
                href=" "
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontSize: "13px", fontWeight: "bold" }}
              >
                FOOTWEAR
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div
                  className="d-flex col-12 w-100"
                  style={{ fontSize: "12px" }}
                >
                  <ul className="navbar-list">
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/All-Footwear-Girls%20Footwear"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Girls Footwear
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/All-Footwear-Womens%20Flats"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Women Flats
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/All-Footwear-Womens%20Sandals"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Women Sandals
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/All-Footwear-Womens%20Wedges"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Women Fedges
                    </a>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hider"
                href=" "
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontSize: "13px", fontWeight: "bold" }}
              >
                BOTTOMWEAR
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div
                  className="d-flex col-12 w-100"
                  style={{ fontSize: "12px" }}
                >
                  <ul className="navbar-list">
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/mix-and-match/bottom/pants"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Pants
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/mix-and-match/bottom/palazzos"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Pallazo
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/mix-and-match/bottom/leggings"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Leggings
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/mix-and-match/bottom/knitted-churidar"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Knitted Churidars
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/mix-and-match/bottom/skirts"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Skirts
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/mix-and-match/salwar"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Salwar
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/all-mix-and-match-bottom-athleisures22"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Athleisure
                    </a>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hider"
                href=" "
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontSize: "13px", fontWeight: "bold" }}
              >
                JEWELLERY
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div
                  className="d-flex col-12 w-100"
                  style={{ fontSize: "12px" }}
                >
                  <ul className="navbar-list">
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/jewellery/earrings"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Earings
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/jewellery/rings"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Rings
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/jewellery/bracelets"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Bracelets
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/jewellery/bangles"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Bangles
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/jewellery/necklaces"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Necklaces
                    </a>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hider"
                href=" "
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontSize: "13px", fontWeight: "bold" }}
              >
                FACTORY OUTLET
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div
                  className="d-flex col-12 w-100"
                  style={{ fontSize: "12px" }}
                >
                  <ul className="navbar-list">
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls"
                      style={{ color: "#B21F29", fontSize: "15px" }}
                    >
                      Girls
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set"
                      style={{ color: "#404040" }}
                    >
                      Girl sets
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/a-line"
                      style={{ color: "#999999" }}
                    >
                      A-Line
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/anarkali"
                      style={{ color: "#999999" }}
                    >
                      Anarkali
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/asymmetic"
                      style={{ color: "#999999" }}
                    >
                      Asymmetic
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/girls/suit-sets/lehenga-set"
                      style={{ color: "#999999" }}
                    >
                      Girls Lehenga Set
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/straight"
                      style={{ color: "#999999" }}
                    >
                      Straight
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/new-arrivals/girls/suit-set/flared"
                      style={{ color: "#999999" }}
                    >
                      Flared
                    </a>
                    <a
                      className="dropdown-item"
                      href="https://www.biba.in/girls/mix-and-match/dresses"
                      style={{ color: "#999999" }}
                    >
                      Dresses
                    </a>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <a
            style={{ fontSize: "13px", fontWeight: "bold" }}
            className="hider px-3"
            href="https://www.biba.in/all-sleepwear"
          >
            BLOG
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
