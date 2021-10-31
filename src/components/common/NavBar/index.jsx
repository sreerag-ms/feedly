import React from 'react';
import { Search, Notification, Filter } from '@bigbinary/neeto-icons';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import ToolTip from 'components/Common/Tooltip';

const NavBar = ({ setShowSideBar, setShowSearch }) => {
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
  const handleFilterClick = () => {
    setShowSideBar(true);
  };
  return (
    <nav className="fixed w-full z-10 bg-white px-5 h-16 shadow-lg flex flex-wrap flex-col justify-center align-middle z-50 ">
      <div className="flex flex-wrap flex-row justify-between text-center ">
        <button
          type="button"
          onClick={() => {
            navigateHome();
          }}
          className="text-xl  focus:outline-none font-bold text-gray-500 cursor-pointer"
        >
          Feed.ly
        </button>
        <div className="flex  flex-row">
          <div className="flex items-center justify-center flex-row mt-1">
            <div className="px-5 ">
              <ToolTip content="Search">
                <button
                  type="button"
                  className="cursor-pointer duration-300 hover:opacity-50  focus:outline-none focus:border-transparent"
                  onClick={() => setShowSearch(true)}
                >
                  <Search />
                </button>
              </ToolTip>
            </div>
            <div className="px-5">
              <ToolTip content="Subscribe">
                <button
                  type="button"
                  className="cursor-pointer  ease-in-out duration-300 hover:opacity-50 focus:outline-none"
                  onClick={() => {}}
                >
                  <Notification title="tool" />
                </button>
              </ToolTip>
            </div>
          </div>

          <button
            onClick={() => handleFilterClick()}
            type="button"
            className="h8 border-2 px-5 py-1.5  duration-500 bg-gray-200 rounded-md hover:bg-gray-300
              focus:outline-none"
          >
            <div className="flex flex-row font-semibold">
              Filter
              <Filter className="mx-2" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};
NavBar.propTypes = {
  setShowSideBar: PropTypes.func.isRequired,
  setShowSearch: PropTypes.func.isRequired,
};
export default NavBar;
