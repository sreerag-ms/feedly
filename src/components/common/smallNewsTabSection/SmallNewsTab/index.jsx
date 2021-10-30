/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react';
// import { LoremIpsum } from 'react-lorem-ipsum';
import { Button } from '@bigbinary/neetoui';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import RandomImage from '../../RandomImage';
import { articleTrimmer } from '../../../../common/stringHelperFunctions';

const SmallNewsTab = ({ title, content = '', id = '#', subtitle, imageUrl, category }) => {
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
    <div className="flex flex-col flex-wrap w-5/12  px-0 py-2 my-3  ">
      <div className="flex flex-row flex-wrap justify-between">
        <div>
          <RandomImage width={84} height={84} random={false} imageUrl={imageUrl} />
        </div>
        <div className="flex flex-col flex-wrap px-2 w-4/5 justify-between pb-1  ">
          <div className="text-xs font-semibold text-justify ">
            {articleTrimmer(title, 20, '..')}
          </div>
          <div className="text-justify text-xs text-subtitle-gray">{`${subtitle}`}</div>
          {/* </div> */}

          <div className="text-xs">
            <Button
              label="Read more "
              style="link"
              onClick={() => {
                navigate();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
SmallNewsTab.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  category: PropTypes.string,
};
export default SmallNewsTab;
