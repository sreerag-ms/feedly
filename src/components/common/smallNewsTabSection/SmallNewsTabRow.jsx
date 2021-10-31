import React from 'react';
import propTypes from 'prop-types';
import { subTitleGenerator } from 'commonFunctions/stringHelperFunctions';
import SmallNewsTab from './SmallNewsTab';

const SmallNewsTabRow = ({ rowData = [] }) => {
  const [first, second] = rowData;
  return rowData.length === 1 ? (
    <div className="flex flex-row justify-self-start">
      <SmallNewsTab
        title={first.title}
        subtitle={subTitleGenerator(first)}
        imageUrl={first.imageUrl}
        id={first.id}
        category={first.category}
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
      />
      <SmallNewsTab
        title={second.title}
        subtitle={subTitleGenerator(second)}
        imageUrl={second.imageUrl}
        id={second.id}
        category={second.category}
      />
    </div>
  );
};
SmallNewsTabRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  rowData: propTypes.array.isRequired,
};

export default SmallNewsTabRow;
