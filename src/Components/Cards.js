import React, { useRef } from "react";
import { Link } from 'react-router-dom';

const Cards = (props) => {
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 800;
    const startPosition = container.scrollLeft;
    const targetPosition =
      direction === "right" ? startPosition + scrollAmount : startPosition - scrollAmount;

    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < 500) { // Adjust the duration as needed
        const newPosition = easeInOutQuad(elapsedTime, startPosition, targetPosition - startPosition, 500); // 500 is the duration
        container.scrollLeft = newPosition;
        requestAnimationFrame(animateScroll);
      } else {
        container.scrollLeft = targetPosition;
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginRight: "10px" }}>
        <h1 style={{ color: "white", marginLeft: "10px" }}>{props.name}</h1>
        <span style={{ right: "0px", display: "flex" ,justifyContent: "flex-end", marginBottom: "10px" }}>
          <button className="swiper-button" onClick={() => handleScroll("left")}>
            <i className="fas fa-angle-left"></i>
          </button>
          <button className="swiper-button" onClick={() => handleScroll("right")}>
            <i className="fas fa-angle-right"></i>
          </button>
        </span>
      </div>

      <div style={{ display: "flex" }}>
        <span
          id="cardContainer"
          ref={containerRef}
          className="card-container"
          style={{ display: "flex", overflowX: "hidden", marginLeft: "20px" ,marginRight:"20px",borderRadius:"5px"}}
        >
          {props.data.data.map((item, index) => {
            console.log('item before Link:', item);
            return (
              <Link  to={"/image/"+item.name} state= {{item}} >
                
                <div className="card-container" style={{ marginRight: "10px" }}>
                  <img src={item.images.jpg.image_url} style={{ borderRadius: "8px" }} className="cards" alt={`Image ${index}`} />
                  <p style={{ color: "white" }}>{item.title}</p>
                </div>
              </Link>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Cards;
