/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/Landing';
import ArticlePage from './components/Article';
import inshortsApi from './apis/inshortsApi';
import helperFunctions from './components/common/helperFuncs';
import LoadingScreen from './components/common/LoadingScreen';

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
  const fetchAllNews = async () => {
    let all = [];
    allCategories.forEach(async (val, index) => {
      try {
        const res = await inshortsApi.category(val);
        const markedData = helperFunctions.addId(res.data, index);
        all = [...all, markedData];
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
      <Route
        exact
        path="/"
        component={() => (
          <LandingPage
            allNews={allNews}
            setallNews={setallNews}
            allCategories={allCategories}
            setallCategories={setallCategories}
          />
        )}
      />
      <Route exact path="/detail" component={() => <ArticlePage allNews={allNews} />} />
      <Route
        exact
        path="/:category/:id/readmore"
        component={() => <ArticlePage allNews={allNews} stateLoading={stateLoading} />}
      />
    </Router>
  );
}

export default App;
