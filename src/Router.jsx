/* eslint-disable react/prop-types */
import { React, useState, useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PropsTypes from 'prop-types';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage';
// import helperFunctions from './components/common/helperFuncs';

function AppRoutes({ allNews, setallNews, allCategories, filters, setfilters }) {
  const [stateLoading, setstateLoading] = useState(true);
  useEffect(() => {
    setstateLoading(false);
    return () => {};
  }, [allNews]);
  return (
    <Router>
      <Route
        exact
        path="/"
        component={() => (
          <LandingPage
            allNews={allNews}
            setallNews={setallNews}
            allCategories={allCategories}
            filters={filters}
            setfilters={setfilters}
          />
        )}
      />
      <Route
        exact
        path="/:category/:id/readmore"
        component={() => <ArticlePage allNews={allNews} stateLoading={stateLoading} />}
      />
    </Router>
  );
}
AppRoutes.PropsTypes = {
  allNews: PropsTypes.array.isRequired,
  setallNews: PropsTypes.func.isRequired,
  allCategories: PropsTypes.array.isRequired,
  filters: PropsTypes.object.isRequired,
  setfilters: PropsTypes.func.isRequired,
};

export default AppRoutes;
