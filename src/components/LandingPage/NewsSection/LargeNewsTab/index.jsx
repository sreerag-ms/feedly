/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import { React } from 'react';
import { Button } from '@bigbinary/neetoui';
import { LoremIpsum } from 'react-lorem-ipsum';
// import fetchImage from '../../apis/randomImage';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { articleTrimmer } from 'commonFunctions/stringHelperFunctions';
import RandomImage from 'components/Common/RandomImage/index';

const LargeNewsTab = ({ title, subtitle, content, id, imageUrl, category }) => {
  const history = useHistory();
  const navigate = () => {
    history.push(`/${category}/${id}/readmore`);
    const body = document.querySelector('#root');

    body.scrollIntoView(
      {
        behavior: 'smooth',
      },
      500,
    );
  };
  return (
    <div className="flex flex-col flex-wrap  w-full">
      <div className="flex flex-row flex-wrap">
        <div>
          <RandomImage height={263} width={526} random={false} imageUrl={imageUrl} />
        </div>
        <div className="flex flex-col flex-wrap pl-5 py-2 w-1/2 justify-between">
          <div className="flex flex-col">
            <div className="text-xl font-medium text-newstab-title-gray text-left">{title}</div>
            <div className="text-right text-xs text-subtitle-gray mb-4 ">{`${subtitle} `}</div>
            <div className="text-justify">{articleTrimmer(content, 50)}</div>
          </div>
          <div className="text-xs">
            <Button
              label="Read more "
              style="link"
              onClick={() => {
                navigate(id);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
LargeNewsTab.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  category: PropTypes.string,
};
export default LargeNewsTab;
