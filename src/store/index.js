// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initState = {
  logged: true,
  loadingItems: 0,
  errorMessages: null,
  task: { active: false, current: {}, taskPop: false },
  taskList: [{}],
  taskByCategory: {
    working: [], studing: [], eating: [], sleeping: [],
  },
  timer: { time: null, category: null },
};

export default function configureStore() {
  const store = createStore(
    reducers,
    initState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      ),
    ),
  );
  return store;
}
