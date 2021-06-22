export type ParentItem = TopNavItem & {
  children: TopNavItem[];
};

type TopNavItem = {
  path: string;
  name: string;
  active?: boolean;
};

export type TopNavProps = {
  TopNavItems: TopNavItem[];
};

export type TopNavItemProps = TopNavItem;
