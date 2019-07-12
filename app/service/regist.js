const Service = require('egg').Service;
class Regist extends Service {
  async create(user) {
    const { name, password } = user
    const item = this.ctx.model.User.findOne({ where: { name } })
    if (item) return false
    return this.ctx.model.User.create({ name, password });
  }
}
module.exports = Regist
