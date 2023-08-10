import { FC } from 'react';
import { TabListProps } from './type';
import TabComponent from './TabComponent';
import * as St from './styles';

/**
 * @description - Tab 스타일
 * @params
 * {(string | undefined)[]} tapList 탭메뉴 리스트
 * @params
 * {number} selected 선택된 탭메뉴 인덱스
 * @params
 * {number[]} showMenuIdx 보여질 탭메뉴 인덱스 리스트
 * @params
 * {(index: number) => void} onTabClick 탭메뉴(index) 클릭 시 수행할 동작
 */

const Tabs: FC<TabListProps> = ({ tapList, selected, showMenuIdx, onTabClick }) => {
  if (!tapList || tapList.length === 0) {
    throw new Error('탭메뉴 리스트는 배열 안에 하나 이상 있어야 합니다.');
  }
  if (tapList.length > 10) {
    throw new Error('10개 이상의 탭메뉴를 포함할 수 없습니다..');
  }
  if (selected > tapList.length - 1 || selected < 0) {
    throw new Error('선택된 탭메뉴가 존재하지 않습니다.');
  }
  return (
    <St.TabWrapper>
      {tapList.map((item, index) => {
        const isVisible = showMenuIdx.includes(index);
        const instanceType = selected === index ? 'Select' : 'Unselect';

        return (
          <TabComponent key={index} instance={instanceType} isVisible={isVisible} onClick={() => onTabClick(index)}>
            {item}
          </TabComponent>
        );
      })}
    </St.TabWrapper>
  );
};

export default Tabs;
