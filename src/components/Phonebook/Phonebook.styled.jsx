import { styled } from 'styled-components';

export const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  list-style: none;
  padding: 10px;
`;

export const Contact = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 12px;
  border-radius: 8px;
  border: 2px gray solid;
  box-shadow: 2px 2px blue;
  font-size: 24px;
  font-family: sans-serif;
`;
export const AddInput = styled.input`
  padding: 10px;
`;

export const AddBtn = styled.button`
  padding: 12px;
  &:hover {
    background-color: teal;
  }
`;

export const DelBtn = styled.button`
  padding: 12px;
  &:hover {
    background-color: red;
  }
`;
