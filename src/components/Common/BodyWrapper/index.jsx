/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropsTypes from 'prop-types';
import NavBar from '../NavBar';
import SideBar from '../SideBar';

const BodyWrapper = ({
  children,
  setShowSideBar,
  showSideBar,
  showNavBar = true,
  allCategories,
  filters,
  history,
  setFilters,
  setShowSearch,
  setShowSubscription,
}) => (
  <div>
    <SideBar
      showSideBar={showSideBar}
      setShowSideBar={setShowSideBar}
      allCategories={allCategories}
      filters={filters}
      setFilters={setFilters}
    />
    {showNavBar ? (
      <NavBar
        setShowSearch={setShowSearch}
        setShowSideBar={setShowSideBar}
        history={history}
        setShowSubscription={setShowSubscription}
      />
    ) : null}
    <div className="max-w-full px-36 pt-16">{children}</div>
  </div>
);
BodyWrapper.propTypes = {
  children: PropsTypes.node.isRequired,
  setShowSideBar: PropsTypes.func.isRequired,
  showSideBar: PropsTypes.bool.isRequired,
  showNavBar: PropsTypes.bool,
  allCategories: PropsTypes.array.isRequired,
  filters: PropsTypes.object.isRequired,
  setFilters: PropsTypes.func.isRequired,
  setShowSearch: PropsTypes.func.isRequired,
  setShowSubscription: PropsTypes.func.isRequired,
};
export default BodyWrapper;
