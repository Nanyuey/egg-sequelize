const Service = require('egg').Service;
class Login extends Service {
  async find(params) {
    const { name, code, avatar_url } = params
    const openid = await this.getOpenid(code)
    let user = await this.ctx.model.User.findOne({ where: { openid } });
    if (!user) {
      user = await this.ctx.model.User.create({ name, openid, avatar_url })
    }
    const token = await this.getToken()
    await user.update({ access_token: token })
    return user
  }
  async getOpenid(code) {
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=wx40c144f46e33df8b&secret=92abe954f5f97d75b72936c8fcc41201&js_code=${code}&grant_type=authorization_code`
    const result = await this.ctx.curl(
      url,
      {
        method: 'GET',
        dataType: 'json',
        headers: this.app.config.headers
      }
    )
    if (result.data.openid) return result.data.openid
  }
  async getToken() {
    const tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx40c144f46e33df8b&secret=92abe954f5f97d75b72936c8fcc41201'
    const token = await this.ctx.curl(
      tokenUrl,
      {
        method: 'GET',
        dataType: 'json',
        headers: this.app.config.headers
      }
    )
    if (token.data) return token.data.access_token
  }
}
module.exports = Login
