import React from 'react';
// import fetchImage from '../../apis/randomImage';
import BodyWrapper from '../common/Wrapper';
// import LargeNewsTab from '../LargeNewsTab';
import NewsSection from '../NewsSection';

function LandingSection() {
  return (
    <div className="flex flex-col flex-wrap ">
      <NewsSection />
      <NewsSection />
    </div>
  );
}
function LandingPage() {
  return (
    <BodyWrapper>
      <LandingSection />
    </BodyWrapper>
  );
}

export default LandingPage;
