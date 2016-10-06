#!/usr/bin/env node
'use strict';

var flow = require('flow-bin');
var shell = require('shelljs');
var argv = require('minimist')(process.argv.slice(2));

/**
 * globe check <file name>
 */
if(argv._[0] === 'check') {
  var currentPath = process.cwd() + '/' + argv._[1];
  shell.exec([flow,'check-contents','<',currentPath].join(' '));
}
