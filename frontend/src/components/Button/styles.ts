import styled from "styled-components";

export const Button = styled.button`
  background-color: #FE521E;
  color: ${(props) => props.theme["white"]};
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 1.875rem;
  cursor: pointer;

  font-weight: 700;
  font-size: 1rem;

  display: flex;
  gap: .3125rem;
  align-items: center;

  &:hover{
    transition: background-color 0.5s ease;
    background-color:#ef3800eb;
  }
`;
