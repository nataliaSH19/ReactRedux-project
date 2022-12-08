import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';


  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App /*state={state} dispatch={store.dispatch.bind(store)} store={store}*//>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );


