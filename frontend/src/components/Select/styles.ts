import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  height: 40px;
  border-radius: .375rem;
  font-weight: 600;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, .125);
  }
  /* & :nth-child(1) {
    display: none;
  } */
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .9375rem;

  p{
    font-weight: 500;
    text-transform: uppercase;
    color: ${(props) => props.theme["cinza"]};
  }
`;
