/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Pane } from '@bigbinary/neetoui/v2';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage';
import inshortsApi from './apis/inshortsApi';
import helperFunctions from './components/common/helperFuncs';
import LoadingScreen from './components/common/LoadingScreen';
import AppRoutes from './Router';
import BodyWrapper from './components/common/Wrapper';

function App() {
  const [allNews, setallNews] = useState([]);
  const [allCategories, setallCategories] = useState([
    'business',
    'sports',
    'world',
    'technology',
    'science',
  ]);

  const [showSideBar, setshowSideBar] = useState(false);
  const [stateLoading, setstateLoading] = useState(true);
  const [filters, setfilters] = useState({
    archived: false,
    categories: ['sports', 'world', 'technology', 'science'],
  });

  const fetchAllNews = async () => {
    console.log('fetching allnews');
    let all = [];
    allCategories.forEach(async (val, index) => {
      try {
        const res = await inshortsApi.category(val);
        const markedData = helperFunctions.addId(res.data, index);
        all = [...all, markedData];
        console.log('ALL NEWS', all);
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
    <BodyWrapper setshowSideBar={setshowSideBar} showSideBar={showSideBar} allNews={allNews}>
      <AppRoutes
        allNews={allNews}
        setallNews={setallNews}
        allCategories={allCategories}
        setallCategories={setallCategories}
        showSideBar={showSideBar}
        setshowSideBar={setshowSideBar}
        filters={filters}
        setfilters={setfilters}
      />
    </BodyWrapper>
    // <Router>
    //   <Route
    //     exact
    //     path="/"
    //     component={() => (
    //       <LandingPage
    // allNews={allNews}
    // setallNews={setallNews}
    // allCategories={allCategories}
    // setallCategories={setallCategories}
    // showSideBar={showSideBar}
    // setshowSideBar={setshowSideBar}
    //       />
    //     )}
    //   />
    //   <Route
    //     exact
    //     path="/:category/:id/readmore"
    //     component={() => (
    //       <ArticlePage
    //         allNews={allNews}
    //         stateLoading={stateLoading}
    //         showSideBar={showSideBar}
    //         setshowSideBar={setshowSideBar}
    //       />
    //     )}
    //   />
    // </Router>
  );
}

export default App;
