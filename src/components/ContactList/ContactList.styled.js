import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 10px;
`;

export const ContactItem = styled.li`
  display: flex;
  &:not(:first-child) {
    margin-top: 5px;
  }
`;

export const Info = styled.p`
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const BtnInfoDelete = styled.button`
  margin-left: auto;
  cursor: pointer;
  &:hover {
    background: #78a1fa;
  }
`;
