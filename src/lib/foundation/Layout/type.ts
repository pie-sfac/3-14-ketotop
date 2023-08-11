type System = 'android' | 'ios';
type TabletSize = 'tablet' | 'pc' | 'phone';

export interface ILayout {
  children?: React.ReactNode;
  $system?: System;
  $size?: TabletSize;
}
