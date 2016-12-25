import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.js';
import favicon from 'serve-favicon';

const port = 8080;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
// app.use(favicon(path.join(__dirname,'assets','public','favicon.ico')));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
  }
});
