const Redis = require("ioredis");

const client = new Redis(); // it hits 6379 by default


module.exports = client;
