/* eslint-disable react/prop-types */
import { React, useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropsTypes from 'prop-types';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage';

const AppRoutes = ({ allCategories, filters, setFilters, allArticles }) => {
  const [stateLoading, setStateLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(allArticles).length === allCategories.length) setStateLoading(false);
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
            setFilters={setFilters}
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
  setFilters: PropsTypes.func.isRequired,
  allArticles: PropsTypes.object.isRequired,
};

export default AppRoutes;
