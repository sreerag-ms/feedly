import PropTypes from 'prop-types';
import React from 'react';
import { capitalize, subTitleGenerator } from 'commonFunctions/stringHelperFunctions';
import SmallNewsTabSection from 'commonComponents/SmallNewsTabSection';
import LargeNewsTab from './LargeNewsTab';
// import SmallNewsTab from '../SmallNewsTab';

const NewsSection = ({ category, articles }) => {
  const [majorArticle, ...minorArticles] = articles;

  return (
    <div className="mx-10 my-6 px-2  ">
      <div className=" text-2xl font-semibold mb-6 ">{`${capitalize(category)} News`}</div>
      {majorArticle ? (
        <LargeNewsTab
          title={majorArticle.title}
          content={majorArticle.content}
          subtitle={subTitleGenerator(majorArticle)}
          id={majorArticle.id}
          category={majorArticle.category}
          imageUrl={majorArticle.imageUrl}
        />
      ) : (
        <div>No articles found </div>
      )}

      <SmallNewsTabSection newsList={minorArticles} />
    </div>
  );
};
NewsSection.propTypes = {
  category: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array.isRequired,
};
export default NewsSection;
