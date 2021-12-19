import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
}

`;

export const AppContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 1.25rem;
`;

export default GlobalStyles;
