export interface NavItem {
  title: string;
  description: string;
  url: string;
}

export interface NavSection {
  title: string;
  url?: string;
  subItems: NavItem[];
}

export interface HeaderProps {
  navItemsData: NavSection[];
}