import { createGlobalStyle } from "styled-components"

const Style = createGlobalStyle`
  .container{  
    padding-top: 5px;
    height: 100vh;
    min-height: 100vh;
    text-align: center;
    color: #555;
    background: #eee;
    overflow-y: hidden;
    max-width: 100vw;
  }
  div.container.container-fluid{
    margin: 0;
    height: 100vh;
    min-height: 100vh;
    min-width: 100%;
    padding-left: 0;
    padding-right: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

    div.container.container-fluid h1{
        padding: 16px 0;
    }

  .row{    
    overflow-y: hidden;
    min-width: 100vw;
    width: 100vw;
    padding-right: 0;
    flex: 1;
    align-items: stretch;
  }

  div.row{
    margin: 0;
  }

  div.row h2{
    margin-bottom: 2rem;
  }

  div.row p{
    font-size: 25px;
    text-align: justify;
  }

  div.col{
      padding: 0 2rem;
  }

  .wordpressIcon{
    width: 35px;
    opacity: .7;
  }

  @media (max-width: 750px) {
    div.row p{
        font-size: 18px;
    }

    div.container.container-fluid h1{
        font-size: 28px;
        margin-bottom: 0px;
        padding: 8px 0;
    }

    div.container.container-fluid hr{
        margin-top: 0;
        margin-bottom: 5px;
    }
    div.col h2{
        font-size: 21px;
        margin-bottom: 8px;
    }

    .wordpressIcon{
      width: 22px;
    }
  }
`
export default Style