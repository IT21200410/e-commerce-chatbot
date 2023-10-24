import React from "react";
import "../styles/Card.css";

const Card = () => {

  return ( 

      <div className="card">
        <div className="image">
          <span>New Season</span>
          <img
            src={
             "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fHww"
            }
            alt=""
            className="mainImg"
          />
           <img
            src={
             "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fHww"
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGltYWdlfGVufDB8fDB8fHww"
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>Title</h2>
        <div className="prices">
          <h3>ddd</h3>
          <h3>ppp</h3>
        </div>
      </div>
    
  );
};

export default Card;
