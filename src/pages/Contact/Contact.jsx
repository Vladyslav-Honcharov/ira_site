import React from "react";
import "./Contacts.scss";

function Contact() {
  const iframeStyles = {
    border: "0",
  };

  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5356526418427!2d30.6267661!3d50.4497493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5512d757cf3%3A0x95818212b6cd3360!2zMjZCLCDQsdGD0LvRjNCy0LDRgCDQktC10YDRhdC-0LLQvdC-0Zcg0KDQsNC00LgsIDI20JEsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1695739590006!5m2!1suk!2sua"
        width="100%"
        height="450"
        style={iframeStyles}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Contact;
