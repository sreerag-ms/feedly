/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PageLoader } from '@bigbinary/neetoui';
import React from 'react';
// import BodyWrapper from '../Wrapper';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';

const LoadingScreen = () => {
  console.log('Loaadingg');
  return (
    <div>
      <div className="flex flex-col h-screen w-full items-center justify-center">
        <PageLoader />
      </div>
    </div>
  );
};

export default LoadingScreen;
