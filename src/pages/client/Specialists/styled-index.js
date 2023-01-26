import styled from "styled-components";

export const Wrapper = styled.div`
padding: 3% 0 5%;
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  border: 1px solid #34e065;
  text-align: center;
  border-radius: 10px;
  padding: 0 20px;
  cursor: pointer;
  width: 30% !important;
  height: 200px !important;
  transition: .65s;
  margin-top: 5%;

  &:hover {
  
  background-color: #34e065;
  color: white;
  transform: scale(1.1);
  box-shadow: 0px 0px 15px 0px #34e065;
  }
`;
