/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="flex justify-center items-center">
          <div className="mt-64">
            <h1 className="text--2xl md:text-4xl font-semibold text-teal-500">Rails React Greeting App</h1>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
