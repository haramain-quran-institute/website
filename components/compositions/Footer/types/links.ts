export interface FooterLink {
  title: string;
  url: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  footerItemsData: FooterColumn[];
}
