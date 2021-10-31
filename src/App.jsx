import { React, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useHistory } from 'react-router';
import BodyWrapper from 'commonComponents/BodyWrapper';
import SearchPortal from 'components/SearchPortal';
import { addIdToArticles } from 'commonFunctions/stateHelperFunctions';
import inshortsApi from 'apis/inshortsApi';
import { initializeLogger } from 'commonFunctions/logger';
import AppRoutes from './Router';
import Subscription from './components/Subscription';

const App = () => {
  const history = useHistory();
  const allCategories = ['business', 'sports', 'world', 'technology', 'national'];
  const [allArticles, setAllArticles] = useState({});
  const [showSideBar, setShowSideBar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [filters, setFilters] = useState({
    archived: true,
    categories: ['business', 'sports', 'world', 'technology', 'national'],
  });
  const initState = async () => {
    let allArt = {};
    allCategories.forEach(async (val, index) => {
      try {
        const res = await inshortsApi.category(val);
        const markedDataArray = addIdToArticles(res.data, index);
        allArt = { ...allArt, [val]: markedDataArray };
        setAllArticles(allArt);
      } catch (e) {
        if (e.message === 'Network error') {
          history.push('');
        }
      }
    });
  };
  const addSubscription = (e) => {
    console.log('subscribe', e);
  };

  useEffect(() => {
    initializeLogger();
    initState();
    return () => {};
  }, []);

  return (
    <Router>
      <BodyWrapper
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
        allCategories={allCategories}
        filters={filters}
        setFilters={setFilters}
        history={history}
        setShowSubscription={setShowSubscription}
      >
        <AppRoutes
          allArticles={allArticles}
          allCategories={allCategories}
          setShowSideBar={setShowSideBar}
          filters={filters}
          setFilters={setFilters}
        />
        <Subscription
          showSubscription={showSubscription}
          setShowSubscription={setShowSubscription}
          handleSubmit={addSubscription}
        />
      </BodyWrapper>
      <SearchPortal
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        allArticles={allArticles}
        filters={filters}
      />
    </Router>
  );
};

export default App;
