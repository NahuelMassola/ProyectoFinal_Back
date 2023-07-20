const dotenv = require('dotenv');
const { logger } = require('./config.winston');

dotenv.config({ path: `.env.${process.env.ENVIROMENT || "development"}`}) ;

logger.info(`'MODE : ${process.env.ENVIROMENT}'`)

const TYPE_DOCUMENTS = [
  'Identificación',
  'Comprobante de domicilio',
  'Comprobante de estado de cuenta'
]

module.exports ={
  NODE:process.env.ENVIRONMENT,
  MONGODBURL: process.env.MONGODBURL,
  DB_NAME: process.env.DB_NAME,
  DB_PASSWORD:process.env.DB_PASSWORD,
  DB_HOST:process.env.DB_HOST,
  PRIVATE_KEY_JWT: process.env.PRIVATE_KEY_JWT,
  REGISTER_STRATEGY: process.env.REGISTER_STRATEGY,
  LOGIN_STRATEGY: process.env.LOGIN_STRATEGY,
  JWT_STRATEGY: process.env.JWT_STRATEGY,
  PORT : process.env.PORT,
  COOKIE_USER : process.env.COOKIE_USER,
  COOKIE_FORGOT: process.env.COOKIE_FORGOT,
  PERCIST:process.env.PERCIST,
  APIKEY_STRIPE:process.env.APIKEY_STRIPE,
  MEILING:{
    user:process.env.USERMAILING,
    password:process.env.PASSWORDMAILING
  },
  TYPE_DOCUMENTS,
}
