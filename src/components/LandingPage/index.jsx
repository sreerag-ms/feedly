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

function LandingPage({
  selectedSections = [],
  allNews,
  filters,
  setfilters,
  setallNews,
  setallCategories,
  allCategories,
}) {
  const [trimmedAllNews, settrimmedAllNews] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    console.log('allNews', allNews);
    if (allNews.length > 0) setloading(false);
  }, [allNews]);

  useEffect(() => {
    settrimmedAllNews(helperFunctions.filterFive(allNews, filters, 5));
    return () => {};
  }, [filters]);

  if (loading) return <LoadingScreen showNav={false} />;

  return (
    <div className="flex  flex-col flex-wrap ">
      {/* <FilterTabBar filters={filters} setfilters={setfilters} /> */}
      {trimmedAllNews.map((val) => (
        <NewsSection key={val.category} category={val.category} articles={val.data} />
      ))}
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
  setallCategories: PropTypes.func,
  allCategories: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
  setfilters: PropTypes.func.isRequired,
};
export default LandingPage;
