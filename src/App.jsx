/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/Landing';
import ArticlePage from './components/Article';
import inshortsApi from './apis/inshortsApi';
import helperFunctions from './components/common/helperFuncs';

function App() {
  const [allNews, setallNews] = useState([]);
  const [allCategories, setallCategories] = useState([
    'business',
    'sports',
    'world',
    'technology',
    'science',
  ]);

  const fetchAllNews = async () => {
    let all = [];
    allCategories.forEach(async (val, index) => {
      try {
        const res = await inshortsApi.category(val);
        const markedData = helperFunctions.addId(res.data, index);
        all = [...all, markedData];

        setallNews(all);

        // if (index === allCategories.length - 1) console.log('all', allNews);
      } catch (e) {
        console.log(e);
      }
    });
  };

  useEffect(() => {
    fetchAllNews();
    return () => {};
  }, []);

  // useEffect(() => {
  //   setloading(false);
  //   return () => {};
  // }, []);
  // if (loading) {
  //   return <div>Loading</div>;
  // }
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
    </Router>
  );
}

export default App;
