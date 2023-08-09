import { FC, useState } from 'react';
import * as St from './styles';
import { Fnd } from '../../..';
import { DropdownProps } from './type';

/**
 * @description 배열만을 values로 받는 기본형태의 Dropdown 컴포넌트
 * @type {items: string[], onChange: (string) => void, value: string, title: string, placeholder: string, width: string, disabled: boolean}
 */
export const Dropdown: FC<DropdownProps> = ({ items, onChange, value, title, placeholder, width, disabled }) => {
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
      <St.DropdownWrapper $width={width}>
        <St.DropdownLabel>{title}</St.DropdownLabel>
        <St.DropdownButton
          as={'button'}
          onClick={toggleValuesVisible}
          $value={value}
          $isVisible={isVisible}
          disabled={disabled}
        >
          <Fnd.TypographyStyles.Body4 as={'span'}>{value ? value : placeholder}</Fnd.TypographyStyles.Body4>
          {disabled ? (
            <Fnd.IconStyles
              name='drop_more_gray_24px'
              extension='svg'
              $width={2.4}
              $height={2.4}
              $iconSize={2.4}
            ></Fnd.IconStyles>
          ) : !isVisible ? (
            <Fnd.IconStyles
              name='drop_more_24px'
              extension='svg'
              $width={2.4}
              $height={2.4}
              $iconSize={2.4}
            ></Fnd.IconStyles>
          ) : (
            <Fnd.IconStyles
              name='drop_less_24px'
              extension='svg'
              $width={2.4}
              $height={2.4}
              $iconSize={2.4}
            ></Fnd.IconStyles>
          )}
        </St.DropdownButton>
        <St.DropdownValueWrapper $isVisible={isVisible}>
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
