const Controller = require('egg').Controller;
class Login extends Controller {
  async login() {
    const ctx = this.ctx;
    const query = ctx.request.body
    const res = await ctx.service.login.find(query);
    if (res) {
      ctx.body = {
        status: 200,
        data: Object.assign(res)
      }
    } else {
      ctx.body = {
        status: 500,
        data: {
          error: '登录授权失败!'
        }
      }
    }
  }
}
module.exports = Login
