import React from 'react';
import LargeNewsTab from '../LargeNewsTab';
import SmallNewsTab from '../SmallNewsTab';

function NewsSection() {
  return (
    <div className="mx-10 my-10 px-2  ">
      <div className=" text-2xl font-semibold mb-6 mt-10">National news</div>

      <LargeNewsTab />
      <div className="flex flex-col border-b-2  border-t-2 my-6">
        <div className="flex flex-row justify-between">
          <SmallNewsTab />
          <SmallNewsTab />
        </div>
        <div className="flex flex-row   justify-between">
          <SmallNewsTab />
          <SmallNewsTab />
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
