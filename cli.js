#!/usr/bin/env node
'use strict';

var fs = require('fs');
var vm = require('vm');
var flow = require('flow-bin');
var shell = require('shelljs');
var babel = require('babel-core');
var argv = require('minimist')(process.argv.slice(2));

/**
 * globe check <file name>
 */
if(argv._[0] === 'check') {
  var currentPath = process.cwd() + '/' + argv._[1];
  shell.exec([flow,'check-contents','<',currentPath].join(' '));
}

/**
 * globe run <file name>
 */
if(argv._[0] === 'run') {
  var currentPath = process.cwd() + '/' + argv._[1];
  var code = fs.readFileSync(currentPath,{encoding:'utf8'});
  var res = babel.transform(code,{
    plugins:['babel-plugin-transform-flow-strip-types']
  });
  vm.runInThisContext(res.code);
}
