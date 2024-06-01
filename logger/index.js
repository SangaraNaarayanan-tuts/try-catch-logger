const logger = {
  currentTime: new Date().toLocaleString(),
  info: function (details) {
    console.info(`[INFO] [${this.currentTime}] ${details}`);
  },
  success: function (details) {
    console.log(`[SUCCESS] [${this.currentTime}] ${details}`);
  },
  error: function (details, error) {
    console.error(`[ERROR] [${this.currentTime}] ${details}`);

    if (error) {
      console.log(JSON.stringify(error, null, 5));
    }
  }
};

module.exports = logger;
