/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/style-prop-object */

import React from 'react';
import { Search, Notification, Filter } from '@bigbinary/neeto-icons';
// import { Button } from '@bigbinary/neetoui';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import ToolTip from '../RandomImage/Tooltip';

function NavBar({ setshowSideBar }) {
  const history = useHistory();
  const navigateHome = () => {
    history.push(`/`);
    const body = document.querySelector('#root');
    body.scrollIntoView(
      {
        behavior: 'smooth',
      },
      500,
    );
  };
  const handleFillterClick = () => {
    setshowSideBar(true);
  };
  return (
    <nav className="fixed w-full bg-white px-5 h-16 shadow-lg flex flex-wrap flex-col justify-center align-middle z-50 ">
      <div className="flex flex-wrap flex-row justify-between text-center ">
        <div
          onClick={() => {
            navigateHome();
          }}
          className="text-xl font-bold text-gray-500 cursor-pointer"
        >
          Feed.ly
        </div>
        <div className="flex  flex-row">
          <div className="flex  flex-row mt-1">
            <div className="px-5">
              <ToolTip content="Search">
                <Search />
              </ToolTip>
            </div>
            <div className="px-5">
              <ToolTip content="Subscribe">
                <Notification title="tool" />
              </ToolTip>
            </div>
          </div>

          {/* <Button onClick={() => {}} style="secondary">
            ss
          </Button> */}
          <button
            onClick={() => handleFillterClick()}
            type="button"
            className="h8 border-2 px-5 py-1.5 bg-gray-200"
          >
            <div className="flex flex-row">
              Filter
              <Filter className="mx-2" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
NavBar.propTypes = {
  setshowSideBar: PropTypes.bool.isRequired,
};
export default NavBar;
