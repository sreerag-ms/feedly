/* eslint-disable react/style-prop-object */
import React from 'react';
import { Search, Notification, UserCircle } from '@bigbinary/neeto-icons';
import { Button } from '@bigbinary/neetoui';

function NavBar() {
  return (
    <nav className="bg-white px-5 h-14 shadow-lg flex flex-wrap flex-col justify-center align-middle">
      <div className="flex flex-wrap flex-row justify-between text-center ">
        <div className="text-lg font-bold text-gray-500">Feed.ly</div>
        <div className="flex flex-wrap flex-row">
          <div className="px-5">
            <Search />
          </div>
          <div className="px-5">
            <Notification />
          </div>
          <div className="px-5">
            <UserCircle />
          </div>

          <Button label="Button" onClick={() => {}} style="secondary" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
