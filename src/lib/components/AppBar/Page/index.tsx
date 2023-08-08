import React from 'react';
import { PagenameProps } from '../type';

const AppBarPagename = ({ pagename, ...otherProps }: PagenameProps) => {
  return <div {...otherProps}>{pagename}</div>;
};

export default AppBarPagename;
