import React from 'react';
import PropTypes from 'prop-types';
import SmallNewsTabRow from './SmallNewsTabRow';

function SmallNewsTabSection({ newsList = [] }) {
  const rows = newsList.reduce(
    (row, key, index) => (index % 2 === 0 ? row.push([key]) : row[row.length - 1].push(key)) && row,
    [],
  );
  return newsList.length === 0 ? (
    <div className="my-5" />
  ) : (
    <div className="flex flex-col border-b-2  border-t-2 my-6">
      {rows.map((item) => (
        <SmallNewsTabRow key="key" rowData={item} />
      ))}
    </div>
  );
}

SmallNewsTabSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  newsList: PropTypes.array.isRequired,
};

export default SmallNewsTabSection;
