const {mongoose} = require('mongoose');
const { logger } = require('./config.winston');


mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODBURL, (err,req,res) => {
  if (err) {
    logger.debug("❌ Error:" + err);
  } else {
    
    logger.debug("🔥 Connected to MongoDB");
  }
});

module.exports = mongoose
