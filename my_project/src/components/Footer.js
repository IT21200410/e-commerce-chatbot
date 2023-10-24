import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
    <div className="top">
      <div className="cat">
      <div className="item1">
        <h1>Categories</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accessories</span>
        <span>New Arrivals</span>
      </div>
      <div className="item1">
        <h1>Links</h1>
        <span>FAQ</span>
        <span>Pages</span>
        <span>Stores</span>
        <span>Compare</span>
        <span>Cookies</span>
      </div>
      </div>
      <div className="item">
        <h1>About</h1>
        <span>
        At our clothing store, we're more than just fashion – we're your style destination. 
        With a passion for quality and a dedication to your unique taste, we curate collections that inspire and elevate your everyday. 
        Discover the perfect blend of comfort and fashion. Welcome to a world where your style and our expertise meet.
        </span>
      </div>
      <div className="item">
        <h1>Contact</h1>
        <span>
          <p>Tell no    011-72541</p>
          <p>email      Lemastore@gmail.com</p>
          <p>facebook   https://www.facebook.com/groups/3271275426470185</p>
        </span>
      </div>
    </div>
    <div className="bottom">
      <div className="left">
        <span className="logo">Lamastore</span>
        <span className="copyright">
          © Copyright 2023. All Rights Reserved
        </span>
      </div>
      <div className="right">
        <img src="/img/payment.png" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Footer
