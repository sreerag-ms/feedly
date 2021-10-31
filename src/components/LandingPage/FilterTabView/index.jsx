/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import FilterTab from './FilterTab';

const FilterTabBar = ({ setFilters, filters }) => {
  const { archived, categories } = filters;
  return (
    <div className="mx-10  mt-10  w-max  flex flex-row justify-start items-center">
      {categories.map((val) => (
        <FilterTab key={val} title={val} setFilters={setFilters} filters={filters} />
      ))}
      {archived ? <FilterTab title="archived" setFilters={setFilters} filters={filters} /> : null}
    </div>
  );
};
FilterTabBar.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
};
export default FilterTabBar;
