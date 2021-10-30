/* eslint-disable react/forbid-prop-types */
import { Edit } from '@bigbinary/neeto-icons';
import { React, useState } from 'react';
import PropTypes from 'prop-types';

import SmallNewsTabSection from 'commonComponents/SmallNewsTabSection';
import NotFound from 'images/Vector.png';
import WriteToUsModal from './Form/WriteToUsModal';

const NoNews = ({ allArticles }) => {
  const [showWriteToUs, setShowWriteToUs] = useState(false);
  /// [count] of news, Preferably even.
  const randomNews = (count) => {
    let mixedArticles = [];
    Object.values(allArticles).forEach((element) => {
      mixedArticles = [...mixedArticles, ...element];
    });
    return mixedArticles.slice(0, count);
  };
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="w-full flex justify-center flex-col items-center">
        <img className="mt-10" src={NotFound} alt="" />
        <div className="text-2xl font-semibold py-6">No news articles found</div>
        <button
          onClick={() => setShowWriteToUs(true)}
          className="bg-gray-200 px-4 py-1 text-md font-normal flex flex-row rounded-sm"
          type="button"
        >
          <Edit className="mr-3 text-gray-400" />
          Write To us
        </button>
      </div>
      <SmallNewsTabSection newsList={randomNews(6)} />
      <WriteToUsModal showWriteToUs={showWriteToUs} setShowWriteToUs={setShowWriteToUs} />
    </div>
  );
};
NoNews.propTypes = {
  allArticles: PropTypes.object.isRequired,
};
export default NoNews;
