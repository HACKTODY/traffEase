import React, {Fragment } from 'react';
import AutoLayoutTop from '../components/Auto/AutoLayoutTop';
const AutoLayouts = ({ children, value }) => {
  return (
    <Fragment>
      <AutoLayoutTop value={value} />
      {children}
    </Fragment>
  );
};

export default AutoLayouts;