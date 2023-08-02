import Icon from '@lib/foundation/Icon';
import * as St from './styles';
import { TypographyStyles as Typo } from '@lib/foundation';
import { DialogProps } from './type';
import { FC } from 'react';

export const Dialog: FC<DialogProps> = ({
  title,
  description,
  grayButtonName,
  priButtonName,
  onCloseEffect,
  onGrayEffect,
  onPriEffect,
  isOpen,
}: DialogProps) => {
  return (
    <>
      {isOpen ? (
        <St.Dialog>
          <St.Icon onClick={onCloseEffect}>
            <Icon name='close' width={16} height={16} />
          </St.Icon>
          <St.Contents>
            <St.TitleWrapper>
              <Typo.Title6 title={title}>{title}</Typo.Title6>
            </St.TitleWrapper>
            {description ? (
              <St.SubTextWrapper>
                <Typo.Body4 title={description}>{description}</Typo.Body4>
              </St.SubTextWrapper>
            ) : null}
            <St.BtnWrapper>
              <St.GrayBtn marginNeed={priButtonName !== undefined} onClick={onGrayEffect}>
                <Typo.Body4 as={'span'}>{grayButtonName}</Typo.Body4>
              </St.GrayBtn>
              {priButtonName ? (
                <St.PriBtn onClick={onPriEffect}>
                  <Typo.Body4 as={'span'}>{priButtonName}</Typo.Body4>
                </St.PriBtn>
              ) : null}
            </St.BtnWrapper>
          </St.Contents>
        </St.Dialog>
      ) : null}
    </>
  );
};
