'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const dataList = await ctx.service.home.index(page);
    await this.ctx.render('home/index.tpl', dataList);
  }
}

module.exports = HomeController;
