'use strict';
/**
 * env.js
 */
var path = require('path');
var fs = require('fs');

/**
 * Set environment variables from .env file
 *
 * Reads a bash-sourceable .env file in which each line has the format:
 * ```
 * export STR_VAR="value"
 * export NUM_VAR=123
 * export NULL_VAR=
 * ```
 *
 * Or without the export statement
 * ```
 * STR_VAR="value"
 * NUM_VAR=123
 * NULL_VAR=
 * ```
 *
 * Supports comments with #
 *
 * @param {string} fileName - File name, relative to the current working directory
 * @returns {object} - The updated variables
 */
module.exports = function(fileName) {
  if(!fileName) fileName = '.env';
  
  var filePath = path.join(process.cwd(), fileName);
  var fileContents = fs.readFileSync(filePath, {encoding: 'utf-8'});
  
  let env = {};
  fileContents
    .split('\n')
    .map(l => l.split('#')[0] || '')
    .map(l => l.indexOf('export ') > -1 ? l.split('export ')[1] || '' : l)
    .filter(l => l.trim() !== '')
    .map(l => {
      let key = l.split('=')[0].trim();
      let val = l.split('=')[1].trim();
      
      val = val ? JSON.parse(val) : null;
      
      env[key] = val;
      process.env[key] = env[key] ? env[key] : '';
    });
  
  return env;
};
