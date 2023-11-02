import { Button } from "@mui/material";
import React from "react";
import "./Contacts.scss";
import { FaViber, FaTelegram, FaMapMarkerAlt } from "react-icons/fa";
import { BsInstagram, BsPhoneFill } from "react-icons/bs";

function Contact() {
  const iframeStyles = {
    border: "0",
  };
  return (
    <div className="contacts-wrapper">
      <div className="contacts">
        <div className="map">
          <div className="map-header">
            <FaMapMarkerAlt fill="red"></FaMapMarkerAlt> Андрія Малишка 2
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.0652804663112!2d30.611249039004523!3d50.45729340053618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cffc6974e381%3A0xab2a06b0813c93da!2z0LLRg9C70LjRhtGPINCQ0L3QtNGA0ZbRjyDQnNCw0LvQuNGI0LrQsCwgMiwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1698953302689!5m2!1suk!2sua"
            width="100%"
            height="400"
            style={iframeStyles}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Button
            href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%90%D0%BD%D0%B4%D1%80%D1%96%D1%8F+%D0%9C%D0%B0%D0%BB%D0%B8%D1%88%D0%BA%D0%B0,+2,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.4572934,30.611249,18z/data=!3m1!4b1!4m6!3m5!1s0x40d4cffc6974e381:0xab2a06b0813c93da!8m2!3d50.4572917!4d30.6125365!16s%2Fg%2F1trswj2s?hl=uk-UK&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            style={{
              background: "grey",
              borderColor: "grey",
              color: "white",
              minWidth: "200px",
            }}
          >
            Прокласти маршрут
          </Button>
        </div>
        <div className="contacts-social">
          <a
            href="https://www.instagram.com/s.i_lashes/"
            target="_blank"
            className="contacts-social__link"
          >
            <BsInstagram className="icon" />
            Instagram
          </a>
          <a
            href="https://www.t.me/sheshenyaira"
            target="_blank"
            className="contacts-social__link"
          >
            <FaTelegram className="icon" /> Telegram
          </a>

          <a
            href="viber://add?number=380971919424"
            target="_blank"
            className="contacts-social__link"
          >
            <FaViber className="icon" /> Viber
          </a>

          <a href="tel:+380971919424" className="contacts-social__link">
            <BsPhoneFill className="icon" />
            Телефон
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
