const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const lg = require('minilog')('server');

const router = require('./services/router');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

require('minilog').enable();

app.prepare()
    .then(() => {
        const server = express();
        server.use(bodyParser.json());
        server.use('/', router);

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, (err) => {
            if (err) throw err;
            lg.info('> Ready on http://localhost:3000');
        });
    })
    .catch((ex) => {
        lg.error(ex);
        process.exit(1);
    });

