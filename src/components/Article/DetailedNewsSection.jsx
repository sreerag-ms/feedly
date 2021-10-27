import React from 'react';
import propTypes from 'prop-types';
import LoremIpsum from 'react-lorem-ipsum';
import { Copy } from '@bigbinary/neeto-icons';
import RandomImage from '../common/RandomImage';
// import { Typography } from '@bigbinary/neetoui';

function DetailedNewsSection({ article }) {
  return (
    <div className="flex flex-wrap flex-col my-8">
      <div className="flex flex-wrap flex-col my-4">
        <div className="text-3xl font-semibold">
          {article.title}{' '}
          <button
            className="w-2 text-gray-100 hover:text-subtitle-gray outline-none focus:outline-none"
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(article.imageUrl);
            }}
          >
            <Copy size={20} />
          </button>
        </div>
        <div
          className="subtitle text-sm text-subtitle-gray mt-3
        "
        >
          {`${article.author} ${article.time} ${article.date} `}
        </div>
      </div>
      <div className="flex flex-row justify-around my-6 ">
        <RandomImage width={543} height={304} />
      </div>
      <div className="text-sm text-section-title-gray text-justify">
        {article.content}
        <LoremIpsum p={2} />
      </div>
    </div>
  );
}
DetailedNewsSection.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  article: propTypes.node.isRequired,
};

export default DetailedNewsSection;
