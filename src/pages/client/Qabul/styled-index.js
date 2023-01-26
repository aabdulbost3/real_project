import styled from "styled-components";

export const DocWrapper = styled.div`
  text-align: center;
  padding-bottom: 5%;
  a {
    color: white;
    background-color: red;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    border: 1px solid red;
    transition:  .65s;

    &:hover {
        background-color: white;
        color: red;
        transform: scale(1.1);
        box-shadow: 0px 0px 15px 0px red;
    }
  }
`;
