import React from "react";
import "./Portfolio.scss"; // Подключаем стили

const portfolioData = [
  "/images/portfolio/p1.jpg",
  "/images/portfolio/p2.jpg",
  "/images/portfolio/p3.jpg",
  "/images/portfolio/p4.jpg",
  "/images/portfolio/p5.jpg",
  "/images/portfolio/p6.jpg",
  "/images/portfolio/p7.jpg",
  "/images/portfolio/p8.jpg",
  "/images/portfolio/p9.jpg",
  // "/images/portfolio/p10.jpg",
  // "/images/portfolio/p11.jpg",
  // "/images/portfolio/p12.jpg",
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1 style={{ color: "black" }}>Мої роботи</h1>
      <div className="photo-grid">
        {portfolioData.map((item, index) => (
          <div key={index} className="photo">
            <img src={item} alt={item} className="photo-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
