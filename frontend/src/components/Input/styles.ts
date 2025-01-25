import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: none;
  padding: .3125rem;

  &::-webkit-input-placeholder{
    color: ${(props) => props.theme["cinza"]};
    text-transform: uppercase;
    font-weight: 600;
  }
`;
