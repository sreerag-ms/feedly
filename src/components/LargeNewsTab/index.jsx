/* eslint-disable react/style-prop-object */
import { React } from 'react';
import { Button } from '@bigbinary/neetoui';
import { LoremIpsum } from 'react-lorem-ipsum';
// import fetchImage from '../../apis/randomImage';
import RandomImage from '../common/RandomImage';

function LargeNewsTab() {
  // eslint-disable-next-line no-unused-vars

  //   useEffect(() => {
  //     fetchRandomImage();
  //     return () => {};
  //   }, []);

  return (
    <div className="flex flex-col flex-wrap  w-full">
      <div className="flex flex-row flex-wrap">
        <div>
          <RandomImage height={263} width={526} />
        </div>
        <div className="flex flex-col flex-wrap px-5 py-2 max-w-2xl justify-between">
          <div className="flex flex-col">
            <div className="text-xl font-medium text-newstab-title-gray text-left">
              <LoremIpsum p={1} avgWordsPerSentence={2} />
            </div>
            <div className="text-right text-xs text-subtitle-gray ">creditss</div>
            <div className="text-justify">
              <LoremIpsum p={1} avgWordsPerSentence={5} />
            </div>
          </div>
          <div className="text-xs">
            <Button label="Read more " style="link" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeNewsTab;
