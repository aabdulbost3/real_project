import {
  Links,
  Wrapper,
  CallDiv,
  AddressDiv,
  LocationDiv,
} from "./styled-index";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className="sssd">
    <Wrapper>
      <CallDiv>
        <h2>{t("Footer.0")}</h2>
        <h3>{t("Footer.1")}</h3>
        <p>
          {t("Footer.2")}:{" "}
          <a href="tel :+998 97 277 03 03">+998 97 277 03 03</a>
        </p>
        <p>
          {t("Footer.3")}:{" "}
          <a href="tel :+998 95 511 03 03">+998 95 511 03 03</a>
        </p>
      </CallDiv>
      <AddressDiv>
        <h2>{t("Footer.4")}</h2>
        <p>{t("Footer.5")}</p>
        <h3>{t("Footer.6")}</h3>
        <Links>
          <p>
            <img
              src="https://www.facebook.com/images/fb_icon_325x325.png"
              alt="facebook"
            />
          </p>
          <p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
              alt="instagram"
            />
          </p>
          <p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png"
              alt="telegram"
            />
          </p>
        </Links>
      </AddressDiv>
      <LocationDiv>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
            className="iframe"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </LocationDiv>
    </Wrapper>
    </div>
  );
}

export default Footer;
