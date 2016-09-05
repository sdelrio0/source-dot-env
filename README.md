# Source.env

Tiny library to load (bash) sourceable .env files.

[![Travis build](https://img.shields.io/travis/sdelrio0/source-dot-env.svg?style=flat)](https://travis-ci.org/sdelrio0/source-dot-env)
[![Codecov coverage](https://img.shields.io/codecov/c/github/sdelrio0/source-dot-env.svg?style=flat)]()
[![npm version](https://img.shields.io/npm/v/source-dot-env.svg?style=flat)](https://www.npmjs.com/package/source-dot-env)
[![npm licence](https://img.shields.io/npm/l/source-dot-env.svg?style=flat)](https://en.wikipedia.org/wiki/MIT_License)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat)](http://commitizen.github.io/cz-cli/)

Files can be in the format:
```bash
#!/usr/bin/env bash
export STR_VAR="value" # Supports inline comments 
export NUM_VAR=123
export NULL_VAR=
```

And also without the `export` statements:
```bash
STR_VAR="value" # Supports inline comments 
NUM_VAR=123
NULL_VAR=
```
Useful when dealing with files that are also loaded via scripts, ie. `source .env.test`


## Usage
Require the library before anything else in your application.

#### Load default `.env` file:
```javascript
require('source-dot-env')();
```

#### Load a specific file:
```javascript
require('source-dot-env')('.env.development');
```

#### Return the loaded env vars:
```javascript
const env = require('source-dot-env')();

// env = {
//   NODE_ENV: 'development',
//   PORT: 8080
// }
```

# MIT Licence

Copyright (c) 2016 Sergio del Rio


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.