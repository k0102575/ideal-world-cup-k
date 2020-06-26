import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <HeaderContainer>Header</HeaderContainer>;
};

export default Header;

const HeaderContainer = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.HeaderBGColor};
`;
