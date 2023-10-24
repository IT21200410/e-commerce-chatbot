import React from 'react'
import '../styles/TrendingProducts.css'



function TrendingProducts() {
  return (
    <div className="TrendingProducts">
      <div className="top">
        <h1> Trending products</h1>
        <p>
        "Elevate your wardrobe with our essential fashion trends. 
        Explore the latest styles that are turning heads and setting new fashion standards in today's world of style and elegance."
        </p>
      </div>

      <div class="card-container">
  <div class="card">
    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img src="https://images.pexels.com/photos/2291017/pexels-photo-2291017.jpeg?auto=compress&cs=tinysrgb&w=2200&h=1500&dpr=5" class="img-fluid"/>
      <a href="#!">
        <div class="mask"></div>
      </a>
    </div>
    <div class="card-body">
      <h1 class="card-title3">Hats</h1>
    </div>
  </div>

  <div class="card">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img src="https://images.pexels.com/photos/12320394/pexels-photo-12320394.jpeg?auto=compress&cs=tinysrgb&w=2200&h=1500&dpr=5" class="img-fluid"/>
      <a href="#!">
        <div class="mask"></div>
      </a>
    </div>
    <div class="card-body">
      <h1 class="card-title3">Sports wears</h1>
    </div>
  </div>

  <div class="card">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img src="https://images.pexels.com/photos/2929567/pexels-photo-2929567.jpeg?auto=compress&cs=tinysrgb&w=2200&h=1500&dpr=5" class="img-fluid"/>
      <a href="#!">
        <div class="mask"></div>
      </a>
    </div>
    <div class="card-body">
      <h1 class="card-title3">Sun glasses</h1>
    </div>
  </div>

  <div class="card">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img src="https://images.pexels.com/photos/1400355/pexels-photo-1400355.jpeg?auto=compress&cs=tinysrgb&w=2200&h=1500&dpr=5" class="img-fluid"/>
      <a href="#!">
        <div class="mask"></div>
      </a>
    </div>
    <div class="card-body">
      <h1 class="card-title3">Shirts</h1>
    </div>
  </div>
</div>
      </div>

  )
}

export default TrendingProducts
