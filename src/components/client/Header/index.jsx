import Logo from "../../../assets/client/hos.jpg";
import { Wrapper, Infors, Nav, ModalMenu } from "./styled-index";
import percentage from "../../../assets/client/percentage.json";
import address from "../../../assets/client/address.json";
import writing from "../../../assets/client/writing.json";
import call from "../../../assets/client/call.json";
import Lottie from "lottie-react";
import Buttons from "./buttons";
import { useTranslation } from "react-i18next";
import MenuModal from "./menu";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as React from 'react';

import { NavLink } from "react-router-dom";

import "./index.css"



function Header() {
  

  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const HendelChange = (e) => {
    let LangVal = e.target.value;
    window.location.reload();
    window.localStorage.setItem("i18nextLng", LangVal);
  };
  const HendelChange2 = (e) => {
    window.location.reload();
    let LangVal = e.target.value;
    window.localStorage.setItem("i18nextLng", LangVal);
  };
  const ValLang = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  return (
    <div className="ssd">
    <Wrapper>
      <Link to="/">
        <div className="logoAsosiy">
        <img src={Logo} alt="logo" />
        </div>
      </Link>
      <Infors>
        <Nav>
          <ul>
            <li>
              <NavLink to={"/aksiya"}>
                <p >
                  <Lottie animationData={percentage} />
                </p>
                {t("Header.0")}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/manzil"}>
                <p>
                  <Lottie animationData={address} />
                </p>
                {t("Header.1")}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Qabul"}>
              <p>
                  <Lottie animationData={writing} />
                </p>
                {t("Header.2")}</NavLink>
              
            </li>
            <li>
              <a href="tel:+998972770303 ">
                <p>
                  <Lottie animationData={call} />
                </p>
                +998 (97) 277 0303
              </a>
            </li>
            <li>
              <button className="b">
                <a href="https://telegram.me/doniyor_shifo_bot" className="teleg">Tahlil Natijalari</a>
              </button>
            </li>
            <li className="buttons">
              {ValLang() === "uz" ? (
                <>
                  <button
                    className="buttonRu"
                    value="ru"
                    onClick={HendelChange}
                    data-aos="zoom-out"
                  >
                    RU
                  </button>
                </>
              ) : (
                <button
                  data-aos="zoom-out"
                  className="buttonUz"
                  value="uz"
                  onClick={HendelChange2}
                >
                  UZ
                </button>
              )}
            </li>
          </ul>
        </Nav>
        <Buttons />
      </Infors>
      <ModalMenu>
        <Button onClick={() => setOpen(true)}>
          <i class="bx bx-menu"></i>
        </Button>
        <Nav>
          <ul>
            <li>
              {ValLang() === "uz" ? (
                <>
                  <button
                    className="buttonRu"
                    value="ru"
                    onClick={HendelChange}
                  >
                    RU
                  </button>
                </>
              ) : (
                <button className="buttonUz" value="uz" onClick={HendelChange2}>
                  UZ  
                </button>
              )}
            </li>
          </ul>
        </Nav>
        <MenuModal open={open} setOpen={setOpen} />
      </ModalMenu>
    </Wrapper>
    </div>
  );
}

export default Header;
