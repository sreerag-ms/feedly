import PropTypes from 'prop-types';
import React from 'react';
import LargeNewsTab from '../LargeNewsTab';
// import SmallNewsTab from '../SmallNewsTab';
import SmallNewsTabSection from '../smallNewsTabSection';
import { subTitleGenerator } from '../common/commonFunctions';

function NewsSection({ category, articles }) {
  const majorArticle = articles[0];

  const minorArticles = articles.slice(1);

  return (
    <div className="mx-10 my-10 px-2  ">
      <div className=" text-2xl font-semibold mb-6 mt-10">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </div>

      <LargeNewsTab
        title={majorArticle.title}
        content={majorArticle.content}
        subtitle={subTitleGenerator(majorArticle)}
        id={majorArticle.id}
        category={majorArticle.category}
        imageUrl={majorArticle.imageUrl}
      />

      <SmallNewsTabSection newsList={minorArticles} />
    </div>
  );
}
NewsSection.propTypes = {
  category: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array.isRequired,
};
export default NewsSection;
