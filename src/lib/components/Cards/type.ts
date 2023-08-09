export interface CardsType {
  type: TypeName;
  title?: string;
  description?: string;
  thumbnail?: string;
  // isOpen: Boolean;
  // children: React.ReactNode;
}

export type TypeName = 
'Option_in'| 'Option_ac' | 'Calendar_data' | 'Link_large' | 'Link_medium' | 'Link_medium_deldelt';