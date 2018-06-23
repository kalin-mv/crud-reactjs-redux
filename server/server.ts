import * as express from 'express';
import * as next from 'next';
import { bodyParser } from 'body-parser';
// import * as lg from 'minilog';

// lg.enable();
// lg('server');

import router from '../services/router';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// lg.info("alal");

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
            console.log('> Ready on http://localhost:3000')
        });
    })
    .catch((ex) => {
        console.log(ex);
        process.exit(1);
    });

