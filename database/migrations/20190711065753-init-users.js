
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { STRING } = Sequelize;
    await queryInterface.addColumn('province', 'city', 'wxAccount', 'unionid', 'openid', 'accessToken', {
      type: STRING
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.removeColumn('province', 'city', 'wxAccount', 'unionid', 'openid', 'accessToken')
  }
};
