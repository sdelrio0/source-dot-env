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