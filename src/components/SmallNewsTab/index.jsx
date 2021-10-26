/* eslint-disable react/style-prop-object */
import React from 'react';
// import { LoremIpsum } from 'react-lorem-ipsum';
import { Button } from '@bigbinary/neetoui';
import RandomImage from '../common/RandomImage';

function SmallNewsTab() {
  return (
    <div className="flex flex-col flex-wrap w-5/12  px-0 py-2 my-3   ">
      <div className="flex flex-row flex-wrap">
        <div>
          <RandomImage width={84} height={84} />
        </div>
        <div className="flex flex-col flex-wrap px-5 w-4/5 justify-between pb-1">
          {/* <div className="flex flex-col"> */}
          <div className="text-xs font-semibold text-justify">
            At labore et dolore magna amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut
          </div>
          <div className="text-right text-xs text-subtitle-gray">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </div>
          {/* </div> */}

          <div className="text-xs">
            <Button label="Read more " style="link" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallNewsTab;
