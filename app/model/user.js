

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    password: STRING,
    phone: INTEGER,
    province: STRING,
    city: STRING,
    address: STRING,
    wx_account: STRING,
    unionid: STRING,
    openid: STRING,
    access_token: STRING,
    created_at: DATE,
    updated_at: DATE,
    avatar_url: STRING
  });
  return User;
}

