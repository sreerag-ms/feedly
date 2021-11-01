/* eslint-disable react/require-default-props */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { Button } from '@bigbinary/neetoui';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { articleTrimmer } from 'commonFunctions/stringHelperFunctions';
import RandomImage from 'commonComponents/RandomImage';

const SmallNewsTab = ({
  title,
  id = '#',
  subtitle,
  imageUrl,
  category,
  setHotReload = () => {},
}) => {
  const history = useHistory();
  const navigate = () => {
    const body = document.querySelector('#root');
    body.scrollIntoView(
      {
        behavior: 'smooth',
      },
      500,
    );
    history.push(`/${category}/${id}/readmore`);
  };

  return (
    <div className="flex flex-col flex-wrap w-5/12  max-h-24 items-center justify-center  px-0 py-2 my-3  ">
      <div className="flex flex-row w-full justify-between">
        <RandomImage width={84} height={84} random={false} imageUrl={imageUrl} />
        <div className="flex flex-col flex-wrap px-2 w-4/5 justify-between pb-1  ">
          <div className="text-xs text-justify font-semibold  ">
            {articleTrimmer(title, 20, '..')}
          </div>
          <div className="text-left text-xs text-subtitle-gray">{`${subtitle}`}</div>
          <div className="text-xs">
            <Button
              label="Read more "
              style="link"
              onClick={() => {
                navigate();
                setHotReload(id);
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
  setHotReload: PropTypes.func,
};
export default SmallNewsTab;
