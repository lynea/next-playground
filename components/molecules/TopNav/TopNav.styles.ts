import styled from 'styled-components';

export const TopNav = styled.nav`
  display: flex; 
  justify-content: center;
  box-sizing: border-box;
  padding: 1rem;
  background: #262626;

  ul {
    box-sizing: border-box;
    list-style: none;
    display: flex;
    width:80%;
  }
`;

type NavItemProps = {
  active: boolean;
};

export const NavItem = styled.li<NavItemProps>`
  a {
    margin-right: 1rem;
    color: white;
    text-decoration: none;
  }

  :hover {
    font-weight: bold;
  }
`;
