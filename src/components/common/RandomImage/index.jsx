/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
// eslint-disable-next-line no-unused-vars
import { React, useState } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { PageLoader } from '@bigbinary/neetoui';

function RandomImage({ width = 100, height = 100 }) {
  const [imageLoading, setimageLoading] = useState(true);
  //   const [imageLoading, setimageLoading] = useState(true);
  return (
    <div className={`bg-gray-100 w-${width} h-${height}`}>
      <div className={`relative items-center h-${height} z-1`}>
        {/* <PageLoader /> */}
        <img
          className="relative z100"
          src={`https://picsum.photos/${width}/${height}`}
          alt="Loading"
          onLoad={() => {
            setimageLoading(false);
          }}
        />
      </div>
    </div>
  );
}
RandomImage.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
export default RandomImage;
