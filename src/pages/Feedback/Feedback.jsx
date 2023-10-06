import React from "react";
import "./Feedback.scss"; // Подключите стили

function Feedback() {
  return (
    <div className="feedback-wrapper">
      <div className="feedback-container">
        <img
          src="/images/feedback/f1.jpg"
          alt="Відгук"
          className="feedback-photo"
        />
        <img
          src="/images/feedback/f2.jpg"
          alt="Відгук"
          className="feedback-photo"
        />
        <img
          src="/images/feedback/f3.jpg"
          alt="Відгук"
          className="feedback-photo"
        />
        <img
          src="/images/feedback/f4.jpg"
          alt="Відгук"
          className="feedback-photo"
        />
        <img
          src="/images/feedback/f5.jpg"
          alt="Відгук"
          className="feedback-photo"
        />
        <img
          src="/images/feedback/f6.jpg"
          alt="Відгук"
          className="feedback-photo"
        />
        <img
          src="/images/feedback/f7.jpg"
          alt="Відгук"
          className="feedback-photo"
        />

        {/* Добавьте другие фотографии отзывов */}
      </div>
    </div>
  );
}

export default Feedback;
