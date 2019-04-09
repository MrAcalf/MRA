import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: #000 rgba(50,70,90,.8);
  }
`;

export default Reset;