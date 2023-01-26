import styled from "styled-components";

export const SliderItem = styled.div`
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5%;
  img {
    width: 100% !important;
    height: 450px;
    padding-right: 50px;
    border-radius: 3px;
    margin: 0 auto;

    @media screen and (max-width: 395px) {
      width: 300px;
    }
  }
`;

export const GalWrapper = styled.div`
  margin-top: 5%;
  padding: 0 10px 10%;
  h2 {
    color: white;
    font-size: 50px;
    letter-spacing: 1px;
    @media only screen and (max-width: 425px) {
      font-size: 35px;
    }
    @media only screen and (max-width: 375px) {
      font-size: 20px;
    }
  }
`;
