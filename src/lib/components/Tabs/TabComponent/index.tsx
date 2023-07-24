import { FC } from 'react';
import { TabComponentProps } from './type';
import * as St from './styles';
import { TypographyStyles } from '@lib/foundation';

const TabComponent: FC<TabComponentProps> = ({ instance, children, isVisible = false }) => {
  if (!isVisible) return null;

  return (
    <St.TabComponentWrapper instance={instance}>
      {instance === 'Select' ? (
        <TypographyStyles.Body2>{children}</TypographyStyles.Body2>
      ) : (
        <TypographyStyles.Body3>{children}</TypographyStyles.Body3>
      )}
    </St.TabComponentWrapper>
  );
};

export default TabComponent;
