export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  href?: string;
}

export interface ServicesSectionProps {
  id?: string;
  title?: string;
  description?: string;
  services?: ServiceItem[];
}