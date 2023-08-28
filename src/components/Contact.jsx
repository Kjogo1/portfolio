import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import telegram from "../assets/telegram.png";
import "./contact.css";

function Contact() {
  return (
    <>
    <span className="col h-10 mt-10" id="contact">
    <span className="row-contact" >
        <div className="container-contact ml-10">
          <span className="start-contact text-md">Contact</span>
          <span className="text-sm start-contact">
            Get in touch with me via social media or email.
          </span>
        </div>
        <div className="container-contact mr-10">
          <span className="text-md">social</span>
          <span>
            <a href="https://t.me/MonDavid">
              <img className="image-icon ml-5" src={telegram} />
            </a>
            <a href="https://www.linkedin.com/in/david-mon-5b836b283">
              <img className="image-icon ml-5" src={linkedin} />
            </a>
            <a href="mailto:mondevid123@gmail.com">
              <img className="image-icon ml-5" src={gmail} />
            </a>
          </span>
        </div>
      </span>

      <span>
        <hr className="mr-10 ml-10"/>
        <span className="text-sm">© Copyright 2023. Made by Mon David</span>
      </span>
    </span>
      
    </>
  );
}

export default Contact;
