/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { subTitleGenerator } from 'commonFunctions/stringHelperFunctions';
import SmallNewsTab from './SmallNewsTab';

const SmallNewsTabRow = ({ rowData = [], setHotReload }) => {
  const [first, second] = rowData;
  return rowData.length === 1 ? (
    <div className="flex flex-row justify-self-start">
      <SmallNewsTab
        title={first.title}
        subtitle={subTitleGenerator(first)}
        imageUrl={first.imageUrl}
        id={first.id}
        category={first.category}
        setHotReload={setHotReload}
      />
    </div>
  ) : (
    <div className="flex flex-row justify-between">
      <SmallNewsTab
        title={first.title}
        subtitle={subTitleGenerator(first)}
        imageUrl={first.imageUrl}
        id={first.id}
        category={first.category}
        setHotReload={setHotReload}
      />
      <SmallNewsTab
        title={second.title}
        subtitle={subTitleGenerator(second)}
        imageUrl={second.imageUrl}
        id={second.id}
        category={second.category}
        setHotReload={setHotReload}
      />
    </div>
  );
};
SmallNewsTabRow.propTypes = {
  rowData: PropTypes.array.isRequired,
  // eslint-disable-next-line react/require-default-props
  setHotReload: PropTypes.func,
};

export default SmallNewsTabRow;
