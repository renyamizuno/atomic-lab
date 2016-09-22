#! /usr/bin/env node
var atomic = require('../index.js');
var bs = require('browser-sync').create();
exports.builder = {
  d:{
  	alias: 'dist',
  	describe: 'set styleguide directory',
  	default:"styleguide/resources/setting.json"
  },
  m:{
  	alias: 'markup',
  	describe: 'set template engine',
  	default:"ejs"
  },
  s:{
  	alias: 'source',
  	describe: 'set component directory',
  	default:"components/"
  },
  sample:{
  	default:true
  },
  server:{
  	default:"styleguide"
  }
}

exports.handler = function (argv) {
	bs.init({
    server: argv.server
	});
	atomic.build({
		src:argv.source,
		dist:argv.dist,
		markup:argv.markup
	}).then(bs.reload());
};