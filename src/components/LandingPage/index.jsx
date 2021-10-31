/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import { React, useEffect, useState } from 'react';
import PropTypes, { object } from 'prop-types';
import { filterFive } from 'commonFunctions/stateHelperFunctions';
import LoadingScreen from 'components/Common/LoadingScreen';
import NewsSection from './NewsSection';
import FilterTabBar from './FilterTabView';
import NoNews from './NoNewsScreen';

const LandingPage = ({ allArticles, filters, setFilters }) => {
  const [trimmedAllArticles, setTrimmedAllArticles] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNewsEmpty, setIsNewsEmpty] = useState(true);

  useEffect(() => {
    const tempTrimmedNews = filterFive(filters, 5, allArticles);
    const isEmpty =
      filters.categories.reduce((a, b) => tempTrimmedNews[b].length === 0 || a, false) ||
      Object.keys(tempTrimmedNews).length === 0;
    setTrimmedAllArticles(tempTrimmedNews);
    if (!isEmpty) setIsLoading(false);
    if (Object.keys(trimmedAllArticles).length >= filters.categories.length) setIsLoading(false);
    setIsNewsEmpty(isEmpty);
    return () => {};
  }, [filters, allArticles]);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="flex  flex-col flex-wrap ">
      <FilterTabBar filters={filters} setFilters={setFilters} />
      {!isNewsEmpty ? (
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
