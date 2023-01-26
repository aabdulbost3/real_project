import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1% 0;
  img {
    width: 150px;
    @media screen and (max-width: 756px) {
      width: 100px;
    }
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Infors = styled.div`
  width: 75%;
  margin: 0 !important;
  @media screen and (max-width: 900px) {
    width: 75%;
  }
  @media screen and (max-width: 785px) {
    width: 75%;
  }
  @media screen and (max-width: 643px) {
    display: none;
  }
`;

export const Nav = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    li {
      .buttonUz {
        padding: 7px 15px 4px;
        font-size: 15px;
        font-weight: 400;
        background-color: white;
        border: 1px solid #34e065;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        background-color: #34e065;
        transition: 0.65s;

        &:hover {
          box-shadow: 0px 0px 20px 0px #34e065;
        }
      }
      .buttonRu {
        padding: 7px 15px 4px;
        font-size: 15px;
        font-weight: 400;
        background-color: #3498db;
        border: 1px solid #3498db;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        margin-right: 1%;
        transition: 0.65s;
        @media screen and (max-width: 1010px) {
          font-size: 13px;
        }

        &:hover {
          box-shadow: 0px 0px 20px 0px #0062a3;
          color: white;
        }
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        margin-right: 15%;
      }
    }
    .b {
      border: none;
      background-color: transparent;
    }
    .teleg {
      padding: 10px 20px;
      border: 1px solid #34e065;
      background-color: #34e065;
      border-radius: 10px;
      font-weight: bold;
      font-size: 1vw;
      color: white;
    }
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: black;
    padding: 0;
    font-weight: 500;
    @media screen and (max-width: 1010px) {
      font-size: 13px;
    }
    @media screen and (max-width: 655px) {
      font-size: 10px;
    }

    p {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Buttons = styled.div``;

export const ModalMenu = styled.div`
  display: none;
  .bx {
    font-size: 30px;
  }
  @media screen and (max-width: 643px) {
    display: block;
    display: flex;
    align-items: center;
  }
`;
