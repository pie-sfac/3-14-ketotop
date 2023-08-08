import React from 'react';
import { Fnd } from '../../..';
import { IconProps } from '../type';

const AppBarIcon = ({ name, ...otherProps }: IconProps) => {
  console.log(name);

  return <div {...otherProps}>{name && <Fnd.IconStyles name={name} />}</div>;
};

export default AppBarIcon;
