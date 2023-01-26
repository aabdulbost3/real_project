import { useNavigate } from "react-router-dom";
import { Wrapper, Cards, Card } from "./styled-index";

function Specialists() {
  const navigate = useNavigate();
  const HendelClick = () => {
    navigate("/specialist");
  };
  return (
    <Wrapper>
      <Cards data-aos="zoom-out">

        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
      </Cards>
      <Cards data-aos="zoom-out">
        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
      </Cards>
      <Cards data-aos="zoom-out">
        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
      </Cards>
      <Cards data-aos="zoom-out">
        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
      </Cards>
      <Cards data-aos="zoom-out">
        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
        <div className="lila">
          <div onClick={HendelClick}>

            <a href="#" id="fli" className="btn-flip" data-back="loremm" data-front="Ingalatsiya"></a>
          </div>
        </div>
      </Cards>
    </Wrapper>
  );
}

export default Specialists;
