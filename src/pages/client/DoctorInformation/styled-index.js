import styled from "styled-components";

export const Wrapper = styled.div`
  img {
    width: 600px;
    height: 600px;

    @media screen and (max-width: 610px) {
      width: 100%;
      
    }
  }
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 610px) {
    text-align: center;
  }
`;
