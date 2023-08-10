import { INavBottom } from '../type';
import { NavItem } from './BottomItem';
import * as St from './styles';

const PoinTNavBarItems = [
  {
    icon: 'home',
    label: '홈',
  },
  {
    icon: 'reserve',
    label: '일정관리',
  },
  {
    icon: 'patient',
    label: '회원관리',
  },
  {
    icon: 'center',
    label: '센터관리',
  },
  {
    icon: 'mypage',
    label: '마이페이지',
  },
];

const NavBarBottom = ({ onClickNavItem, selected, isLabel }: INavBottom) => {
  return (
    <St.NavBottomContainer>
      <St.MenuList>
        {PoinTNavBarItems.map((item, index) => (
          <NavItem
            key={item.icon + item.label}
            icon={item.icon}
            label={item.label}
            isSelected={selected === item.icon}
            isLabel={isLabel}
            onClick={() => {
              onClickNavItem(item.icon);
            }}
          />
        ))}
      </St.MenuList>
    </St.NavBottomContainer>
  );
};

export default NavBarBottom;
