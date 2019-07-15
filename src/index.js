import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line import/prefer-default-export
export const init = (obj) => {
  console.log(obj);

  ReactDOM.render(
    <div>
      Hello
    </div>,
    document.body.appendChild(document.createElement('div')),
  );
};
