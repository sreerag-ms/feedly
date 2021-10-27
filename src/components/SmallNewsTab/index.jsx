/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react';
// import { LoremIpsum } from 'react-lorem-ipsum';
import { Button } from '@bigbinary/neetoui';
import PropTypes from 'prop-types';
import RandomImage from '../common/RandomImage';

function SmallNewsTab({ title, content = '', id = '#', subtitle, imageUrl }) {
  return (
    <div className="flex flex-col flex-wrap w-5/12  px-0 py-2 my-3   ">
      <div className="flex flex-row flex-wrap">
        <div>
          <RandomImage width={84} height={84} />
        </div>
        <div className="flex flex-col flex-wrap px-5 w-4/5 justify-between pb-1">
          <div className="text-xs font-semibold ">{title}</div>
          <div className="text-justify text-xs text-subtitle-gray">{`${subtitle} `}</div>
          {/* </div> */}

          <div className="text-xs">
            <Button label="Read more " style="link" />
          </div>
        </div>
      </div>
    </div>
  );
}
SmallNewsTab.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
};
export default SmallNewsTab;
