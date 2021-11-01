/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import PropTypes from 'prop-types';

// :TODO implement image Loading
import { PageLoader } from '@bigbinary/neetoui';

const RandomImage = ({ width = 100, height = 100, random = true, imageUrl = '' }) => {
  const [imageLoading, setImageLoading] = useState(true);

  /// TODO: Bad inline css method of providing size. Need more elegant solution
  const style = { height: `${height}px`, width: `${width}px` };

  return (
    <div className={`bg-gray-100 overflow-hidden `} style={style}>
      <div className="relative items-center h-full z-1">
        {random ? (
          <img
            className="relative z100"
            src={`https://picsum.photos/${width}/${height}`}
            alt="Related pic"
            onLoad={() => {
              setImageLoading(false);
            }}
          />
        ) : (
          <img
            className="object-cover object-center min-h-full"
            src={imageUrl}
            alt="Related pic"
            onLoad={() => {
              setImageLoading(false);
            }}
          />
        )}
      </div>
    </div>
  );
};
RandomImage.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  random: PropTypes.bool,
  imageUrl: PropTypes.string,
};
export default RandomImage;
