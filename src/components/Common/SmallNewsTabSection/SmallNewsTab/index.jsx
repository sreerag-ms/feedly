/* eslint-disable react/require-default-props */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { Button } from '@bigbinary/neetoui';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { articleTrimmer } from 'commonFunctions/stringHelperFunctions';
import RandomImage from 'commonComponents/RandomImage';

const SmallNewsTab = ({ title, id = '#', subtitle, imageUrl, category }) => {
  const history = useHistory();
  const navigate = () => {
    const body = document.querySelector('#root');
    const reload = window.location.href.includes('readmore');
    history.push(`/${category}/${id}/readmore`);
    // temp solution
    if (reload) window.location.reload(false);
    body.scrollIntoView(
      {
        behavior: 'smooth',
      },
      500,
    );
  };

  return (
    <div className="flex flex-col flex-wrap w-5/12  max-h-24 items-center justify-center  px-0 py-2 my-3  ">
      <div className="flex flex-row w-full justify-between">
        <RandomImage width={84} height={84} random={false} imageUrl={imageUrl} />
        <div className="flex flex-col flex-wrap px-2 w-4/5 justify-between pb-1  ">
          <div className="text-xs font-semibold text-left ">{articleTrimmer(title, 20, '..')}</div>
          <div className="text-left text-xs text-subtitle-gray">{`${subtitle}`}</div>
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
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  category: PropTypes.string,
};
export default SmallNewsTab;
