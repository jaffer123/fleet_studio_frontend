import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f6f8fa;
  }

  h2 {
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
`;

export default GlobalStyles;
