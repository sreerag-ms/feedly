/* eslint-disable react/forbid-prop-types */
import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Pane, Button } from '@bigbinary/neetoui/v2';
import { Check } from '@bigbinary/neeto-icons';
import { useHistory } from 'react-router';
import LabelledCheckBox from './LabelledCheckBox';
// eslint-disable-next-line react/prop-types

function SideBar({ showSideBar, setshowSideBar, filters, setfilters, allCategories }) {
  const history = useHistory();

  const [localCategoryFilter, setlocalCategoryFilter] = useState({});
  const [localArchivedFilter, setlocalArchivedFilter] = useState(false);
  const [allFilter, setAllFilter] = useState(false);
  const [loading, setLoading] = useState(true);

  const updateAllFilters = () => {
    setAllFilter(Object.values(localCategoryFilter).reduce((a, b) => b && a, true));
  };
  const checkAllFilters = () => {
    setlocalCategoryFilter(allCategories.reduce((acc, val) => ({ ...acc, [val]: true }), {}));
  };

  const resetLocalStates = () => {
    const localCategory = {};
    allCategories.forEach((val) => {
      localCategory[val] = filters.categories.includes(val);
    });
    setlocalCategoryFilter(localCategory);
    setlocalArchivedFilter(filters.archived);
  };

  const handleClick = (event) => {
    const category = event.target.id;
    const status = event.target.checked;
    if (category === 'archived') {
      setlocalArchivedFilter(status);
    } else if (category === 'all') {
      if (status) {
        checkAllFilters();
      } else {
        resetLocalStates();
      }
      setAllFilter(status);
    } else {
      const cat = { ...localCategoryFilter };
      cat[category] = status;
      setlocalCategoryFilter({ ...cat });
    }
  };

  const saveFilter = () => {
    setfilters({
      archived: localArchivedFilter,
      categories: Object.keys(localCategoryFilter).filter((val) => localCategoryFilter[val]),
    });
    setshowSideBar(false);
    history.push('/');
  };

  const cancelFilter = () => {
    resetLocalStates();
    setshowSideBar(false);
  };

  useEffect(() => {
    resetLocalStates();
    return () => {};
  }, [filters]);

  useEffect(() => {
    setLoading(false);
    updateAllFilters();
    return () => {};
  }, [localCategoryFilter]);

  return (
    <Pane isOpen={showSideBar} onClose={() => cancelFilter()}>
      <Pane.Header>
        <div className="">
          <div className="text-2xl ml-10 font-semibold">Filter Articles</div>
        </div>
      </Pane.Header>
      {loading ? (
        <div>loading</div>
      ) : (
        <Pane.Body>
          <div className="flex flex-col  px-10 w-full">
            <div className="text-gray-500 text-lg font-semibold mb-6">Category</div>
            <LabelledCheckBox checked={allFilter} label="all" handleClick={handleClick} />
            {Object.keys(localCategoryFilter).map((val) => (
              <LabelledCheckBox
                key={val}
                checked={localCategoryFilter[val]}
                label={val}
                handleClick={handleClick}
              />
            ))}
            <div className="w-full border-b-2 my-4" />
            <LabelledCheckBox
              checked={localArchivedFilter}
              label="archived"
              handleClick={handleClick}
            />
          </div>
        </Pane.Body>
      )}
      <Pane.Footer className="flex items-center space-x-2">
        <Button size="large" label="Save Changes" icon={Check} onClick={() => saveFilter()} />
        <Button
          size="large"
          label="Cancel"
          onClick={() => {
            cancelFilter();
          }}
        />
      </Pane.Footer>
    </Pane>
  );
}
SideBar.propTypes = {
  showSideBar: PropTypes.bool.isRequired,
  setshowSideBar: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  setfilters: PropTypes.func.isRequired,
  allCategories: PropTypes.array.isRequired,
};
export default SideBar;
