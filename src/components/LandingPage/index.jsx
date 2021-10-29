/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
// eslint-disable-next-line no-unused-vars
import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { all } from 'ramda';
import BodyWrapper from '../common/Wrapper';
import NewsSection from './NewsSection';
import helperFunctions from '../common/helperFuncs';
// eslint-disable-next-line no-unused-vars
import LoadingScreen from '../common/LoadingScreen';
import commonFunctions from '../common/commonFunctions';
import FilterTabBar from './FilterTabView';
import NoNews from './NoNewsScreen';

function LandingPage({ allArticles, allCategories, filters, setfilters }) {
  const [trimmedAllArticles, settrimmedAllArticles] = useState({});
  const [loading, setloading] = useState(true);
  const [isNewsEmpty, setisNewsEmpty] = useState(false);
  useEffect(() => {
    if (Object.keys(allArticles).length > 0) setloading(false);
  }, [allArticles]);

  useEffect(() => {
    const tempTrimmedNews = helperFunctions.filterFive(filters, 5, allArticles);
    const isEmpty = filters.categories.reduce((a, b) => tempTrimmedNews[b].length > 0 || a, false);
    settrimmedAllArticles(tempTrimmedNews);
    setisNewsEmpty(isEmpty);
    return () => {};
  }, [filters, allArticles]);

  if (loading) return <LoadingScreen showNav={false} />;

  return (
    <div className="flex  flex-col flex-wrap ">
      <FilterTabBar filters={filters} setfilters={setfilters} />
      {isNewsEmpty ? (
        Object.keys(trimmedAllArticles).map((val) =>
          trimmedAllArticles[val].length > 0 ? (
            <NewsSection key={val} category={val} articles={trimmedAllArticles[val]} />
          ) : (
            <></>
          ),
        )
      ) : (
        <NoNews allArticles={allArticles} />
      )}
    </div>
  );
}

LandingPage.propTypes = {
  allCategories: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
  setfilters: PropTypes.func.isRequired,
  allArticles: PropTypes.object.isRequired,
};
export default LandingPage;
