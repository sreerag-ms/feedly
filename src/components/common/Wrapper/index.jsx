/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
// import { Header } from '@bigbinary/neetoui/v2';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';
import SideBar from '../SideBar';

// eslint-disable-next-line no-unused-vars
function BodyWrapper({ children, setshowSideBar, showSideBar, showNavBar = true }) {
  // console.log('sidebar', showSideBar, setshowSideBar);
  return (
    <div>
      <SideBar showSideBar={showSideBar} setshowSideBar={setshowSideBar} />
      {showNavBar ? <NavBar setshowSideBar={setshowSideBar} /> : <></>}
      <div className="max-w-full px-32 pt-16">{children}</div>
    </div>
  );
}
BodyWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  setshowSideBar: PropTypes.func.isRequired,
  showSideBar: PropTypes.bool.isRequired,
  showNavBar: PropTypes.bool,
};
export default BodyWrapper;
