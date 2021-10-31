/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';

const ResultItem = ({ title, redirecrUrl, onClick }) => (
  <div
    className="flex justify-start items-center w-full bg-white  cursor-pointer px-6 py-3 border-t-2 hover:bg-gray-50"
    onClick={() => onClick(redirecrUrl)}
  >
    <div className="text-left">{title}</div>
  </div>
);
ResultItem.propTypes = {
  title: PropTypes.string.isRequired,
  redirecrUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ResultItem;
