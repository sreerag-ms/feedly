import React from 'react';
import propTypes from 'prop-types';
import SmallNewsTab from '../SmallNewsTab';
import { subTitleGenerator } from '../common/commonFunctions';

function SmallNewsTabRow({ rowData = [] }) {
  return rowData.length === 1 ? (
    <div className="flex flex-row justify-self-start">
      <SmallNewsTab
        title={rowData[0].title}
        subtitle={subTitleGenerator(rowData[0])}
        imageUrl={rowData[0].imageUrl}
      />
    </div>
  ) : (
    <div className="flex flex-row justify-between">
      <SmallNewsTab
        title={rowData[0].title}
        subtitle={subTitleGenerator(rowData[0])}
        imageUrl={rowData[0].imageUrl}
      />
      <SmallNewsTab
        title={rowData[1].title}
        subtitle={subTitleGenerator(rowData[1])}
        imageUrl={rowData[1].imageUrl}
      />
    </div>
  );
}
SmallNewsTabRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  rowData: propTypes.array.isRequired,
};

export default SmallNewsTabRow;
