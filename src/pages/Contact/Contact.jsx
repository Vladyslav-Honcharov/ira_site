import React, { useEffect } from "react";
import "./Contacts.scss";

function Contact() {
  useEffect(() => {
    // Declare apiKey within the scope of useEffect
    const apiKey = "AIzaSyCvtmrkdNBp6GtOoKQW67ZVTvmVo-NZR_4"; // Replace with your API key

    // Инициализация карты при загрузке компонента
    window.initMap = () => {
      const mapElement = document.getElementById("map");

      const map = new window.google.maps.Map(mapElement, {
        center: { lat: 51.5074, lng: -0.1278 },
        zoom: 15,
      });

      const marker = new window.google.maps.Marker({
        position: { lat: 51.5074, lng: -0.1278 }, // Укажите координаты маркера
        map: map,
        title: "Название маркера", // Замените на ваш текст
      });

      const infowindow = new window.google.maps.InfoWindow({
        content: "Текст информационного окна", // Замените на ваш текст
      });

      marker.addListener("click", () => {
        infowindow.open(map, marker);
      });
    };

    // Загрузка скрипта Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  return <div id="map" className="map"></div>;
}

export default Contact;
