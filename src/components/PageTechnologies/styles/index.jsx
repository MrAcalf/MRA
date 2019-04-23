import { createGlobalStyle } from "styled-components"

const Style = createGlobalStyle`
  .fullSizeTech{
      padding: 1rem 2rem;
      width: 100vw;
      max-width: 100vw;
      height: 100vh;
      max-height: 100vh;
      background-color: #344251;
      color: #eee;
      text-align: center;
  }

  .fullSizeTech h1{
      font-size: 1.8em;
  } 

  .tecnologias{
    padding-top: 1rem;
  }

  .icones{
    background-color: #eee;
    color: #555;
    margin: 1rem 3rem;
    max-margin: 3rem;
    padding: 1rem 1rem;
    max-padding: 1rem;	
  }

  .flex{
    display: flex;
  }

  .flex.size{
    flex: 1;
  }

  .flex-wrap{
    flex-wrap: wrap;
  }

  .column{
    flex-direction: column;
  }

  @media (max-width: 540px){
    .tecnologias.flex.flex-wrap.size.icones{
      padding: 0.5rem 2rem;
      font-size: 5px;
    }

    .size{
      font-size: 10px;
    }

    .icones{
      background-color: #eee;
      font-size: 13px;
      color: #555;
      margin: 1rem 1.5rem;
      max-margin: 1.5rem;
      padding: 1rem 0.5rem;
      max-padding: 2rem;	
    }

    .icones p {
      margin-bottom: .5rem;
    }

    .tecnologias.flex.flex-wrap.size.column{
      padding: 0;
    }

    .fullSizeTech h1{
      font-size: 1.5em;
  } 
  }
`
export default Style