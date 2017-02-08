import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import './index.css';

const rootEl = document.getElementById('root');

render(
  <Root />,
  rootEl
);
