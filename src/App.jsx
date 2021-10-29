/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Pane } from '@bigbinary/neetoui/v2';
import { useHistory } from 'react-router';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage';
import inshortsApi from './apis/inshortsApi';
import helperFunctions from './components/common/helperFuncs';
import LoadingScreen from './components/common/LoadingScreen';
import AppRoutes from './Router';
import BodyWrapper from './components/common/Wrapper';

function App() {
  const history = useHistory;
  const [allNews, setallNews] = useState([]);
  const allCategories = ['business', 'sports', 'world', 'technology', 'science', 'national'];
  const [allArticles, setallArticles] = useState({});
  const [showSideBar, setshowSideBar] = useState(false);
  const [stateLoading, setstateLoading] = useState(true);
  const [filters, setfilters] = useState({
    archived: true,
    categories: ['sports', 'world', 'technology', 'science'],
  });

  const fetchAllNews = async () => {
    let all = [];
    const allArt = {};
    allCategories.forEach(async (val, index) => {
      try {
        const res = await inshortsApi.category(val);
        const [markedDataObj, markedDataArray] = helperFunctions.addId(res.data, index);
        all = [...all, markedDataObj];
        allArt[val] = markedDataArray;
        setallArticles(allArt);
        setallNews(all);
        if (all.length === allCategories.length) setstateLoading(false);
      } catch (e) {
        console.log(e);
      }
    });
  };

  useEffect(() => {
    fetchAllNews();
    return () => {};
  }, []);

  return (
    <Router>
      <BodyWrapper
        setshowSideBar={setshowSideBar}
        showSideBar={showSideBar}
        allCategories={allCategories}
        filters={filters}
        setfilters={setfilters}
        history={history}
      >
        <AppRoutes
          allArticles={allArticles}
          allNews={allNews}
          setallNews={setallNews}
          allCategories={allCategories}
          showSideBar={showSideBar}
          setshowSideBar={setshowSideBar}
          filters={filters}
          setfilters={setfilters}
        />
      </BodyWrapper>
    </Router>
  );
}

export default App;
