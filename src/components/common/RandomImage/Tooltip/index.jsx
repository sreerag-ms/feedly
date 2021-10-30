import React from 'react';
import Tooltip from 'react-simple-tooltip';
import PropTypes from 'prop-types';

const ToolTip = ({ children, content }) => (
  <Tooltip content={content} padding={5} className="p-0" placement="bottom" fadeDuration={100}>
    {children}
  </Tooltip>
);
ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
};
export default ToolTip;
