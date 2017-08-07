# node-protractor
A NodeJS API wrapper for Protractor 5+

#### Reasoning
It's been quite some time, but protractor still does not have a reliable API wrapper. Furthermore, it uses the EOL optimist npm package, which isn't updated anymore.

### Usage
```javascript
var protractor = require("node-protractor");
var argsFile = require("./args.json"); //Arguments file, which holds additional options, just like args passed into protractor CLI
protractor(argsFile);
```
Requires a `protractor.conf.js` to be present in `process.cwd()` with your protractor config. Otherwise - will fall back to local file.

### TODO
- Add local fallback file
- Add tests
- Add webdriver-manager-like support for getting binaries
