import { useState, FC } from 'react';
import * as St from './styles';
import { Fnd } from '../../..';
import { ListDropdownProps } from './type';

/**
 * @description 큰 분류의 문자열 값과 배열을 받아야하는 ListDropdown 컴포넌트
 * @type {category: string, items: string[], value: string, onChange: (string) => void, onClose: () => void, width: string}
 */
export const ListDropdown: FC<ListDropdownProps> = ({ category, items, value, onChange, onClose, width }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleValuesVisible = () => {
    setIsVisible((prevVisibleState) => !prevVisibleState);
  };

  const onClickValue = (value: string) => {
    toggleValuesVisible();
    onChange(value);
  };

  return (
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
            {items.map((item: string) => (
              <St.Item
                as={'li'}
                key={item}
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
  );
};
