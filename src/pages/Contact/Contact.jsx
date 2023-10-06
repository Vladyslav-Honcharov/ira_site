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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5356526418427!2d30.6267661!3d50.4497493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5512d757cf3%3A0x95818212b6cd3360!2zMjZCLCDQsdGD0LvRjNCy0LDRgCDQktC10YDRhdC-0LLQvdC-0Zcg0KDQsNC00LgsIDI20JEsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1695739590006!5m2!1suk!2sua"
            width="100%"
            height="450"
            style={iframeStyles}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Button
            href="https://www.google.com/maps/place/26B,+%D0%B1%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80+%D0%92%D0%B5%D1%80%D1%85%D0%BE%D0%B2%D0%BD%D0%BE%D1%97+%D0%A0%D0%B0%D0%B4%D0%B8,+26%D0%91,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.449435,30.627045,15z/data=!4m6!3m5!1s0x40d4c5512d757cf3:0x95818212b6cd3360!8m2!3d50.4497493!4d30.6267661!16s%2Fg%2F1tcyjkch?hl=uk&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map"
            variant="outlined"
          >
            Прокласти маршрут
          </Button>
        </div>
        <div className="contacts-social">
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="contacts-social__link"
          >
            <BsInstagram className="icon" />
            Instagram
          </a>
          <a
            href="https://www.telegram.com"
            target="_blank"
            className="contacts-social__link"
          >
            <FaTelegram className="icon" /> Telegram
          </a>

          <a
            href="https://www.viber.com"
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
