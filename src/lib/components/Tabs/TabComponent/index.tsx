import { FC } from 'react';
import { TabComponentProps } from './type';
import * as St from './styles';
import { Fnd } from '../../../';

const TabComponent: FC<TabComponentProps> = ({ instance, children, isVisible = false, onClick }) => {
  if (!isVisible) return null;

  return (
    <St.TabComponentWrapper $instance={instance} onClick={onClick}>
      {instance === 'Select' ? (
        <Fnd.TypographyStyles.Body2>{children}</Fnd.TypographyStyles.Body2>
      ) : (
        <Fnd.TypographyStyles.Body3>{children}</Fnd.TypographyStyles.Body3>
      )}
    </St.TabComponentWrapper>
  );
};

export default TabComponent;
