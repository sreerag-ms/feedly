import { PageLoader } from '@bigbinary/neetoui';
import React from 'react';

const LoadingScreen = () => (
  <div>
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <PageLoader />
    </div>
  </div>
);

export default LoadingScreen;
