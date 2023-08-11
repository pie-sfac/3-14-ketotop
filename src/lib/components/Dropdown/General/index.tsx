import { FC, useState } from 'react';
import { Fnd } from '../../..';
import * as St from './styles';
import { DropdownProps } from './type';

/**
 * @description 배열만을 values로 받는 기본형태의 Dropdown 컴포넌트
 * @type {items: string[], onChange: (string) => void, value: string, title: string, placeholder: string, width: string, disabled: boolean}
 */
export const Dropdown: FC<DropdownProps> = ({ items, onChange, value, title, placeholder, width, disabled }) => {
  // Hooks
  const [isVisible, setIsVisible] = useState(false);

  // Validation
  if (!Array.isArray(items)) throw new Error('[Dropdown] items must be an array');
  if (items.length === 0) throw new Error('[Dropdown] Please enter at least one item');
  if (value === undefined) throw new Error('[Dropdown] value must be specified');
  if (!onChange) throw new Error('[Dropdown] onChange must be handled with a value');
  if (typeof onChange !== 'function') throw new Error('[Dropdown] onChange must be a function');
  if (!width) throw new Error('[Dropdown] Please enter at least one item');
  if (!placeholder) throw new Error('[Dropdown] Please enter placeholder for accessibility');
  if (placeholder.trim().length === 0) console.warn('[Dropdown] Forgot to enter a placeholder?');

  // Custom Func
  const toggleValuesVisible = () => {
    setIsVisible((prevVisibleState) => !prevVisibleState);
  };

  const onClickValue = (value: string) => {
    toggleValuesVisible();
    onChange(value);
  };

  return (
    <>
      <Fnd.FoundationGlobalStyles />
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
          {items.map((item: string, idx) => (
            <St.DropdownValue
              key={item + idx}
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
