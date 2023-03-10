import styled from "styled-components";

export const SliderItem = styled.div`
  text-align:center;
  height: 400px;
  width: 70% !important;
  border: 1px solid #34e065;
  padding: 3%;
  
  border-radius: 10px;
  transition: all 0.65s;
  cursor: pointer;

  &:hover {
    transform: scale(1);
    box-shadow: 0px 0px 10px 0px #34e065;
  }

  img {
    width: 90%;
    max-height: 298px;
    text-align: center;
    border-radius: 10px;
  }
`;

export const GalWrapper = styled.div`
  margin-top: 5%;
  padding-bottom: 7%;
`;
