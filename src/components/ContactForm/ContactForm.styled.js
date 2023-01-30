import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid black;
`;
export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 10px 0 10px;
`;
export const Input = styled.input`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  &:hover,
  &:focus,
  &:active {
    border-color: #78a1fa;
    outline: 1px solid #78a1fa;
  }
`;

export const Button = styled.button`
  margin: 10px;
  cursor: pointer;
  &:hover {
    background: #78a1fa;
  }
`;
