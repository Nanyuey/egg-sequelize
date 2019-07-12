
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    // const query = {
    //   limit: ctx.helper.parseInt(ctx.query.limit),
    //   offset: ctx.helper.parseInt(ctx.query.offset)
    // };
    ctx.body = await ctx.service.user.list();
  }

  async show() {
    const ctx = this.ctx;
    const { query } = ctx
    ctx.body = await ctx.service.user.find(query);
  }

  async create() {
    const ctx = this.ctx;
    const user = await ctx.service.user.create(ctx.request.body);
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

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.user.update({ id, updates: body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.user.del(id);
    ctx.status = 200;
  }
}

module.exports = UserController
