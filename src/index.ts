import './pre-start'; // Must be the first import
import logger from 'jet-logger';

import server from './server';


// **** Start server **** //

const msg = ('Express server started on port: 3000');
server.listen(3000, () => logger.info(msg));

