import Icon from '../../foundation/Icon';
import * as St from './styles';
import { DialogProps } from './type';
import { FC } from 'react';
import { DialogButtonWrapper, PriButton, GrayButton } from './DialogButton';

/**
 * @description $isOpen 상태에 따라 렌더되는 Dialog 컴포넌트
 * @type {title: string, description?: string, onCloseEffect: () => void, isOpen: boolean, children: React.ReactNode}
 */
export const Display: FC<DialogProps> = ({ title, description, onCloseEffect, isOpen, children: Buttons }) => {
  if (!title) throw new Error('Please enter DialogTitle!');
  if (!onCloseEffect) throw new Error('Please enter onCloseEffect, with handling isOpen state!');

  return (
    <>
      {isOpen && (
        <St.Dialog>
          <St.Contents>
            <St.TitleWrapper title={title}>{title}</St.TitleWrapper>
            {description && <St.SubTextWrapper title={description}>{description}</St.SubTextWrapper>}
            <DialogButtonWrapper>{Buttons}</DialogButtonWrapper>
          </St.Contents>
          <St.Icon onClick={onCloseEffect}>
            <Icon name='close_24px' $width={2.4} $height={2.4} $iconSize={2.4} />
          </St.Icon>
        </St.Dialog>
      )}
    </>
  );
};

export const Dialog = { Display, PriButton, GrayButton };
