/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
// eslint-disable-next-line no-unused-vars
import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from '../common/Wrapper';
import NewsSection from './NewsSection';
import helperFunctions from '../common/helperFuncs';
// eslint-disable-next-line no-unused-vars
import LoadingScreen from '../common/LoadingScreen';
import commonFunctions from '../common/commonFunctions';
import FilterTabBar from './FilterTabView';
import NoNewsScreen from './NoNewsScreen';

function LandingPage({
  selectedSections = [],
  allNews,
  filters,
  setfilters,
  setallNews,
  allCategories,
}) {
  const [trimmedAllNews, settrimmedAllNews] = useState([]);
  const [loading, setloading] = useState(true);
  const [isNewsEmpty, setisNewsEmpty] = useState(false);
  useEffect(() => {
    if (allNews.length > 0) setloading(false);
  }, [allNews]);

  useEffect(() => {
    const tempTrimmedNews = helperFunctions.filterFive(allNews, filters, 5);
    const isEmpty = tempTrimmedNews.reduce((a, b) => b.data.length > 0 || a, false);
    settrimmedAllNews(tempTrimmedNews);
    setisNewsEmpty(isEmpty);
    return () => {};
  }, [filters, allNews]);

  if (loading) return <LoadingScreen showNav={false} />;

  return (
    <div className="flex  flex-col flex-wrap ">
      <FilterTabBar filters={filters} setfilters={setfilters} />
      {isNewsEmpty ? (
        trimmedAllNews.map((val) =>
          val.data.length > 0 ? (
            <NewsSection key={val.category} category={val.category} articles={val.data} />
          ) : (
            <></>
          ),
        )
      ) : (
        <NoNewsScreen />
      )}
    </div>
  );
}

// function LandingPage({
//   selectedSections = [],
//   allNews,
//   setallNews,
//   setallCategories,
//   allCategories,
// }) {
//   return (
//     <BodyWrapper>
//       <LandingSection
//         allNews={allNews}
//         setallNews={setallNews}
//         allCategories={allCategories}
//         setallCategories={setallCategories}
//       />
//     </BodyWrapper>
//   );
// }
LandingPage.propTypes = {
  selectedSections: PropTypes.array,
  allNews: PropTypes.array.isRequired,
  setallNews: PropTypes.func,
  allCategories: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
  setfilters: PropTypes.func.isRequired,
};
export default LandingPage;
