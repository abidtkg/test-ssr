const serverless = require("serverless-http");
const { app } = require("./dist/dlsoft/server/main");

exports.handler = serverless(app());