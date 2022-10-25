import React, { Component } from "react";
import cover from "../assets/m_cover1.jpg";
import cover_1 from "../assets/m_cover2.jpg";
import cover_2 from "../assets/m_cover3.png";
import img1 from "../assets/m_img1.webp";
import img2 from "../assets/m_img2.jpeg";
import img3 from "../assets/m_img3.jpeg";
import img4 from "../assets/m_img4.jpeg";
import img7 from "../assets/m_img7.jpg";
import img8 from "../assets/m_img8.jpg";

import "../App.css";



class Pharmacy extends Component {
  
  render() {
    
    return (
      <div>
       
        <br></br>
        <div className="container">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="card-img-top"
                  src={cover}
                  width="1108"
                  height="300"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="card-img-top"
                  src={cover_1}
                  width="1108"
                  height="300"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src={cover_2}
                  width="1108"
                  height="300"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <br></br>
          <br></br>
          <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
            <div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">search</button>
</div>
            </div>
            <div class="col-sm"></div>
          </div>

          <br></br>

          <div class="card-columns">
            <div class="card bg-light" id="cards">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <b>Panadol</b>
                </h5>
                <img class="card-img-top" src={img1} alt="Card image cap"></img>
                <p class="card-body">
                  Drug class: antimalarial quinolines
                  <br /> <b>Price: 50.Rs</b>
                </p>

                <a href="/pay"> <button class="btn btn-outline-success"style={{width:"100%"}} >BUY  </button></a>
              </div>
            </div>
            <div class="card bg-light" id="cards">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <b>Nurofloxacin</b>
                </h5>
                <img class="card-img-top" src={img2} alt="Card image cap"></img>
                <p class="card-body">
                  Drug class: Fentanyl
                  <br />
                  <b>Price: 20.Rs</b>
                </p>

                <a href="/pay"> <button class="btn btn-outline-success"style={{width:"100%"}} >BUY  </button></a>
              </div>
            </div>
            <div class="card bg-light" id="cards">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <b>Manorest</b>
                </h5>
                <img class="card-img-top" src={img3} alt="Card image cap"></img>
                <p class="card-body">
                  Drug class: Oxycodone
                  <br />
                  <b>Price: 30.Rs</b>
                </p>

                <a href="/pay"> <button class="btn btn-outline-success"style={{width:"100%"}} >BUY  </button></a>
              </div>
            </div>
            <div class="card bg-light" id="cards">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <b>Keolax</b>
                </h5>
                <img class="card-img-top" src={img4} alt="Card image cap"></img>
                <p class="card-body">
                  Drug class: Cannabinoids
                  <br />
                  <b>Price: 40.Rs</b>
                </p>

                <a href="/pay"> <button class="btn btn-outline-success"style={{width:"100%"}} >BUY  </button></a>
              </div>
            </div>
            <div class="card bg-light" id="cards">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <b>Amikacin</b>
                </h5>
                <img class="card-img-top" src={img7} alt="Card image cap"></img>
                <p class="card-body">
                  Drug class: Barbiturates
                  <br />
                  <b>Price: 70.Rs</b>
                </p>

                <a href="/pay"> <button class="btn btn-outline-success"style={{width:"100%"}} >BUY  </button></a>
              </div>
            </div>
            <div class="card bg-light" id="cards">
              <div class="card-body text-center">
                <h5 class="card-title">
                  <b>Tolbutamide</b>
                </h5>
                <img
                  class="card-img-top"
                  src={img8}
                  alt="Card image cap"
                  height="265px"
                ></img>
                <p class="card-body">
                  Drug class: Hallucinogens
                  <br />
                  <b>Price: 50.Rs</b>
                </p>

                <a href="/pay"> <button class="btn btn-outline-success"style={{width:"100%"}} >BUY  </button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Pharmacy;
