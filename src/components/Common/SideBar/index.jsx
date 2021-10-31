/* eslint-disable react/forbid-prop-types */
import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Pane, Button } from '@bigbinary/neetoui/v2';
import { Check } from '@bigbinary/neeto-icons';
import { useHistory } from 'react-router';
import LabelledCheckBox from './LabelledCheckBox';

const SideBar = ({ showSideBar, setShowSideBar, filters, setFilters, allCategories }) => {
  const history = useHistory();

  const [localCategoryFilter, setLocalCategoryFilter] = useState({});
  const [localArchivedFilter, setLocalArchivedFilter] = useState(false);
  const [allFilter, setAllFilter] = useState(false);
  const [loading, setLoading] = useState(true);

  const updateAllFilters = () => {
    setAllFilter(Object.values(localCategoryFilter).reduce((a, b) => b && a, true));
  };
  const checkAllFilters = () => {
    setLocalCategoryFilter(allCategories.reduce((acc, val) => ({ ...acc, [val]: true }), {}));
  };

  const resetLocalStates = () => {
    const localCategory = {};
    allCategories.forEach((val) => {
      localCategory[val] = filters.categories.includes(val);
    });
    setLocalCategoryFilter(localCategory);
    setLocalArchivedFilter(filters.archived);
  };

  const handleClick = (event) => {
    const category = event.target.id;
    const status = event.target.checked;
    if (category === 'archived') {
      setLocalArchivedFilter(status);
    } else if (category === 'all') {
      if (status) {
        checkAllFilters();
      } else {
        resetLocalStates();
      }
      setAllFilter(status);
    } else {
      // const cat = { ...localCategoryFilter };
      // cat[category] = status;
      setLocalCategoryFilter({ ...localCategoryFilter, [category]: status });
    }
  };

  const saveFilter = () => {
    setFilters({
      archived: localArchivedFilter,
      categories: Object.keys(localCategoryFilter).filter((val) => localCategoryFilter[val]),
    });
    setShowSideBar(false);
    history.push('/');
  };

  const cancelFilter = () => {
    resetLocalStates();
    setShowSideBar(false);
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
};
SideBar.propTypes = {
  showSideBar: PropTypes.bool.isRequired,
  setShowSideBar: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
  allCategories: PropTypes.array.isRequired,
};
export default SideBar;
