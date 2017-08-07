var path = require("path");
var protractorPath = path.dirname(require.resolve("protractor"));
var launcherPath = protractorPath + "/launcher";
var launcher = require(launcherPath);
var configFile = fs.existsSync(path.join(process.cwd(), "protractor.conf.js")) && path.join(process.cwd(), "protractor.conf.js");
if (!configFile) {
    if (fs.existsSync('./protractor.conf.js')) {
        configFile = './protractor.conf.js';
    }
}

module.exports = function(argumentsFile) {
  launcher.init(configFile, argumentsFile)
}
