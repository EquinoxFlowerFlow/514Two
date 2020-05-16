import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router'
import { Provider } from 'react-redux'
import {store} from './store'
//数据持久化
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <Route />
    </PersistGate>
  </Provider>
  ,document.getElementById('root')
);

