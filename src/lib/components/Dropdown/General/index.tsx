import { FC, useState } from 'react';
import * as St from './styles';
import { Fnd } from '@lib/index';
import { DropdownProps } from './type';

export const Dropdown: FC<DropdownProps> = ({ items, onChange, value, title, placeholder, width }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleValuesVisible = () => {
    setIsVisible((prevVisibleState) => !prevVisibleState);
  };

  const onClickValue = (value: string) => {
    toggleValuesVisible();
    onChange(value);
  };

  return (
    <>
      <St.DropdownWrapper width={width}>
        <St.DropdownLabel>{title}</St.DropdownLabel>
        <St.DropdownButton as={'button'} onClick={toggleValuesVisible} value={value} isVisible={isVisible}>
          <Fnd.TypographyStyles.Body4 as={'span'}>{value ? value : placeholder}</Fnd.TypographyStyles.Body4>
          <St.IconWrapper isVisible={isVisible}>
            <Fnd.IconStyles name='drop_more' extension='svg' width={18} height={10}></Fnd.IconStyles>
          </St.IconWrapper>
        </St.DropdownButton>
        <St.DropdownValueWrapper isVisible={isVisible}>
          {items.map((item: string) => (
            <St.DropdownValue
              key={item}
              as={'li'}
              onClick={() => onClickValue(item)}
              className={item === value ? 'selected' : ''}
            >
              {item}
            </St.DropdownValue>
          ))}
        </St.DropdownValueWrapper>
      </St.DropdownWrapper>
    </>
  );
};
