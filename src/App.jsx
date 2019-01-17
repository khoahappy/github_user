
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store';

// import logo from './logo.svg';
import './App.scss';
import { HomeContainer } from './container/Home';

const history = createBrowserHistory();
const { store, persistor } = configureStore(history);

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        { /* place ConnectedRouter under Provider */ }
        { /* your usual react-router v4 routing */ }
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);
