/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'ramda';
import SmallNewsTabSection from 'commonComponents/SmallNewsTabSection';
import LoadingScreen from 'commonComponents/LoadingScreen';
import DetailedNewsSection from './DetailedNewsSection';

const ArticlePage = ({ allArticles, stateLoading = true, hotReload, setHotReload }) => {
  if (stateLoading) {
    return <LoadingScreen showNav />;
  }

  const { category, id } = useParams();
  const [suggestedArticles, setSuggestedArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState({});

  const initState = () => {
    const articlesOfSelectedCategory = [...(allArticles[category] ?? [])];
    const index = articlesOfSelectedCategory.findIndex((val) => val.id === id);
    if (index > -1) {
      setSelectedArticle(articlesOfSelectedCategory[index]);
      articlesOfSelectedCategory.splice(index, 1);
    }
    setSuggestedArticles(articlesOfSelectedCategory.slice(0, 4));
  };

  useEffect(() => {
    if (!isEmpty(allArticles)) {
      initState();
    }
    return () => {};
  }, [allArticles, hotReload]);
  return (
    <div className="flex flex-col flex-wrap mt-2">
      {!isEmpty(selectedArticle) ? (
        <DetailedNewsSection
          title={selectedArticle.title}
          content={selectedArticle.content}
          imageUrl={selectedArticle.imageUrl}
          author={selectedArticle.author}
          time={selectedArticle.time}
          date={selectedArticle.date}
        />
      ) : null}
      <SmallNewsTabSection newsList={suggestedArticles} setHotReload={setHotReload} />
    </div>
  );
};
ArticlePage.propTypes = {
  stateLoading: PropTypes.bool,
  allArticles: PropTypes.object.isRequired,
  hotReload: PropTypes.string,
  setHotReload: PropTypes.func,
};

export default ArticlePage;
