import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme["purple"]};
  color: ${(props) => props.theme["white"]};
  flex-direction: column;
  gap: 1.5rem;
`;

export const HomeRowCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`;

export const HomeRowCardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  overflow: auto;
  margin-bottom: 2rem;
  padding: 0 .5rem;

  /* Estilização do scrollbar */
  &::-webkit-scrollbar {
    width: 8px; /* Largura do scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #12121226;
    border-radius: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, .7);
    border-radius: 4px;
    border: 2px solid #fe521e0f;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #FE521E;
    border-radius: 15px;
  }
`;
