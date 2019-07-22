'use strict';

const Controller = require('egg').Controller;

class indexController extends Controller {
  async index() {
    this.ctx.body = 'text';
  }
}

module.exports = indexController;
