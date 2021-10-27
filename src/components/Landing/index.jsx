/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
// eslint-disable-next-line no-unused-vars
import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from '../common/Wrapper';
import NewsSection from '../NewsSection';
import inshortsApi from '../../apis/inshortsApi';
import helperFunctions from '../common/helperFuncs';
// eslint-disable-next-line no-unused-vars
function LandingSection({
  selectedSections = [],
  allNews,
  setallNews,
  setallCategories,
  allCategories,
}) {
  const [trimmedAllNews, settrimmedAllNews] = useState([]);
  useEffect(() => {
    console.log('all news', allNews);
    return () => {};
  }, [allNews]);
  useEffect(() => {
    settrimmedAllNews(helperFunctions.filterFive(allNews, 5));
    return () => {};
  }, []);

  return (
    <div className="flex flex-col flex-wrap ">
      {trimmedAllNews.map((val) => (
        <NewsSection key={val.category} category={val.category} articles={val.data} />
      ))}
    </div>
  );
}
function LandingPage({
  selectedSections = [],
  allNews,
  setallNews,
  setallCategories,
  allCategories,
}) {
  return (
    <BodyWrapper>
      <LandingSection
        allNews={allNews}
        setallNews={setallNews}
        allCategories={allCategories}
        setallCategories={setallCategories}
      />
    </BodyWrapper>
  );
}
LandingSection.propTypes = {
  selectedSections: PropTypes.array,
  allNews: PropTypes.array.isRequired,
  setallNews: PropTypes.func,
  setallCategories: PropTypes.func,
  allCategories: PropTypes.array.isRequired,
};
export default LandingPage;
