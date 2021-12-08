import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Sans';
  }

  li {
    list-style: none
  }

`;

// ref https://scalablecss.com/styled-components-global-styles/
export default GlobalStyle;