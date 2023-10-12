import React from "react";
import "./Portfolio.scss"; // Подключаем стили

const portfolioData = [
  {
    id: 1,
    imageUrl: "https://placekitten.com/400/600",
    description: "Работа 1: Описание",
  },
  {
    id: 2,
    imageUrl: "https://placekitten.com/800/400",
    description: "Работа 2: Описание",
  },
  {
    id: 3,
    imageUrl: "https://placekitten.com/600/600",
    description: "Работа 3: Описание",
  },
  {
    id: 4,
    imageUrl: "https://placekitten.com/500/700",
    description: "Работа 4: Описание",
  },
  {
    id: 5,
    imageUrl: "https://placekitten.com/700/500",
    description: "Работа 5: Описание",
  },
  {
    id: 6,
    imageUrl: "https://placekitten.com/600/800",
    description: "Работа 6: Описание",
  },
  {
    id: 7,
    imageUrl: "https://placekitten.com/900/600",
    description: "Работа 7: Описание",
  },
  {
    id: 8,
    imageUrl: "https://placekitten.com/700/900",
    description: "Работа 8: Описание",
  },
  // Добавьте больше фотографий и описаний в массив
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1 style={{ color: "black" }}>Мої роботи</h1>
      <div className="photo-grid">
        {portfolioData.map((item) => (
          <div key={item.id} className="photo">
            <img
              src={item.imageUrl}
              alt={item.description}
              className="photo-image"
            />
            {/* <p className="photo-description">{item.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
