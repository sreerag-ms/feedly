/* eslint-disable react/require-default-props */
import React from 'react';
import { Checkbox } from '@bigbinary/neetoui/v2';
import PropTypes from 'prop-types';
import { capitalize } from 'commonFunctions/stringHelperFunctions';

const LabelledCheckBox = ({ checked = false, label, handleClick }) => (
  <div className="text-gray-500 text-lg font-semibold flex flex-row px-3 my-4">
    <Checkbox
      checked={checked}
      id={label}
      label={capitalize(label)}
      onChange={(e) => handleClick(e)}
    />
  </div>
);

LabelledCheckBox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default LabelledCheckBox;
