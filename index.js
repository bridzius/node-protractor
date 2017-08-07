var path = require("path");
var fs = require("fs");
var protractorPath = path.dirname(require.resolve("protractor"));
var launcherPath = protractorPath + "/launcher";
var launcher = require(launcherPath);
var configFile = fs.existsSync(path.join(process.cwd(), "protractor.conf.js")) && path.join(process.cwd(), "protractor.conf.js");
if (!configFile) {
    if (fs.existsSync(path.join(__dirname, 'protractor.conf.js'))) {
        configFile = path.join(__dirname, 'protractor.conf.js');
    }
}

module.exports = function(argumentsFile) {
  launcher.init(configFile, argumentsFile)
}
