'use strict';
const expect = require('chai').expect;
const env = require('../index.js');

beforeEach(function() {
  delete process.env.STR_VAR;
  delete process.env.NUM_VAR;
  delete process.env.NULL_VAR;
});

describe('DEFAULT .env file', function() {
  const expectedMap = {
    STR_VAR: 'value',
    NUM_VAR: 123,
    NULL_VAR: null
  };
  const expectedEnv = {
    STR_VAR: 'value',
    NUM_VAR: '123',
    NULL_VAR: ''
  };
  
  it('sets the environment', function() {
    const resultingEnv = env();
    
    expect(process.env.STR_VAR).to.equal(expectedEnv.STR_VAR);
    expect(process.env.NUM_VAR).to.equal(expectedEnv.NUM_VAR); // Numbers are converted to strings
    expect(process.env.NULL_VAR).to.equal(expectedEnv.NULL_VAR);
  });
  
  it('returns correct variables', function() {
    const resultingEnv = env();
    
    expect(resultingEnv).to.eql(expectedMap);
  });
});

describe('SOURCEABLE .env file', function() {
  const expectedMap = {
    STR_VAR: 'strstr',
    NUM_VAR: 333,
    NULL_VAR: null
  };
  const expectedEnv = {
    STR_VAR: 'strstr',
    NUM_VAR: '333',
    NULL_VAR: ''
  };
  
  it('sets the environment', function() {
    const resultingEnv = env('.env.sh');
    
    expect(process.env.STR_VAR).to.equal(expectedEnv.STR_VAR);
    expect(process.env.NUM_VAR).to.equal(expectedEnv.NUM_VAR); // Numbers are converted to strings
    expect(process.env.NULL_VAR).to.equal(expectedEnv.NULL_VAR);
  });
  
  it('returns correct variables', function() {
    const resultingEnv = env('.env.sh');
    
    expect(resultingEnv).to.eql(expectedMap);
  });
});

describe('NON_EXISTENT .env file', function() {
  const expectedMap = {};
  
  it('doesn\'t throw', function() {
    const resultingEnv = env('.env.doesnt-exist');
    expect(resultingEnv).to.eql(expectedMap);
  });
});
