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
  menuList,
  selected,
  onMenuClick,
  onLogoClick,
  onMypageClick,
  onNoticeClick,
  page,
  memberName,
}: INavBar) => {
  if (page !== 'defalut' && page !== 'menulist') throw new Error('page prop is required');
  if (typeof memberName !== 'string') throw new Error('memberName prop is string type');

  return (
    <>
      <Fnd.FoundationGlobalStyles />
      <St.NavTopContainer>
        <div onClick={onLogoClick}>
          <Fnd.GraphicStyles name='logo' />
        </div>
        {page === 'menulist' &&
          menuList &&
          onMenuClick &&
          menuList.map((item, index) => {
            const instanceType = selected === index ? 'select' : 'unselect';

            return (
              <NavTopMenu key={index} instance={instanceType} onClick={() => onMenuClick(index)}>
                {item}
              </NavTopMenu>
            );
          })}

        <NavTopProfile memberName={memberName} onMypageClick={onMypageClick} onNoticeClick={onNoticeClick} />
      </St.NavTopContainer>
    </>
  );
};
export default NavBarTop;
