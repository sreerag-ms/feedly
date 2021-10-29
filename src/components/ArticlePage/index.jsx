/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
// import BodyWrapper from '../common/Wrapper';
import { isEmpty } from 'ramda';
import DetailedNewsSection from './DetailedNewsSection';
import SmallNewsTabSection from '../common/smallNewsTabSection';
import LoadingScreen from '../common/LoadingScreen/index';
// import SideBar from '../common/SideBar';
// import inshortsApi from '../../apis/inshortsApi';
function ArticlePage({ allArticles, stateLoading = true }) {
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
  }, [allArticles]);
  return (
    <div>
      <div className="flex flex-col flex-wrap ">
        {!isEmpty(selectedArticle) ? (
          <DetailedNewsSection
            title={selectedArticle.title}
            content={selectedArticle.content}
            imageUrl={selectedArticle.imageUrl}
            author={selectedArticle.author}
            time={selectedArticle.time}
            date={selectedArticle.date}
          />
        ) : (
          <></>
        )}
        <SmallNewsTabSection newsList={suggestedArticles} />
      </div>
      {/* </BodyWrapper> */}
    </div>
  );
}
ArticlePage.propTypes = {
  stateLoading: PropTypes.bool,
  allArticles: PropTypes.object.isRequired,
};

export default ArticlePage;
