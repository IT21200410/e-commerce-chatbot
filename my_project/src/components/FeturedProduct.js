import React from "react";
import "../styles/FeturedProduct.css";
import Card from "./Card";

function FeturedProduct() {
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> Fetured products</h1>
        <p>
        "Discover our handpicked collection of fashion-forward essentials. Our featured products showcase the latest trends,
         from timeless classics to statement pieces that will elevate your style. Find the perfect blend of comfort, quality, 
         and style in every piece. Explore our curated selection of clothing, designed to make you look and feel your best.
         Stay ahead of the fashion game with our featured products – where style meets affordability."
        </p>
      </div>
      <div>
        <div class="card-container">
  <div class="card">
    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img src="https://images.pexels.com/photos/1080118/pexels-photo-1080118.jpeg?auto=compress&cs=tinysrgb&w=2200&h=1500&dpr=5" class="img-fluid"/>
      <a href="#!">
        <div class="mask"></div>
      </a>
    </div>
    <div class="card-body">
      <h1 class="card-title">$50</h1>
      <h2 class="card-title2">$30</h2>
           
    </div>
  </div>

  <div class="card">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="Dark">
      <img src="https://images.pexels.com/photos/2361289/pexels-photo-2361289.jpeg?auto=compress&cs=tinysrgb&w=2200&h=1500&dpr=5" class="img-fluid"/>
      <a href="#!">
        <div class="mask"></div>
      </a>
    </div>
    <div class="card-body">
    <h1 class="card-title">$70</h1>
      <h2 class="card-title2">$50</h2> 
         </div>
  </div>

  <div class="card">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img src="https://images.pexels.com/photos/1667512/pexels-photo-1667512.jpeg?auto=compress&cs=tinysrgb&w=2200&h=1500&dpr=5" class="img-fluid"/>
      <a href="#!">
        <div class="mask"></div>
      </a>
    </div>
    <div class="card-body">
    <h1 class="card-title">$90</h1>
      <h2 class="card-title2">$40</h2>   
       </div>
  </div>

  <div class="card">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img src="https://images.pexels.com/photos/859191/pexels-photo-859191.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid"/>
      <a href="#!">
        <div class="mask"></div>
      </a>
    </div>
    <div class="card-body">
    <h1 class="card-title">$50</h1>
      <h2 class="card-title2">$20</h2>    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default FeturedProduct;
