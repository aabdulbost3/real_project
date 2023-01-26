
import "./style.css"
import { useTranslation } from "react-i18next";
import DocSlider from "../../../components/QABUL/index";
import { DocWrapper } from "./styled-index";

function Qabul() {
  const { t, i18n } = useTranslation();
  return (
    <DocWrapper data-aos="zoom-out" >
      <DocSlider />
      <div className="ddser">
      <a href="tel:+998 97 277 03 03 " className="docWrapperStylea">{t("Doctors.0")}</a>
      </div>
    </DocWrapper>
  );
}

export default Qabul;
