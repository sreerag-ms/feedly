/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/style-prop-object */
import { React, useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { filterAll } from 'commonFunctions/stateHelperFunctions';
import { useHistory } from 'react-router';
import SearchBox from './SearchBox';
import Result from './Result';
import { debounce } from '../../common/debounce';

const SearchPortal = ({ showSearch, setShowSearch, allArticles, filters }) => {
  const history = useHistory();

  // eslint-disable-next-line no-shadow
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [searching, setSearching] = useState(true);

  const searchArticles = (resultsSetter, articles, item, searchSetter) => {
    if (item === '') {
      resultsSetter([]);
    } else {
      resultsSetter(articles.filter((val) => val.title.toLowerCase().includes(item.toLowerCase())));
    }
    searchSetter(false);
  };
  const debouncedChangeHandler = useCallback(debounce(searchArticles, 500), []);

  const onResultClick = (category, id) => {
    history.push(`/${category}/${id}`);
    setShowSearch(false);
  };

  const onChange = ({ target }) => {
    setSearchItem(target.value);
  };

  const handleSearchClick = (e) => {
    e.stopPropagation();
  };
  const initState = () => {
    setFilteredArticles(filterAll(allArticles, filters));
  };

  useEffect(() => {
    setSearching(true);
    debouncedChangeHandler(setSearchResults, filteredArticles, searchItem, setSearching);
  }, [searchItem]);

  useEffect(() => {
    initState();
    return () => {};
  }, [allArticles, filters]);

  useEffect(() => {
    setSearchItem('');
  }, [filters, showSearch]);

  if (!showSearch) return null;
  return ReactDOM.createPortal(
    <div
      className="fixed flex items-center justify-center z-50 inset-0 bg-gray-200 bg-opacity-80 overflow-y-auto h-full w-full "
      onClick={() => {
        setShowSearch(false);
      }}
    >
      <div className="flex flex-col w-1/2  bg-blue" onClick={handleSearchClick}>
        <SearchBox searchItem={searchItem} setSearchItem={onChange} />

        <div className="flex flex-col max-h-80 overflow-scroll  rounded-b-sm w-full">
          {searchResults.length > 0 || searchItem.length === 0 ? (
            searchResults.map((val) => (
              <Result
                title={val.title}
                redirectPath={`/${val.title}/${val.category}`}
                onClick={onResultClick}
              />
            ))
          ) : (
            <Result
              title={searching ? 'Searching...' : 'No results found'}
              redirectPath=""
              onClick={() => null}
            />
          )}
        </div>
      </div>
    </div>,

    document.body,
  );
};
SearchPortal.propTypes = {
  allArticles: PropTypes.object.isRequired,
  showSearch: PropTypes.bool.isRequired,
  setShowSearch: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
};
export default SearchPortal;
