import styled from "styled-components";

export const CardMain = styled.div`
  width: 37.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 1.875rem;
  background-color: ${(props) => props.theme['blue']};
  padding: 2rem;

  @media (max-width: 576px) {
    padding: .5rem;
    width: 90%;
  }
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
`;

export const CardList = styled.div`
  width: 37.5rem;
  border: 1px solid #fff;
  border-radius: .9375rem;
  background-color: ${(props) => props.theme['white']};
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  align-items: center;
  gap: 1rem;

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 576px) {
    padding: .5rem;
    width: 90%;
  }
`;
