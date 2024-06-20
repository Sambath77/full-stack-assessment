import React from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as StackLineLogo } from '../../assets/stackline_logo.svg';
import './navigation.css';

const Navigation = () => {
  return (
    <React.Fragment>
      <div className='container'>
        <StackLineLogo className='logo' />
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;
