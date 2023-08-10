import { useState } from 'react';
import { TypographyStyles } from '../../../../foundation';
import { INavBar } from '../../type';
import * as St from '../style';

const NavTopMenu = ({ page = 'home' }: INavBar) => {
  const centerList = ['직원 관리', '수강권 관리', '기록 관리', '미디어 관리', '운영 데이터', '알림메시지', '센터 정보'];
  const mypageList = ['내 정보', '공지사항', '앱 설정', '운영데이터'];
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <TypographyStyles.Body3 as={'div'}>
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
    </TypographyStyles.Body3>
  );
};

export default NavTopMenu;
