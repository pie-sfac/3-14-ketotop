import * as St from './style';
import { INavBar } from '../type';
import { Fnd } from '../../../';
import NavTopMenu from './TopMenu';
import NavTopProfile from './TopProfile';

/** @description NavBarTop 스타일의 컴포넌트
 * @params
 * {page : 'home' | 'reserve' | 'member' | 'center' | 'mypage'}
 *  */

const NavBarTop = ({
  tapList,
  selected,
  onMenuClick,
  onLogoClick,
  onMypageClick,
  onNoticeClick,
  page,
  memberName,
}: INavBar) => {
  // if (!tapList || tapList.length === 0) {
  //   throw new Error('탭메뉴 리스트는 배열 안에 하나 이상 있어야 합니다.');
  // }

  // if (selected && (selected > tapList.length - 1 || selected < 0)) {
  //   throw new Error('선택된 탭메뉴가 존재하지 않습니다.');
  // }

  return (
    <St.NavTopContainer>
      <div onClick={onLogoClick}>
        <Fnd.GraphicStyles name='logo' />
      </div>
      {page === 'menulist' &&
        tapList &&
        onMenuClick &&
        tapList.map((item, index) => {
          const instanceType = selected === index ? 'select' : 'unselect';

          return (
            <NavTopMenu key={index} instance={instanceType} onClick={() => onMenuClick(index)}>
              {item}
            </NavTopMenu>
          );
        })}

      <NavTopProfile memberName={memberName} onMypageClick={onMypageClick} onNoticeClick={onNoticeClick} />
    </St.NavTopContainer>
  );
};
export default NavBarTop;
