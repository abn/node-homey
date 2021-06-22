'use strict';

const colors = require('colors');
const { Log } = require('../../..');
const { App } = require('../../..');

exports.desc = 'View your app in the Homey Apps Store';
exports.handler = async yargs => {
  const appPath = yargs.path || process.cwd();

  try {
    const manifest = App.getManifest({ appPath: yargs.path });
    const url = `https://homey.app/a/${manifest.id}`;
    Log(colors.green(`✓ Opening URL: ${url}`));
    open(url);
  } catch (err) {
    Log(colors.red(err.message));
  }
};
