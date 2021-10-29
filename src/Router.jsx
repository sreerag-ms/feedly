/* eslint-disable react/prop-types */
import { React, useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropsTypes from 'prop-types';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage';

// import helperFunctions from './components/common/helperFuncs';

function AppRoutes({ allNews, allCategories, filters, setfilters, allArticles }) {
  const [stateLoading, setstateLoading] = useState(true);
  useEffect(() => {
    setstateLoading(false);
    return () => {};
  }, [allNews]);
  return (
    <div>
      <Route
        exact
        path="/"
        component={() => (
          <LandingPage
            allCategories={allCategories}
            filters={filters}
            setfilters={setfilters}
            allArticles={allArticles}
          />
        )}
      />
      <Route
        exact
        path="/:category/:id/readmore"
        component={() => <ArticlePage allArticles={allArticles} stateLoading={stateLoading} />}
      />
    </div>
  );
}
AppRoutes.PropsTypes = {
  allNews: PropsTypes.array.isRequired,
  allCategories: PropsTypes.array.isRequired,
  filters: PropsTypes.object.isRequired,
  setfilters: PropsTypes.func.isRequired,
  allArticles: PropsTypes.object.isRequired,
};

export default AppRoutes;
