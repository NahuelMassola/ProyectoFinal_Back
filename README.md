# Backend-final-coder

# Installation

1. clone the repository
2. npm install
3. create a file called ".env.development" or ".env.production" in root directory and add all enviroments variables 
4. npm run start:dev or start:prod

# Enviroment Variables

ENVIRONMENT='production or develpopment'

NODE_ENV='true'

MONGODBURL'URL to conect Mongo'

PORT='Port to deploy the app, for example: 8080'

COOKIE_USER='Cookies that the app will have, for example: cookie-user'

COOKIE_FORGOT='Cookies that the app will have, for example: cookie-forgot'

PRIVATE_KEY_JWT='JWT secret key'

REGISTER_STRATEGY='register strategy , for example: register'

LOGIN_STRATEGY='login strategy , for example: login'

JWT_STRATEGY='jwt strategy , for example jwt'

PERCIST='mongo'

USERMAILING='Mail from Gmail for send mail'

PASSWORDMAILING='Password Gmail for apps'

APIKEY_STRIPE='key for stripe'
