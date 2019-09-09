'use strict';
const { mongoose, autoIncrement, Schema } = require('../common/server');

const posingSchema = new Schema({

  title: { type: String, required: true, defalut: ''}, // 文章标题

  description: { type: String, default: '' }, // 简介

  author: { type: String, default: '' }, // 作者

  content: { type: String, defalut: '' }, // 内容

  create_time: { type: Date, default: Date.now }, // 创建日期

  update_time: { type: Date, defalut: Date.now },
});

posingSchema.plugin(autoIncrement.plugin, {
  model: 'posing',
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});


exports.Posing = mongoose.model('posing', posingSchema)