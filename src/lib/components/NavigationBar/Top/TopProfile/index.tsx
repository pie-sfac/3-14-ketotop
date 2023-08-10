import { INavTopProfile } from '../../type';
import * as St from './styles';
import { Fnd } from '../../../../';

const NavTopProfile = ({ memberName, onMypageClick, onNoticeClick }: INavTopProfile) => {
  return (
    <Fnd.TypographyStyles.Body4 as={'div'} onClick={onMypageClick}>
      <St.FixedItems>
        <St.Line100 />
        <St.UserInfo>
          <Fnd.GraphicStyles name='Profile_24px' />
          <span>{memberName}</span>
          <Fnd.TypographyStyles.Caption2 as={'div'}>
            <St.Subscribe>플랜 이용중</St.Subscribe>
          </Fnd.TypographyStyles.Caption2>
        </St.UserInfo>
        <St.Line100 />

        <St.IconWrapper onClick={onNoticeClick}>
          <Fnd.IconStyles name='notice_24px' />
        </St.IconWrapper>
      </St.FixedItems>
    </Fnd.TypographyStyles.Body4>
  );
};

export default NavTopProfile;
