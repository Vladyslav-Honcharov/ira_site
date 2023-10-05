import React from "react";
import "./Portfolio.scss"; // Подключаем стили

// Генерируем случайное число в заданном диапазоне
function getRandomSize(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const portfolioData = [
  {
    id: 1,
    imageUrl: "https://placekitten.com/400/600",
    description: "Работа 1: Описание",
    width: getRandomSize(300, 500),
    height: getRandomSize(400, 600),
  },
  {
    id: 2,
    imageUrl: "https://placekitten.com/800/400",
    description: "Работа 2: Описание",
    width: getRandomSize(600, 800),
    height: getRandomSize(300, 400),
  },
  {
    id: 3,
    imageUrl: "https://placekitten.com/600/600",
    description: "Работа 3: Описание",
    width: getRandomSize(500, 700),
    height: getRandomSize(500, 700),
  },
  {
    id: 4,
    imageUrl: "https://placekitten.com/500/700",
    description: "Работа 4: Описание",
    width: getRandomSize(400, 600),
    height: getRandomSize(600, 800),
  },
  {
    id: 5,
    imageUrl: "https://placekitten.com/700/500",
    description: "Работа 5: Описание",
    width: getRandomSize(600, 800),
    height: getRandomSize(400, 600),
  },
  {
    id: 6,
    imageUrl: "https://placekitten.com/600/800",
    description: "Работа 6: Описание",
    width: getRandomSize(200, 300),
    height: getRandomSize(400, 500),
  },
  {
    id: 7,
    imageUrl: "https://placekitten.com/900/600",
    description: "Работа 7: Описание",
    width: getRandomSize(500, 600),
    height: getRandomSize(500, 700),
  },
  {
    id: 8,
    imageUrl: "https://placekitten.com/700/900",
    description: "Работа 8: Описание",
    width: getRandomSize(300, 400),
    height: getRandomSize(500, 600),
  },
  // Добавьте больше фотографий и описаний в массив
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1>Портфоліо</h1>
      <div className="photo-grid">
        {portfolioData.map((item) => (
          <div key={item.id} className="photo">
            <img
              src={item.imageUrl}
              alt={item.description}
              className="photo-image"
              style={{ width: item.width, height: item.height }}
            />
            <p className="photo-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
