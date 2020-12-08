/**
 * electron 打包
 */
const path = require('path');
const fs = require('fs');
const electron = require('electron');
const cp = require('child_process');
const rollup = require('rollup');
const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const ora = require('ora');
const waitOn = require('wait-on');
const options = require('./rollup.config');
const pkg = require('../package.json');

const opt = options(argv.env);
const TAG = '[script/build.js]';
const spinner = ora(`${TAG} Electron build...`);
const env = {};

try {
  // 解析 .env
  let env_str = fs.readFileSync(path.join(__dirname, '../.env'), 'utf-8');
  env_str = env_str.replace(/#.*\n/g, '') // 去掉注释
  for (const line of env_str.split('\n')) {
    const tmp = line.split('=');
    env[tmp[0]] = tmp[1];
  }
} catch (error) { }

if (argv.watch) {
  let child = null;

  waitOn({
    resources: [`http://localhost:${env.PORT}`],
    log: false,
  }, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // once here, all resources are available
    const watcher = rollup.watch(opt);
    watcher.on('change', filename => {
      const log = chalk.green(`change -- ${filename}`);
      console.log(TAG, log);
    });
    watcher.on('event', ev => {
      if (ev.code === 'END') {
        if (child) child.kill();
        child = cp.spawn(electron, [path.join(__dirname, '..', pkg.main)], { stdio: 'inherit', });
      } else if (ev.code === 'ERROR') {
        console.log(ev.error)
      }
    });
  });
} else {
  spinner.start();
  rollup.rollup(opt)
    .then(build => {
      spinner.stop();
      console.log(TAG, chalk.green('Electron build successed.'));
      build.write(opt.output);
    })
    .catch(error => {
      spinner.stop();
      console.log(`\n${TAG} ${chalk.red('构建报错')}\n`, error, '\n');
    });
}
