/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const parseUploadedFile = require('./server/file-parser');
const getItems = require('./server/get-iems');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

if (isDeveloping) {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'client',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false,
        },
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('/', (req, res) => {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
        res.end();
    });
} else {
    app.use(express.static(`${__dirname}/dist`));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}

app.get('/rest/upload', (req, res) => {
    console.log('/rest/upload');
    parseUploadedFile(path.join(__dirname, 'tmp', '1.csv')).then((fieldId) => {
        res.send(JSON.stringify({ success: true, fieldId }));
    });
});

app.get('/rest/getitems/:fileId', (req, res) => {
    console.log('/rest/getitems');
    getItems(req.params.fileId).then((data) => {
        res.send(JSON.stringify({ success: true, data }));
    });
});

app.listen(port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

