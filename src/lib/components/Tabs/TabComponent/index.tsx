import { FC } from 'react';
import { TabComponentProps } from './type';
import * as St from './styles';
import { Fnd } from '@lib/index';

const TabComponent: FC<TabComponentProps> = ({ instance, children, isVisible = false }) => {
  if (!isVisible) return null;

  return (
    <St.TabComponentWrapper instance={instance}>
      {instance === 'Select' ? (
        <Fnd.TypographyStyles.Body2>{children}</Fnd.TypographyStyles.Body2>
      ) : (
        <Fnd.TypographyStyles.Body3>{children}</Fnd.TypographyStyles.Body3>
      )}
    </St.TabComponentWrapper>
  );
};

export default TabComponent;
