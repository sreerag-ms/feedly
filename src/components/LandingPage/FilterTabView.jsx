/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prefer-const */
import React from 'react';
import PropsTypes from 'prop-types';
import { Close } from '@bigbinary/neeto-icons';
import { capitalize } from 'commonFunctions/stringHelperFunctions';
// eslint-disable-next-line react/prop-types
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
// eslint-disable-next-line react/prop-types
const FilterTabBar = ({ setFilters, filters }) => {
  let archived;
  let categories;
  ({ archived, categories } = filters);
  return (
    <div className="mx-10  mt-10  w-max  flex flex-row justify-start items-center">
      {categories.map((val) => (
        <FilterTab title={val} setFilters={setFilters} filters={filters} />
      ))}
      {archived ? <FilterTab title="archived" setFilters={setFilters} filters={filters} /> : <></>}
    </div>
  );
};
FilterTabBar.prototypes = {
  filters: PropsTypes.object.isRequired,
  setFilters: PropsTypes.func.isRequired,
};
export default FilterTabBar;
