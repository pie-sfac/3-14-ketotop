import { Children, FC } from 'react';
import { PopupMenuProps } from './type';
import * as St from './styles';

/**
 * @description - PopupMenu Display 스타일
 * @param { 'NavigationBar' | 'AppBar' } $headerType? 상단 컴포넌트 종류 (옵셔널)
 * @param { React.ReactNode } children 자식 컴포넌트
 */
const Display: FC<PopupMenuProps> = ({ $headerType, children }) => {
  const childrenArray = Children.toArray(children);
  const childrenLength = childrenArray.length;

  if (childrenLength > 5) {
    throw new Error('PopupMenu 의 리스트는 최대 5개까지만 가능합니다.');
  }

  return (
    <>
      <St.PopupMenuStyles $headerType={$headerType}>{children}</St.PopupMenuStyles>
    </>
  );
};

export default Display;
