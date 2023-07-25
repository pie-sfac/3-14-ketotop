export interface Image {
  name: string;
  extension: string;
  height?: number;
  width?: number;
  category?: ImageCategory;
}

type ImageCategory = 'Empty' | 'Profile' | 'Q_card' | 'Q_record';
