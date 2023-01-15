import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from '@reduxjs/toolkit';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addTopic } from './actions/topics';
import { setTextFilter } from './actions/filters';
import getVisibleTopics from './selectors/topics';
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';

const store = configureStore();

// store.dispatch(addTopic({ description: 'Water bill', amount: 4500 }));
// // store.dispatch(addNote({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addTopic({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleTopics = getVisibleTopics(state.topics, state.filters);
console.log(visibleTopics);
console.log(visibleNotes);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
