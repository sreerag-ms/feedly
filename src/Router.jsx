/* eslint-disable react/prop-types */
import { React, useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropsTypes from 'prop-types';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage';

const AppRoutes = ({ allCategories, filters, setfilters, allArticles }) => {
  const [stateLoading, setstateLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(allArticles).length === allCategories.length) setstateLoading(false);
    return () => {};
  }, [allArticles]);

  return (
    <div>
      <Route
        path="/"
        exact
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
};
AppRoutes.PropsTypes = {
  allCategories: PropsTypes.array.isRequired,
  filters: PropsTypes.object.isRequired,
  setfilters: PropsTypes.func.isRequired,
  allArticles: PropsTypes.object.isRequired,
};

export default AppRoutes;
