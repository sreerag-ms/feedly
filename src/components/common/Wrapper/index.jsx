/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
// import { Header } from '@bigbinary/neetoui/v2';
import PropsTypes from 'prop-types';
import NavBar from '../NavBar';
import SideBar from '../SideBar';

// eslint-disable-next-line no-unused-vars
function BodyWrapper({
  children,
  setshowSideBar,
  showSideBar,
  showNavBar = true,
  allCategories,
  filters,
  // eslint-disable-next-line react/prop-types
  history,
  setfilters,
}) {
  return (
    <div>
      <SideBar
        showSideBar={showSideBar}
        setshowSideBar={setshowSideBar}
        allCategories={allCategories}
        filters={filters}
        setfilters={setfilters}
      />
      {showNavBar ? <NavBar setshowSideBar={setshowSideBar} history={history} /> : <></>}
      <div className="max-w-full px-36 pt-16">{children}</div>
    </div>
  );
}
BodyWrapper.propTypes = {
  children: PropsTypes.node.isRequired,
  setshowSideBar: PropsTypes.func.isRequired,
  showSideBar: PropsTypes.bool.isRequired,
  showNavBar: PropsTypes.bool,
  allCategories: PropsTypes.array.isRequired,
  filters: PropsTypes.object.isRequired,
  setfilters: PropsTypes.func.isRequired,
};
export default BodyWrapper;
