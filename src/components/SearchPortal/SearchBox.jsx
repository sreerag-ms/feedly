/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable no-unused-vars */
import { Search, Down, Right } from '@bigbinary/neeto-icons';
import { Input } from '@bigbinary/neetoui/v2/';
import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ searchItem, setSearchItem }) => (
  <div className="w-full  flex flex-row px-1 py-1 bg-white ">
    <div className="flex flex-row  justify-between items-center  px-2 w-full">
      <Search />

      <input
        type="text"
        value={searchItem}
        onChange={setSearchItem}
        className="w-full border-none"
        autoFocus
      />
      {searchItem.length > 0 ? <Down /> : <Right />}
    </div>
  </div>
);

SearchBox.propTypes = {
  searchItem: PropTypes.string.isRequired,
  setSearchItem: PropTypes.func.isRequired,
};
export default SearchBox;
