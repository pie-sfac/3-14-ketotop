import { FC } from 'react';
import { TabListProps } from './type';
import TabComponent from './TabComponent';
import * as St from './styles';

/** 사용법
 * tapList: 탭메뉴 리스트 ( string[] )
 * selected: 선택된 탭메뉴 인덱스 ( number )
 * showMenuIdx: 보여질 탭메뉴 인덱스 리스트 ( number[] )
 */
const TabDisplay: FC<TabListProps> = ({ tapList, selected, showMenuIdx }) => {
  if (tapList.length > 10) {
    throw new Error('10개 이상의 탭메뉴를 포함할 수 없습니다..');
  }
  if (selected > tapList.length - 1) {
    throw new Error('선택된 탭메뉴가 존재하지 않습니다.');
  }
  return (
    <St.TabWrapper>
      {tapList.map((item, index) => {
        const isVisible = showMenuIdx.includes(index);
        const instanceType = selected === index ? 'Select' : 'Unselect';

        return (
          <TabComponent key={index} instance={instanceType} isVisible={isVisible}>
            {item}
          </TabComponent>
        );
      })}
    </St.TabWrapper>
  );
};

export default TabDisplay;
