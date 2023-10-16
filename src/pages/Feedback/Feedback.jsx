import React from "react";
import "./Feedback.scss";

function Feedback() {
  const feedbackPhotos = [
    "/images/feedback/f1.jpg",
    "/images/feedback/f2.jpg",
    "/images/feedback/f3.jpg",
    "/images/feedback/f4.jpg",
    "/images/feedback/f5.jpg",
    "/images/feedback/f6.jpg",
    "/images/feedback/f7.jpg",
    "/images/feedback/f8.jpg",
    "/images/feedback/f9.jpg",
    "/images/feedback/f10.jpg",
    "/images/feedback/f11.jpg",
    "/images/feedback/f12.jpg",
  ];

  return (
    <div className="feedback-wrapper">
      <div className="feedback-container">
        {feedbackPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt="Відгук"
            className="feedback-photo"
          />
        ))}
      </div>
    </div>
  );
}

export default Feedback;
