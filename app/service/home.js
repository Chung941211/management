'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async index(page = 1) {
    const { serverUrl, id, openid } = this.config.index;

    const data = await this.ctx.curl(`${serverUrl}/center/member_center`, {
      data: {
        id: `"${id * (page - 1)}"`,
        openid: `"${openid * page - 1}"`,
      },
      dataType: 'json',
    });

    // const indexList = await Promise.all(
    //   Object.keys(idList).map(key => {
    //     const url = `${serverUrl}/item/${idList[key]}.json`;
    //     return this.ctx.curl(url, { dataType: 'json' });
    //   })
    // );

    // return indexList.map(res => res.data);
    return data;
  }
}

module.exports = HomeService;
