import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["white"]};
  }

  body{
    font-family: "Rubik", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }
  h1,h2,h3,h4,h5{
    font-weight: 400;
  }

  .titulo__row_card{
      display: flex;
      margin-bottom: 1rem;
    }
    .button__row_card{
      display: flex;
      align-items: center;
    justify-content: flex-end;
    margin-top: 1rem;
    }
`;
