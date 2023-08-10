import { GraphicStyles, TypographyStyles } from '../../../foundation';
import * as St from './style';
import { INavBar } from '../type';
import Icon from '../../../foundation/Icon';
import { useState } from 'react';
import NavTopMenu from './Menu';

/** @description NavigationBarTop 스타일의 컴포넌트
 * @params
 * {page : 'home' | 'reserve' | 'member' | 'center' | 'mypage'}
 *  */

const NavigationBarTop = ({ page = 'home' }: INavBar) => {
  const centerList = ['직원 관리', '수강권 관리', '기록 관리', '미디어 관리', '운영 데이터', '알림메시지', '센터 정보'];
  const mypageList = ['내 정보', '공지사항', '앱 설정', '운영데이터'];
  const memberName = '박관리자01';

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <St.NavTopContainer>
      <GraphicStyles name='logo' extension='svg' />

      {/* <TypographyStyles.Body3 as={'div'}>
        <St.ItemsList>
          {page === 'center' &&
            centerList.map((item, index) => (
              <li key={item} onClick={() => setCurrentTab(index)} className={currentTab === index ? ' focused' : ''}>
                {item}
              </li>
            ))}
          {page === 'mypage' &&
            mypageList.map((item, index) => (
              <li key={item} onClick={() => setCurrentTab(index)} className={currentTab === index ? ' focused' : ''}>
                {item}
              </li>
            ))}
        </St.ItemsList>
      </TypographyStyles.Body3> */}
      <NavTopMenu page={page} />

      <TypographyStyles.Body4 as={'div'}>
        <St.FixedItems>
          <St.Line100 />
          <St.UserInfo>
            <GraphicStyles name='Profile_24px' extension='svg' />
            <span>{memberName}</span>
            <div>플랜 이용중</div>
          </St.UserInfo>
          <St.Line100 />

          <St.IconWrapper>
            <Icon name='notice' extension='svg' />
          </St.IconWrapper>
        </St.FixedItems>
      </TypographyStyles.Body4>
    </St.NavTopContainer>
  );
};
export default NavigationBarTop;
