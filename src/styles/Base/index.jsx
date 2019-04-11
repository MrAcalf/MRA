import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
  body {
    margin:0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size:1rem;
    font-weight:normal;
    line-height:1.4 !important;
    color:#333;
    overflow-x:hidden;
  }

  ::-webkit-scrollbar{
    width:2px;
    height:9px;
    background-color: rgba(50,70,90,.8);
  }
  ::-webkit-scrollbar-button:start:decrement,body::-webkit-scrollbar-button:end:increment{
    display:block;
    height:0;
    background-color:transparent;
  }
  ::-webkit-scrollbar-track-piece{
    background-color:#FFFFFF;
    opacity:0.2;

    display:none;

    -webkit-border-radius:0;
    -webkit-border-bottom-right-radius:14px;
    -webkit-border-bottom-left-radius:14px;
  }

  ::-webkit-scrollbar-thumb:vertical{
    height:50px;
    background-color:#333333;
    -webkit-border-radius:8px;
  }
`;

export default Base;