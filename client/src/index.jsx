import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import { Provider } from 'react-redux';
import {createStoreWithData} from './reducers'


const defaultState = {
  // to do:
  //currentTask:  Math.floor(Math.random() * 100),
  currentTask:  0,
  field: new Map()
}
const store = createStoreWithData(defaultState);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);

