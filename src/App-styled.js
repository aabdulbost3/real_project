import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const WrapperContainer = styled.div`
  max-width: 2280px;
  width: 100%;
  margin: 0 auto;
  /* padding: 0 10px; */
`;

export const GlobalStyle = createGlobalStyle`
body {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

ul , ol {
list-style: none;
}
`;
