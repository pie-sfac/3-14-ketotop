import { useState } from 'react';
import { IconStyles } from '../../../../foundation';

const BottomIcon = () => {
  const [isCurrentMenu, setIsCurrentMenu] = useState(false);
  //   const onClick = (e: React.MouseEvent<HTMLElement>) => {
  //     console.dir(e.currentTarget.);
  //   };
  const BottomMenu = [
    { icon: 'home', name: '홈', active: isCurrentMenu },
    { icon: 'reserve', name: '일정관리', active: isCurrentMenu },
    { icon: 'patient', name: '회원관리', active: isCurrentMenu },
    { icon: 'center', name: '센터관리', active: isCurrentMenu },
    { icon: 'mypage', name: '마이페이지', active: isCurrentMenu },
  ];
  const onClick = (id: string) => {
    {
      BottomMenu.map((item) => (item.icon === id ? setIsCurrentMenu(!isCurrentMenu) : null));
    }
  };

  return (
    <>
      {BottomMenu.map((item) => {
        return (
          <div key={item.icon} onClick={() => onClick(item.icon)}>
            {item.active ? (
              <IconStyles name={`appbar_${item.icon}_24px`} />
            ) : (
              <IconStyles name={`appbar_${item.icon}_gray_24px`} />
            )}
            <div>{item.name}</div>
          </div>
        );
      })}
    </>
  );
};
export default BottomIcon;
