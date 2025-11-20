import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}

export default Layout;
