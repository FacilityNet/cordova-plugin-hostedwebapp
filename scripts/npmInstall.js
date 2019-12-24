#!/usr/bin/env node
/**
 * Inspired by:
 * https://stackoverflow.com/questions/31290828/install-node-dependencies-for-cordova-plugin
 */
(function () {
  'use strict';

  const { spawnSync } = require('child_process');
  const npmInstall = spawnSync('npm', ['install', '--only=prod']);

  var err = npmInstall.stderr;
  if (err && err !== '' && err.length > 0) {
    console.log('Error in cordova-plugin-hostedwebapp after_plugin_install for npmInstall.js:\n' + err.toString());
  }

  var out = npmInstall.stdout;
  if (out && out !== '' && out.length > 0) {
    console.log('cordova-plugin-hostedwebapp - after_plugin_install - npmInstall.js:\n' + out.toString());
  }

}());
