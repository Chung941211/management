/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1563706066385_5720';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.MONGODB = {
    url: 'mongodb://localhost:27017/management',
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  config.index = {
    id: 'a450089706',
    serverUrl: 'http://twxapp.jperation.cn/index.php/iapi/membervip',
    openid: 'o9Vbtw1W0ke-eb0g6kE4SD1eh6qU',
  };

  return {
    ...config,
    ...userConfig,
  };
};
