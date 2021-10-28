/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import BodyWrapper from '../common/Wrapper';
import DetailedNewsSection from './DetailedNewsSection';
import SmallNewsTabSection from '../smallNewsTabSection';
import helperFuncs from '../common/helperFuncs';
import LoadingScreen from '../common/LoadingScreen/index';
// import inshortsApi from '../../apis/inshortsApi';

function ArticlePage({
  // allNews,
  allNews,
  stateLoading = true,
}) {
  // const [loading, setloading] = useState(true);
  if (stateLoading) {
    return <LoadingScreen showNav />;
  }
  const { category, id } = useParams();
  const articles = allNews.filter((val) => val.category === category)[0].data;
  const suggestions = helperFuncs.filterArticles(articles, id);

  const fetchReadMore = async () => {
    // res = await inshortsApi.
  };

  useEffect(() => {
    fetchReadMore();
    return () => {};
  }, []);

  console.log(articles[id], Object.keys(articles), id);

  return (
    <div>
      <BodyWrapper>
        <div className="flex flex-col flex-wrap ">
          <DetailedNewsSection
            title={articles[id].title}
            content={articles[id].content}
            imageUrl={articles[id].imageUrl}
            author={articles[id].author}
            time={articles[id].time}
            date={articles[id].date}
          />
          <SmallNewsTabSection newsList={suggestions} />
        </div>
      </BodyWrapper>
    </div>
  );
}
ArticlePage.propTypes = {
  allNews: PropTypes.array,
  stateLoading: PropTypes.bool,
  // allNews: PropTypes.array,
};

export default ArticlePage;
