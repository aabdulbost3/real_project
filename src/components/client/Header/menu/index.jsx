import { Drawer } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import { Infors, Nav, Icon, Records } from "./styled-index";
import percentage from "../../../../assets/client/percentage.json";
import address from "../../../../assets/client/address.json";
import writing from "../../../../assets/client/writing.json";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import call from "../../../../assets/client/call.json";
import { Link, NavLink } from "react-router-dom";





function MenuModal({setOpen, open }) {
  const { t, i18n } = useTranslation();
  const Close = () => setOpen(false)
  return (
    <div>
      <Drawer open={open} anchor={"left"} onClose={Close}>
        <div 
        // style={{ width: 400 }}
        className="modalwidth"
        >
          <Icon>
            <i onClick={Close} className="bx bx-x iks"></i>
          </Icon>
          <Infors>
            <Nav>
              <ul>
                <li>
                  <NavLink to={"/aksiya"}>
                    <p>
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
              </ul>
            </Nav>
            <Records>
              <div>
                <Accordion className="acc">
                  <AccordionSummary
                    expandIcon={<i class="bx bxs-chevron-down"></i>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{t("Header.3")} </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <a href="#">Links</a>
                  </AccordionDetails>
                </Accordion>
              </div>
              <p className="link">
                <Link onClick={Close} to="doctors">{t("Header.4")}</Link>
              </p>
              <div>
                <Accordion className="acc">
                  <AccordionSummary
                    expandIcon={<i class="bx bxs-chevron-down"></i>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{t("Header.5")} </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <a href="#">Links</a>
                  </AccordionDetails>
                </Accordion>
              </div>
              <NavLink to={"/news"}>
              <p className="link" href="#">
                {t("Header.6")}
              </p>
              </NavLink>
              <div>
                <Accordion className="acc">
                  <AccordionSummary
                    expandIcon={<i class="bx bxs-chevron-down"></i>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><NavLink to={"/hamkor"}>{t("Header.7")}</NavLink> </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <a href="#">Links</a>
                  </AccordionDetails>
                </Accordion>
              </div>
              <p className="link" href="#">
                {t("Header.8")}
              </p>
            </Records>
          </Infors>
        </div>
      </Drawer>
    </div>
  );
}
export default MenuModal;
