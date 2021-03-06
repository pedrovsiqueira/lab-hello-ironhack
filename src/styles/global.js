import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body{
    background: #fff;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }
  button {
    cursor: pointer;
    border: none;
  }
  a{
    text-decoration: none;
    color: #FFF;
    letter-spacing: 0px;
    opacity: 1;
  }
  input{
    border: none;
  }
`;
