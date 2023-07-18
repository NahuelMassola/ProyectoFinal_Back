const { DB_NAME, DB_PASSWORD, DB_HOST }= require('./config');
const {mongoose} = require('mongoose');
const { logger } = require('./config.winston');

const URLMONGO = `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`

mongoose.set("strictQuery", false);
mongoose.connect(URLMONGO, (err,req,res) => {
  if (err) {
    logger.debug("❌ Error:" + err);
  } else {
    
    logger.debug("🔥 Connected to MongoDB");
  }
});

module.exports = mongoose

/* DB_NAME=nahuell
DB_PASSWORD=wO6LiWqtBLoC45YL
DB_HOST=cluster0.rgi9srv.mongodb.net */