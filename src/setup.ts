import dotenv from 'dotenv';

let envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev';

envFile = process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test';

dotenv.config({
    path: envFile,
});
