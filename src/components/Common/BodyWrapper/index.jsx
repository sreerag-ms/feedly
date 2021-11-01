/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropsTypes from 'prop-types';
import NavBar from 'commonComponents/NavBar';

const BodyWrapper = ({ children, setShowSideBar, setShowSearch, setShowSubscription }) => (
  <div>
    <NavBar
      setShowSearch={setShowSearch}
      setShowSideBar={setShowSideBar}
      setShowSubscription={setShowSubscription}
    />
    <div className="max-w-full h-full px-36">{children}</div>
  </div>
);
BodyWrapper.propTypes = {
  children: PropsTypes.node.isRequired,
  setShowSideBar: PropsTypes.func.isRequired,
  setShowSearch: PropsTypes.func.isRequired,
  setShowSubscription: PropsTypes.func.isRequired,
};
export default BodyWrapper;
