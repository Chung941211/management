/**
 * MongoDB 连接模块
 */

'use strict';

const config = require('../../config/config.default'),
  mongoose = require('mongoose'),
  consola = require('consola'),
  autoIncrement = require('mongoose-auto-increment');


exports.connect = () => {

  mongoose.connect(config.MONGODB.url, {
    useCreateIndex: true,
    useNewUrlParser: true,
  });

  mongoose.connection.on('error', error => consola.warn('MongoDB 连接失败!', error));

  mongoose.connection.on('open', () => consola.ready('MongoDB 连接成功'));

  return mongoose;
};

autoIncrement.initialize(mongoose.connection);

exports.Schema = mongoose.Schema;

exports.autoIncrement = autoIncrement;

exports.mongoose = mongoose;
