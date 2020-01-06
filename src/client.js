import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './duck';
import theme from './helpers/theme';
import { ThemeProvider } from 'emotion-theming';

const store = configureStore(window.__PRELOADED_STATE__);
hydrate(
  <Provider store={store}>
    <ThemeProvider theme={theme('dark')}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
