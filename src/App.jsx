import { React, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BodyWrapper from 'commonComponents/BodyWrapper';
import SearchPortal from 'components/SearchPortal';
import { addIdToArticles } from 'commonFunctions/stateHelperFunctions';
import inshortsApi from 'apis/inshortsApi';
import { initializeLogger } from 'commonFunctions/logger';
import SideBar from 'commonComponents/SideBar';
import AppRoutes from './Router';
import Subscription from './components/Subscription';
import loadedCategories from './constants/categories';

const App = () => {
  const allCategories = loadedCategories.all;
  const [allArticles, setAllArticles] = useState({});
  const [showSideBar, setShowSideBar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [filters, setFilters] = useState({
    archived: true,
    categories: loadedCategories.default,
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
        console.log(e);
      }
    });
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
        />
        <SideBar
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
          allCategories={allCategories}
          filters={filters}
          setFilters={setFilters}
        />
        <SearchPortal
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          allArticles={allArticles}
          filters={filters}
        />
      </BodyWrapper>
    </Router>
  );
};

export default App;
