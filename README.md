# Source.env

Tiny library to load (bash) sourceable .env files.

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