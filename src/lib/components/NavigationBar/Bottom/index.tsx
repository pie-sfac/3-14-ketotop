import { IconStyles, TypographyStyles } from '../../../foundation';
import { INavBar } from '../type';
import BottomIcon from './Icon';
import * as St from './style';

/** @description NavigationBarBottom 스타일의 컴포넌트
 * @params
 * {page : 'home' | 'reserve' | 'member' | 'center' | 'mypage'}
 *  */

const NavigationBarBottom = ({ page = 'home' }: INavBar) => {
  return (
    <St.NavBottomContainer>
      <St.MenuList>
        <BottomIcon></BottomIcon>
        {/* <St.Menu>
          {page === 'home' ? <IconStyles name='appbar_home_24px' /> : <IconStyles name='appbar_home_gray_24px' />}
          <TypographyStyles.Caption2>홈</TypographyStyles.Caption2>
        </St.Menu>
        <St.Menu>
          {page === 'reserve' ? (
            <IconStyles name='appbar_reserve_24px' />
          ) : (
            <IconStyles name='appbar_reserve_gray_24px' />
          )}
          <TypographyStyles.Caption2>일정관리</TypographyStyles.Caption2>
        </St.Menu>
        <St.Menu>
          {page === 'member' ? (
            <IconStyles name='appbar_patient_24px' />
          ) : (
            <IconStyles name='appbar_patient_gray_24px' />
          )}

          <TypographyStyles.Caption2>회원관리</TypographyStyles.Caption2>
        </St.Menu>
        <St.Menu>
          {page === 'center' ? <IconStyles name='appbar_center_24px' /> : <IconStyles name='appbar_center_gray_24px' />}
          <TypographyStyles.Caption2>센터관리</TypographyStyles.Caption2>
        </St.Menu>
        <St.Menu>
          {page === 'mypage' ? <IconStyles name='appbar_mypage_24px' /> : <IconStyles name='appbar_mypage_gray_24px' />}
          <TypographyStyles.Caption2>마이페이지</TypographyStyles.Caption2>
        </St.Menu> */}
      </St.MenuList>
    </St.NavBottomContainer>
  );
};

export default NavigationBarBottom;
