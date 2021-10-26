/* eslint-disable react/jsx-curly-brace-presence */
// eslint-disable-next-line no-unused-vars
import { React, useState } from 'react';
import PropTypes from 'prop-types';

function RandomImage({ width = 100, height = 100 }) {
  //   const [imageLoading, setimageLoading] = useState(true);
  console.log((width / 4).toFixed(0));
  return (
    <div className={`bg-gray-500 w-${width} h-${height}`}>
      <img src={`https://picsum.photos/${width}/${height}`} alt="Loading" onLoad={() => {}} />
    </div>
  );
}
RandomImage.propTypes = {
  width: PropTypes.node.isRequired,
  height: PropTypes.node.isRequired,
};
export default RandomImage;
