export interface IBanners extends React.HTMLAttributes<HTMLElement> {
  type?: 'fill' | 'outline';
  normalText?: string;
  boldText?: string;
  src?: string;
  alt?: string;
  $manual?: boolean;
  $reverse?: boolean;
}
