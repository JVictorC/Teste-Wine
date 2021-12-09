import styled from 'styled-components';

export const FilterComponent = styled.div`
  width: 250px;
  height: 250px;
  margin-right: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  display: none;

  @media (min-width: 800px) {
    display: flex;
  }
`;

export const ListPrices = styled.ul`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-around;
`;

export const NameFilter = styled.span`
  align-self: baseline;
  font-size: 10px;
  margin-left: 10px;
  font-size: 15px;
`;

export const LabelFilter = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    cursor: pointer;
  }
`;

export const TitleFilter = styled.h6`
  font-family: 'Sans';
  font-weight: 600;
  font-size: 15px;
`;

export const SectionFilter = styled.section`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;

  h6 {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
  }

`;
