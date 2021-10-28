/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PageLoader } from '@bigbinary/neetoui';
import React from 'react';
// import BodyWrapper from '../Wrapper';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';

function LoadingScreen({ showNav = false }) {
  return (
    <div>
      {showNav ? <NavBar /> : <div />}
      <div className="flex flex-col h-screen w-full items-center justify-center">
        <PageLoader />
      </div>
    </div>
  );
}
LoadingScreen.prototype = { showNav: PropTypes.bool };

export default LoadingScreen;
