import { useState, FC } from 'react';
import { Fnd } from '../../..';
import * as St from './styles';
import { ListDropdownProps } from './type';

/**
 * @description 큰 분류의 문자열 값과 배열을 받아야하는 ListDropdown 컴포넌트
 * @type {category: string, items: string[], value: string, onChange: (string) => void, onClose: () => void, width: string}
 */
export const ListDropdown: FC<ListDropdownProps> = ({ category, items, value, onChange, onClose, width }) => {
  // Hooks
  const [isVisible, setIsVisible] = useState(false);

  // Validation
  if (!category || category.trim().length === 0) throw new Error('[ListDropdown] please enter category');
  if (!Array.isArray(items)) throw new Error('[ListDropdown] items must be an array');
  if (items.length === 0) throw new Error('[ListDropdown] Please enter at least one item');
  if (value === undefined) throw new Error('[ListDropdown] value must be specified');
  if (!onChange) throw new Error('[ListDropdown] onChange must be handled with a value');
  if (typeof onChange !== 'function') throw new Error('[ListDropdown] onChange must be a function');
  if (!onClose) throw new Error('[ListDropdown] onClose must be handled with a value');
  if (typeof onClose !== 'function') throw new Error('[ListDropdown] onClose must be a function');
  if (!width) throw new Error('[ListDropdown] Please enter at least one item');

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
      <St.ListDropdownWrapper>
        <St.ContentWrapper as={'div'} $value={value} $width={width}>
          <h4>{category}</h4>
          <span>-</span>
          <St.SelectionWrapper>
            <St.DropdownButtonWrapper as={'button'} onClick={toggleValuesVisible}>
              <St.DropdownButtonText>{value.length ? value : '선택하세요'}</St.DropdownButtonText>
              {!isVisible ? (
                <Fnd.IconStyles
                  name='more_small_24px'
                  extension='svg'
                  $width={2.4}
                  $height={2.4}
                  $iconSize={2.4}
                ></Fnd.IconStyles>
              ) : (
                <Fnd.IconStyles
                  name='less_small_24px'
                  extension='svg'
                  $width={2.4}
                  $height={2.4}
                  $iconSize={2.4}
                ></Fnd.IconStyles>
              )}
            </St.DropdownButtonWrapper>
            <St.ItemsWrapper $isVisible={isVisible}>
              {items.map((item: string, idx) => (
                <St.Item
                  as={'li'}
                  key={item + idx}
                  onClick={() => onClickValue(item)}
                  className={item === value ? 'selected' : ''}
                >
                  {item}
                </St.Item>
              ))}
            </St.ItemsWrapper>
          </St.SelectionWrapper>
        </St.ContentWrapper>
        <St.CloseButtonWrapper onClick={() => onClose(value)}>
          <Fnd.IconStyles name='close_24px' extension='svg' $width={2.4} $height={2.4} $iconSize={2.4}></Fnd.IconStyles>
        </St.CloseButtonWrapper>
      </St.ListDropdownWrapper>
    </>
  );
};
