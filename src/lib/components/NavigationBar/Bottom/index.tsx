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
  if (!selected) throw new Error('Please enter the selected');
  if (!isLabel) throw new Error('Please enter the isLabel');
  if (!onClickNavItem) throw new Error('Please enter the onClickNavItem function');
  if (typeof onClickNavItem !== 'function') throw new Error('onClickNavItem must be a function');
  if (!['home', 'reserve', 'patient', 'center', 'mypage'].includes(selected))
    throw new Error("selected must be one of ['home', 'reserve', 'patient', 'center', 'mypage']");
  if (typeof isLabel !== 'boolean') throw new Error('isLabel must be a boolean');

  return (
    <St.NavBottomContainer>
      <St.MenuList>
        {PoinTNavBarItems.map((item) => (
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
