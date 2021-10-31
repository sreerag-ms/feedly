/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prefer-const */
import React from 'react';
import PropTypes from 'prop-types';
import { Close } from '@bigbinary/neeto-icons';
import { capitalize } from 'commonFunctions/stringHelperFunctions';

const FilterTab = ({ title, setFilters, filters }) => {
  const handleDelete = (item) => {
    if (item === 'archived') {
      setFilters({ ...filters, archived: false });
    } else {
      setFilters({
        ...filters,
        // eslint-disable-next-line react/prop-types
        categories: filters.categories.filter((val) => val !== item),
      });
    }
  };
  return (
    <div className="h-10 mr-5 px-3  flex flex-row max-w-xs mx-2 border-2 rounded-md align-middle items-center">
      <div className="align-middle text-center  mb-1">{capitalize(title)} </div>
      <div
        className="mx-1 cursor-pointer text-subtitle-gray ml-4 rounded-sm hover:bg-gray-100"
        onClick={() => handleDelete(title)}
      >
        <Close size={16} />
      </div>
    </div>
  );
};
FilterTab.propTypes = {
  title: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
};
export default FilterTab;

// eslint-disable-next-line react/prop-types
