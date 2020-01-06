import React from 'react';

export default Component => {
  return props => {
    console.log('check');
    return (
      <Component {...props} />
    );
  }
};
