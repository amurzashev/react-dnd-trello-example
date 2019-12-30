import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import store from './duck';
import theme from './helpers/theme';
import { ThemeProvider } from 'emotion-theming';

// TODO: preload store from window.__PRELOADED_STATE__
hydrate(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
