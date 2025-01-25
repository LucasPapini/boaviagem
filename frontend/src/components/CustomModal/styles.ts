import styled from "styled-components";

export const ModaldMain = styled.div`
  display: flex;
    width: 100%;
    height: 100vh;
    background: #00000078;
    position: absolute;
    align-content: center;
    align-items: center;
    justify-content: center;
`;
export const Modal = styled.div`
    width: 70%;
    height: auto;
    border: 1px solid #fff;
    background-color: #fff;
    position: relative;
    display: flex;
    border-radius: 1rem;
    flex-direction: column;

    color: ${(props) => props.theme["gray-100"]};

    button{
       background: none; border: none;
       cursor: pointer;
    }

    .header{
      display: flex;
      justify-content: flex-end;
      padding: 1rem;
    }

    .body{
      padding: 1rem;
      gap: 1rem;
      display: flex;
      flex-direction: row;
      flex-direction: column;

      input{
        border: 1px solid ${(props) => props.theme["gray-100"]};
      }
    }

    .footer{
      display: flex;
      padding: 1rem;
      gap: 1rem;
      justify-content: flex-end;

      button{
        color: ${(props) => props.theme["white"]};
        padding: .8rem 1.5rem;
        border-radius: 1rem;
        cursor: pointer;
      }

      .cancelar{
        background-color: ${(props) => props.theme["cinza"]};
      }
      .cadastrar{
        background-color: ${(props) => props.theme["blue"]};
      }
    }

    span{
      color: red;
      font-style: italic;
      font-size: .75rem;
    }

    form label{
      text-transform: uppercase;
      font-weight: 600;
    }

    form .historic{
      font-style: italic;
      font-size: .75rem;
      color: ${(props) => props.theme["gray-100"]};
    }
`;
