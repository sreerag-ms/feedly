/* eslint-disable react/style-prop-object */
import React from 'react';
import Error from 'images/error.png';
import { useHistory } from 'react-router';
import { Typography } from '@bigbinary/neetoui/v2';

const ErrorBoundary = () => {
  const history = useHistory();
  return (
    <div className=" flex absolute top-0 bottom-0 left-0 right-0 flex-col h-full w-full justify-center items-center">
      <div className="flex flex-col w-1/3 justify-center items-center">
        <div className="w-2/3 flex items-center justify-center">
          <img src={Error} alt="error.png" />
        </div>
        <div className="my-6 mb-10 text-center text-xl font-semibold">
          <div className="">
            <Typography style="h2">You have landed somewhere unknown!</Typography>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            history.push('/');
          }}
          className="outline:none px-3 py-2 bg-gray-200 hover:bg-gray-300 duration-200 focus:outline-none rounded-sm"
        >
          Take me home
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundary;
