/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const Result = ({ title, redirectPath, onClick }) => {
  const history = useHistory();
  return (
    <div
      className="flex justify-start items-center w-full bg-white  cursor-pointer px-6 py-3 border-t-2 hover:bg-gray-50"
      onClick={() => {
        history.push(redirectPath);
        onClick();
      }}
    >
      <div className="text-left">{title}</div>
    </div>
  );
};
Result.propTypes = {
  title: PropTypes.string.isRequired,
  redirectPath: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Result;
