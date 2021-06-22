import { FunctionComponent } from 'react';
import * as styles from './TopNav.styles';
import { TopNavProps, TopNavItemProps } from './types';
import Link from 'next/link';

const TopNavItem: FunctionComponent<TopNavItemProps> = ({ name, path, active }) => (
  <styles.NavItem active={active}>
      <Link href={path}>{name}</Link>
  </styles.NavItem>
);

const TopNav: FunctionComponent<TopNavProps> = ({ TopNavItems }) => (
  <styles.TopNav>
    <ul>
      {TopNavItems.map((menuItem, index) => (
        <TopNavItem {...menuItem} key={menuItem.name + index} />
      ))}
    </ul>
  </styles.TopNav>
);

export default TopNav;
