import Slider from "react-slick";
import { SliderItem, GalWrapper } from "./styled-index";
import "./slider.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@material-ui/core";
import * as React from "react";
import { useTranslation } from "react-i18next";
import "./slider.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  bradius: "20px",
};
function DocSlider() {
  const { t, i18n } = useTranslation();
  const [openm, setOpenM] = React.useState(false);
  const handleOpen = () => setOpenM(true);
  const handleClose = () => setOpenM(false);
  const id = useRef();
  const navigate = useNavigate();
  const HendelClick = () => {
    navigate("/more");
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <GalWrapper>
      <Slider {...settings}>
        <SliderItem id="1" ref={id}>
          <div className="DocDiv">
            <img
              src="https://hayatmed.uz/uploads/articles/70/content-original-450x450.jpg"
              alt="photo"
            />
          </div>
          <h3>Lorem, ipsum.</h3>
          <div>
            <Button className="Qabul" onClick={handleOpen}>
              Qabulga yozilish
            </Button>
            <Modal
              open={openm}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="divc">
                  <h2>Qabulga yozilish</h2>
                  <input required placeholder="F.I.SH" type="text" />
                  <input required type="number" placeholder="Telefon raqam" />
                  <input required placeholder="date" type="date" />
                  <button>Submit</button>
                </div>
              </Box>
            </Modal>
          </div>
        </SliderItem>
        <SliderItem id="2">
          <div className="DocDiv">
            <img
              src="https://hayatmed.uz/uploads/articles/69/content-original-450x450.jpg"
              alt="photo"
            />
          </div>
          <h3>Lorem, ipsum.</h3>
          <div>
            <Button className="Qabul" onClick={handleOpen}>
              Qabulga yozilish{" "}
            </Button>
            <Modal
              open={openm}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="divc">
                  <h2>qabulga yozilish</h2>
                  <input required placeholder="F.I.SH" type="text" />
                  <input required type="number" placeholder="Telefon raqam" />
                  <input required placeholder="date" type="date" />
                  <button>Submit</button>
                </div>
              </Box>
            </Modal>
          </div>
        </SliderItem>
        <SliderItem id="3">
          <div className="DocDiv">
            <img
              src="https://hayatmed.uz/uploads/articles/65/content-original-400x600.jpg"
              alt="photo"
            />
          </div>
          <h3>Lorem, ipsum.</h3>
          <div>
            <Button className="Qabul" onClick={handleOpen}>
              Qabulga yozilish{" "}
            </Button>
            <Modal
              open={openm}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="divc">
                  <h2>Qabulga yozilish</h2>
                  <input required placeholder="F.I.SH" type="text" />
                  <input required type="number" placeholder="Telefon raqam" />
                  <input required placeholder="date" type="date" />
                  <button>Submit</button>
                </div>
              </Box>
            </Modal>
          </div>
        </SliderItem>
        <SliderItem id="4">
          <div className="DocDiv">
            <img
              src="https://hayatmed.uz/uploads/articles/59/content-original-450x450.jpg"
              alt="photo"
            />
          </div>
          <h3>Lorem, ipsum.</h3>
          <div>
            <Button className="Qabul" onClick={handleOpen}>
              Qabulga yozilish{" "}
            </Button>
            <Modal
              open={openm}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="divc">
                  <h2>Qabulga yozilish</h2>

                  <input required placeholder="F.I.SH" type="text" />
                  <input required type="number" placeholder="Telefon raqam" />
                  <input required placeholder="date" type="date" />
                  <button>Submit</button>
                </div>
              </Box>
            </Modal>
          </div>
        </SliderItem>
        <SliderItem id="5">
          <div className="DocDiv">
            <img
              src="https://hayatmed.uz/uploads/articles/55/content-original-450x450.jpg"
              alt="photo"
            />
          </div>
          <h3>Lorem, ipsum.</h3>
          <div>
            <Button className="Qabul" onClick={handleOpen}>
              Qabulga yozilish{" "}
            </Button>
            <Modal
              open={openm}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="divc">
                  <h2>Qabulga yozilish</h2>
                  <input required placeholder="F.I.SH" type="text" />
                  <input required type="number" placeholder="Telefon raqam" />
                  <input required placeholder="date" type="date" />
                  <button>Submit</button>
                </div>
              </Box>
            </Modal>
          </div>
        </SliderItem>
        <SliderItem id="6">
          <div className="DocDiv">
            <img
              src="https://hayatmed.uz/uploads/articles/53/content-original-450x450.jpg"
              alt="photo"
            />
          </div>
          <h3>Lorem, ipsum.</h3>

          <div>
            <Button className="Qabul" onClick={handleOpen}>
              Qabulga yozilish{" "}
            </Button>
            <Modal
              open={openm}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="divc">
                  <h2>Qabulga yozilish</h2>
                  <input required placeholder="F.I.SH" type="text" />
                  <input required type="number" placeholder="Telefon raqam" />
                  <input required placeholder="date" type="date" />
                  <button>Submit</button>
                </div>
              </Box>
            </Modal>
          </div>
        </SliderItem>
      </Slider>
    </GalWrapper>
  );
}

export default DocSlider;
