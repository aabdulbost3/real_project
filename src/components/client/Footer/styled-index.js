import styled from "styled-components";

export const Links = styled.div`
  display: flex;
  align-items: center;
  p {
    img {
      width: 40px;
      padding-right: 15px;
      height: 40px;

      @media screen and (max-width: 1115px) {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 370px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CallDiv = styled.div`
  width: 20%;
  @media screen and (max-width: 1115px) {
    width: 25%;
  }
  @media screen and (max-width: 860px) {
    width: 45%;
  }
  @media screen and (max-width: 370px) {
    width: 100%;
  }
  a {
    text-decoration: none;
    color: black;
  }
  p,
  h2,
  h3 {
    @media screen and (max-width: 1115px) {
      font-size: 15px !important;
    }
  }
  p,
  h2,
  h3 {
    @media screen and (max-width: 465px) {
      font-size: 12px !important;
    }
  }
`;

export const AddressDiv = styled.div`
  width: 35%;
  @media screen and (max-width: 1115px) {
    width: 40%;
  }
  @media screen and (max-width: 860px) {
    width: 45%;
  }
  @media screen and (max-width: 370px) {
    width: 100%;
  }
  p,
  h2,
  h3 {
    @media screen and (max-width: 1115px) {
      font-size: 15px !important;
    }
  }
  p,
  h2,
  h3 {
    @media screen and (max-width: 465px) {
      font-size: 12px !important;
    }
  }
`;

export const LocationDiv = styled.div`
  .iframe {
    width: 400px;
    height: 400px;

    @media screen and (max-width: 1045px) {
      width: 300px;
      height: 300px;
    }
  }
  @media screen and (max-width: 860px) {
    width: 100%;
    text-align: center;

    .iframe {
      width: 500px;
      height: 350px;
    }
  }
  @media screen and (max-width: 510px) {
    .iframe {
      width: 250px;
      height: 250px;
    }
  }
`;
