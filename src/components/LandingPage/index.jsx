/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { filterAndTrim } from 'commonFunctions/stateHelperFunctions';
import LoadingScreen from 'commonComponents/LoadingScreen';
import loadedCategories from 'constants/categories';
import NewsSection from './NewsSection';
import NoNews from './NoNewsScreen';
import FilterTabBar from './FilterTabView';

const LandingPage = ({ allArticles, filters, setFilters }) => {
  const [trimmedAllArticles, setTrimmedAllArticles] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [filteredNewsExists, setFilteredNewsExists] = useState(true);

  useEffect(() => {
    const tempTrimmedNews = filterAndTrim(filters, 5, allArticles);
    let isExists = false;
    isExists =
      filters.categories.reduce((a, b) => (tempTrimmedNews[b]?.length ?? 0) > 0 || a, false) ||
      Object.keys(tempTrimmedNews).length !== 0;

    setTrimmedAllArticles(tempTrimmedNews);
    setFilteredNewsExists(isExists);
    if (isExists && isLoading) setIsLoading(false);
    if (Object.keys(allArticles).length === loadedCategories.all.length && isLoading)
      setIsLoading(false);
  }, [filters, allArticles]);

  if (isLoading) return <LoadingScreen />;
  return (
    <div className="flex flex-col flex-wrap mt-2">
      <FilterTabBar filters={filters} setFilters={setFilters} />
      {filteredNewsExists ? (
        Object.keys(trimmedAllArticles).map((val) =>
          trimmedAllArticles[val].length > 0 ? (
            <NewsSection key={val} category={val} articles={trimmedAllArticles[val]} />
          ) : null,
        )
      ) : (
        <NoNews allArticles={allArticles} />
      )}
    </div>
  );
};

LandingPage.propTypes = {
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
  allArticles: PropTypes.object.isRequired,
};
export default LandingPage;
