import dotenv from 'dotenv';

import Server from './server';

dotenv.config();
Server.start(process.env.APP_PORT || 5000);
