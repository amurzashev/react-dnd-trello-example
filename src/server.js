import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { resetServerContext } from 'react-beautiful-dnd';
import { Provider } from 'react-redux';
import configureStore from './duck';
import theme from './helpers/theme';
import { ThemeProvider } from 'emotion-theming';
import serialize from 'serialize-javascript';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    resetServerContext();
    const store = configureStore({});
    const markup = renderToString(
      <Provider store={store}>
        <ThemeProvider theme={theme('dark')}>
          <StaticRouter context={context} location={req.url}>
            <App />
          </StaticRouter>
        </ThemeProvider>
      </Provider>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      const finalState = store.getState();
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
    <script>
      window.__PRELOADED_STATE__ = ${serialize(finalState)}
    </script>
</html>`
      );
    }
  });

export default server;
