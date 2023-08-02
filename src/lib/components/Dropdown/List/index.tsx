import { useState, FC } from 'react';
import * as St from './styles';
import { Fnd } from '../../..';
import { ListDropdownProps } from './type';

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
      <St.ContentWrapper as={'div'} value={value} width={width}>
        <h4>{category}</h4>
        <span>-</span>
        <St.SelectionWrapper>
          <St.DropdownButtonWrapper as={'button'} onClick={toggleValuesVisible}>
            <St.DropdownButtonText>{value.length ? value : '선택하세요'}</St.DropdownButtonText>
            <Fnd.IconStyles name='more_small' extension='svg' width={24} height={24}></Fnd.IconStyles>
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
        <Fnd.IconStyles name='close' extension='svg' width={16} height={16}></Fnd.IconStyles>
      </St.CloseButtonWrapper>
    </St.ListDropdownWrapper>
  );
};
