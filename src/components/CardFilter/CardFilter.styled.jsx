import styled from 'styled-components';

export const SearchBtn = styled.button`
  color: var(--background);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;

  padding: 14px 44px;

  border: none;
  border-radius: 12px;
  background: var(--blue);

  transition: background 300ms;

  &:hover {
    background-color: var(--blue-secondary);
  }
`;
export const ListFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-direction: column;
  }
  span {
    color: var(--gray-secondary);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;

    margin-bottom: 8px;
  }
`;

export const FilterForm = styled.form`
  display: flex;
  gap: 18px;
  align-items: flex-end;
  justify-content: center;
  margin: 50px 0;
`;

export const SelectDiv = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
  }

  select {
    border: none;
    outline: none;
    border-radius: 14px;
    background: var(--gray);
    display: flex;
    padding: 14px 89px 14px 18px;
    justify-content: center;
    align-items: center;
    gap: 32px;
    color: var(--secondary);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
`;

export const InputLeft = styled.input`
  border: none;
  outline: none;
  width: 160px;
  height: 48px;
  padding: 14px 10px 14px 70px;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: var(--gray);
  color: var(--secondary);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const InputRight = styled.input`
  border: none;
  outline: none;
  width: 160px;
  height: 48px;
  padding: 14px 10px 14px 60px;
  border-radius: 0px 14px 14px 0px;
  background: var(--gray);
  color: var(--secondary);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const SearchButton = styled.button`
  border-radius: 12px;
  background: var(--blue);
  padding: 14px 44px;
  height: 52px;
  color: var(--background);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  &:hover,
  &:focus {
    background: var(--blue-secondar);
  }
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

export const ConteinerInput = styled.div`
  position: relative;
`;

export const InputText = styled.div`
  position: absolute;
  top: 14px;
  left: 24px;
  color: var(--secondary);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;
