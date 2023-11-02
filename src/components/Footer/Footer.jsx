import { FaViber, FaTelegram, FaMapMarkerAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import "./Footer.scss";
import { Button } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <div>
        {" "}
        <FaMapMarkerAlt fill="red"></FaMapMarkerAlt> Андрія Малишка 2
      </div>

      <div className="footer-social">
        <a href="https://www.t.me/sheshenyaira" target="_blank">
          <FaTelegram className="icon" fill="blue" />
        </a>
        <a href="https://www.instagram.com/s.i_lashes/" target="_blank">
          <BsInstagram className="icon" fill="#e4405f" />
        </a>
        <a href="viber://add?number=380971919424" target="_blank">
          <FaViber className="icon" />
        </a>
      </div>
      <Button
        href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%90%D0%BD%D0%B4%D1%80%D1%96%D1%8F+%D0%9C%D0%B0%D0%BB%D0%B8%D1%88%D0%BA%D0%B0,+2,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.4572934,30.611249,18z/data=!3m1!4b1!4m6!3m5!1s0x40d4cffc6974e381:0xab2a06b0813c93da!8m2!3d50.4572917!4d30.6125365!16s%2Fg%2F1trswj2s?hl=uk-UK&entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-map"
        variant="outlined"
      >
        Прокласти маршрут
      </Button>
    </div>
  );
}

export default Footer;
