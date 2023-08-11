export interface LabelType {
  type: TypeName;
  bgcolor: BgColor;
  fontcolor: FontColor;
  children: React.ReactNode;
}

export type TypeName = 'Rectangle' | 'Round';
export type BgColor = 'Blue' | 'Gray' | 'Green';
export type FontColor = 'Blue' | 'Gray' | 'Green' | 'Red';