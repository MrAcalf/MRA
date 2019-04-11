import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: #000 #344251;
  }
`;

export default Reset;