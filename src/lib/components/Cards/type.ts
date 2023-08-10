export interface CardsType {
  type: TypeName;
  title?: string;
  description?: string;
  thumbnail?: string;
  onClickEffect?: () => void;
  onDelEffect?: () => void;
}

export type TypeName = 
'Option_in'| 'Option_ac' | 'Calendar_data' | 'Link_large' | 'Link_medium' | 'Link_medium_deldelt';