import { createGlobalStyle } from "styled-components"

const Style = createGlobalStyle`
  .container{  
    height: 100vh;
    min-height: 100vh;
    text-align: center;
    color: #555;
    background: #eee;
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
    margin-bottom: 0;
  }

  div.col{
      padding: 0 5rem;
  }

  @media (max-width: 750px) {
    div.row p{
        font-size: 1em;
    }

    div.container.container-fluid h1{
        font-size: 1.5em;
        margin-bottom: 0px;
        padding: 1rem 0;
        line-height: 1.2;
    }

    div.container.container-fluid hr{
        margin-top: 0;
        margin-bottom: 5px;
    }
    div.col h2{
        font-size: 1.2em;
        margin-bottom: .5rem;
    }

    div.col{
      padding: 0 3.5rem;
    }
  }
`
export default Style