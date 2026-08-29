export interface OpenPosition {
  id: string;
  title: string;
  description: string;
  meta: string[];
}

export interface OpenPositionsSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  positions: OpenPosition[];
}
