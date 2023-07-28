import { FC, useState } from 'react';
import * as St from './styles';
import { Fnd } from '@lib/index';
import { DropdownProps } from './type';
const { TypographyStyles: Typo } = Fnd;

export const Dropdown: FC<DropdownProps> = ({ items, onChange, value }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleValuesVisible = () => {
    setIsVisible((prevVisibleState) => !prevVisibleState);
  };

  const onClickValue = (e: any, value: string) => {
    setIsVisible(false);
    onChange(value);
  };

  return (
    <>
      <St.DropdownWrapper onChange={() => console.log('aaa')}>
        <St.DropdownLabel>타이틀</St.DropdownLabel>
        <St.DropdownButton as={'button'} onClick={toggleValuesVisible} value={value} isVisible={isVisible}>
          <Typo.Body4 as={'span'}>{value ? value : 'This is Placeholder'}</Typo.Body4>
          <St.IconWrapper>
            <Fnd.IconStyles name='drop_more' extension='svg' width={18} height={18}></Fnd.IconStyles>
          </St.IconWrapper>
        </St.DropdownButton>
        <St.DropdownValueWrapper isVisible={isVisible}>
          {items.map((value: string) => (
            <St.DropdownValue key={value} as={'li'} onClick={(e) => onClickValue(e, value)}>
              {value}
            </St.DropdownValue>
          ))}
        </St.DropdownValueWrapper>
      </St.DropdownWrapper>
    </>
  );
};
