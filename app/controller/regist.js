const Controller = require('egg').Controller;
class Regist extends Controller {
  async create() {
    const ctx = this.ctx;
    const user = await ctx.service.regist.create(ctx.request.body);
    if (user) {
      ctx.body = {
        status: 200,
        data: 'success'
      }
    } else {
      ctx.body = {
        status: 500,
        data: {
          error: '该用户已存在!'
        }
      }
    }

  }
}
module.exports = Regist
