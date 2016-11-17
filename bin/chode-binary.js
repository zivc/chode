#!/usr/bin/env node
let chode = require('../lib/chode.js'),
    program = cli = require('commander'),
    pkg = require('../package.json');


cli
  .version('0.0.1');

cli
  .command('new <dir>')
  .description('Set up chode in a specified directory')
  .action(chode.new);

cli.parse(process.argv);
