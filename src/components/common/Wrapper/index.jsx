import React from 'react';
// import { Header } from '@bigbinary/neetoui/v2';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';

function BodyWrapper({ children }) {
  return (
    <div cla>
      <NavBar />
      <div className="max-w-full px-32">{children}</div>
    </div>
  );
}
BodyWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default BodyWrapper;
