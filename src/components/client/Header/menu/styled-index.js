import styled from "styled-components";

export const Infors = styled.div``;

export const Nav = styled.div`
  ul {
    li {
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
        font-weight: 500;
        letter-spacing: 1px;
        transition: 0.65s;

        &:hover {
          color: #34e065;
        }
      } 
      p {
        width: 80px !important;
        height: 80px !important;
      }
    }
  }
`;


export const Icon = styled.div`
text-align: end;
/* padding: 3% 0%; */
.bx {
font-size: 40px;
}
`;


export const Records = styled.div`
border-top: 1px solid black;
padding: 10% 0%;

.link{
padding: 1% 4%;
a{
text-decoration: none;
color: black;
}
}

.acc {
box-shadow: none;
}
`