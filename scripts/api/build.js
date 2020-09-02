const sts = require("swagger-to-service");
const plugin = require("./plugin");
sts({
  url: "api.yaml", // yaml uri
  apiPath: "service/api.js",
  servicePath: "service/index.js",
  plugins: [plugin],
});
