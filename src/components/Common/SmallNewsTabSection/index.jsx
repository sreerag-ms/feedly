/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import SmallNewsTabRow from './SmallNewsTabRow';

const SmallNewsTabSection = ({ newsList = [] }) => {
  const rows = newsList.reduce(
    (row, key, index) => (index % 2 === 0 ? row.push([key]) : row[row.length - 1].push(key)) && row,
    [],
  );
  return newsList.length === 0 ? null : (
    <div className="flex flex-col border-b-2  border-t-2 my-6">
      {rows.map((item) => (
        <SmallNewsTabRow key={item[0].id} rowData={item} />
      ))}
    </div>
  );
};

SmallNewsTabSection.propTypes = {
  newsList: PropTypes.array.isRequired,
};

export default SmallNewsTabSection;
