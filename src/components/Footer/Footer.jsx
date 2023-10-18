import { FaViber, FaTelegram, FaMapMarkerAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import "./Footer.scss";
import { Button } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <div>
        {" "}
        <FaMapMarkerAlt fill="red"></FaMapMarkerAlt> Бульвар Верховної ради 26б
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
        href="https://www.google.com/maps/place/26B,+%D0%B1%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80+%D0%92%D0%B5%D1%80%D1%85%D0%BE%D0%B2%D0%BD%D0%BE%D1%97+%D0%A0%D0%B0%D0%B4%D0%B8,+26%D0%91,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.449435,30.627045,15z/data=!4m6!3m5!1s0x40d4c5512d757cf3:0x95818212b6cd3360!8m2!3d50.4497493!4d30.6267661!16s%2Fg%2F1tcyjkch?hl=uk&entry=ttu"
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
