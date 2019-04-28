module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'gobarber',
  operatorAliases: false,
  define: {
    timestamp: true,
    underscore: true,
    underscoreAll: true
  }
}
