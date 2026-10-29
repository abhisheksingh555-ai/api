import app from './app.js';
import { connectDB } from './config/db.js';
import env from './config/env.js';

function serverStart () {
    connectDB();
    app.listen(env.PORT, () => { 
        console.log(`Server is Running on http://localhost${env.PORT}`);
    })
}

serverStart();